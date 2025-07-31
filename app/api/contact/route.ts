import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message, recaptchaToken } = await req.json();

    // ⇨ on renomme ici pour que la suite du code reste la même
    const token = recaptchaToken as string;

    // Vérification reCAPTCHA v3
    const verifyRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        }
    );
    const captchaData = await verifyRes.json();
    if (!captchaData.success) {
        return NextResponse.json(
            { error: "Captcha invalide" },
            { status: 400 }
        );
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail", // ou ton provider
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    // Optionnel : vérifie la connexion au SMTP dès le départ
    transporter.verify((err, success) => {
        if (err) console.error("SMTP Connection Error:", err);
        else console.log("SMTP prêt à envoyer des mails");
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.MAIL_TO,
            subject: `Nouveau message de ${name}`,
            html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Erreur Nodemailer:", error);
        return NextResponse.json(
            { error: error.message || "Erreur lors de l'envoi du mail" },
            { status: 500 }
        );
    }
}
