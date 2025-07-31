"use client";
import React, {useState} from "react";
import AnimatedSection from "@/app/_components/AnimatedSection";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

const Contact: React.FC = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            alert("reCAPTCHA non initialisé");
            return;
        }

        setSending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name    = formData.get("name")    as string;
        const email   = formData.get("email")   as string;
        const message = formData.get("message") as string;

        const token = await executeRecaptcha('contact');

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message, recaptchaToken: token }),
        });

        if (res.ok) {
            setMessage("Message envoyé avec succès !");
            form.reset();
        } else {
            const err = await res.json();
            setMessage("Erreur lors de l'envoi du message. Veuillez réessayer plus tard.");
            alert("Erreur lors de l'envoi : " + (err.message || res.statusText));
        }

        setSending(false);
    };

    return (
        <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16">
                <div className="w-full max-w-2xl px-4 py-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-gray-800">Contact</h1>
                    <div className="lg:w-80 w-40 h-1 mx-auto bg-[#30475E] my-4 rounded-full"></div>
                    <p className="text-lg text-center mb-8">
                        Cette page est dédiée à la prise de contact. N'hésitez pas à m'envoyer un message&nbsp;!
                    </p>
                    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                        {message && (
                            <div className="mt-4 text-center text-lg text-green-600">
                                {message}
                            </div>
                        )}
                        <div>
                            <label htmlFor="nom" className="block text-lg font-semibold text-[#30475E] mb-2">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="nom"
                                name="name"
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30475E]"
                                placeholder="Votre nom"
                                maxLength={20}
                                minLength={2}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-[#30475E] mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30475E]"
                                placeholder="Votre email"
                                maxLength={100}
                                minLength={5}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold text-[#30475E] mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                name="message"
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30475E]"
                                placeholder="Votre message"
                                maxLength={500}
                                minLength={10}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-[#30475E] text-white text-lg font-bold rounded hover:bg-[#7E8A97] cursor-pointer transition-colors duration-300"
                        >
                            {sending ? "Envoi en cours..." : "Envoyer"}
                        </button>
                    </form>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;