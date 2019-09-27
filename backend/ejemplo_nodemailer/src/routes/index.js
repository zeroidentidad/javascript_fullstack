const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>Información usuario:</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
            <li>Numero Cel: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'brittany90@ethereal.email',
            pass: 'fcM7NmKnCXaFxExvB3'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"Fazt Server" <testtwo@fazttech.xyz>', // sender address,
        to: 'fakename@gmail.com',
        subject: 'Formulario de contacto del website',
        html: contentHTML
    })

    console.log('Mensaje enviado: %s', info.messageId);
    // Mensaje enviado: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('URL vista previa: %s', nodemailer.getTestMessageUrl(info));
    // URL vista previa: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.redirect('/success.html');
});

module.exports = router;