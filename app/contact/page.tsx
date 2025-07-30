import React from "react";
import AnimatedSection from "@/app/_components/AnimatedSection";

const Contact: React.FC = () => {
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
                    <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                        <div>
                            <label htmlFor="nom" className="block text-lg font-semibold text-[#30475E] mb-2">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="nom"
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30475E]"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-[#30475E] mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30475E]"
                                placeholder="Votre email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold text-[#30475E] mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30475E]"
                                placeholder="Votre message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-[#30475E] text-white text-lg font-bold rounded hover:bg-[#7E8A97] cursor-pointer transition-colors duration-300"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;