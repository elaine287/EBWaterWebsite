require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Serve static files (HTML, CSS, JS) from the current directory

// Configure Nodemailer Transport
// You will need to replace the user and pass in the .env file with actual SMTP credentials
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Verify SMTP connection
transporter.verify((error, success) => {
    if (error) {
        console.warn('SMTP Connection Error: Please configure your .env file with valid SMTP credentials to send emails.', error.message);
    } else {
        console.log('SMTP Server is ready to take our messages');
    }
});

// Handle General Contact Enquiry
app.post('/api/submit-enquiry', async (req, res) => {
    const { name, organisation, email, phone, enquiry, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`, // Usually needs to be the authenticated user
        replyTo: email,
        to: 'elaine@ebwater.co.uk',
        subject: `New Enquiry from ${name} (${organisation || 'No Organisation'})`,
        text: `
You have received a new general enquiry:

Name: ${name}
Organisation: ${organisation || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Enquiry Type: ${enquiry || 'N/A'}

Message:
${message}
        `,
        html: `
            <h2>New General Enquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Organisation:</strong> ${organisation || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Enquiry Type:</strong> ${enquiry || 'N/A'}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Enquiry sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send enquiry. Please try again later.' });
    }
});

// Handle Consultation Request
app.post('/api/submit-consultation', async (req, res) => {
    const { name, organisation, email, phone, role, service, premises, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: 'elaine@ebwater.co.uk',
        subject: `Consultation Request: ${service} - ${name} (${organisation})`,
        text: `
You have received a new consultation request:

Name: ${name}
Organisation: ${organisation}
Role: ${role || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Service Required: ${service}
Premises Type: ${premises || 'N/A'}

Message:
${message}
        `,
        html: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Organisation:</strong> ${organisation}</p>
            <p><strong>Role:</strong> ${role || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Service Required:</strong> ${service}</p>
            <p><strong>Premises Type:</strong> ${premises || 'N/A'}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Consultation request sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send consultation request. Please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
