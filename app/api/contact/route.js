import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Configurer le transporteur (SMTP)
        // Note: Vous devrez configurer ces variables dans .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_PORT === '465', // true pour 465, false pour les autres ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Contenu du mail
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: 'sename@lafricainedarchitecture.com',
            replyTo: email,
            subject: `Nouveau message de ${name} via le site web`,
            text: message,
            html: `
                <h3>Nouveau message de contact</h3>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Envoyer le mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
    }
}
