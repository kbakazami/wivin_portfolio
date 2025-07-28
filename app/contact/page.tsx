import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16">
            <div className="w-full max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-[#113F67]">Contact</h1>
                <p className="text-lg text-center mb-8">
                    Cette page est dédiée à la prise de contact. N'hésitez pas à m'envoyer un message&nbsp;!
                </p>
                <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <div>
                        <label htmlFor="nom" className="block text-lg font-semibold text-[#113F67] mb-2">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="nom"
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#113F67]"
                            placeholder="Votre nom"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-[#113F67] mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#113F67]"
                            placeholder="Votre email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-semibold text-[#113F67] mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#113F67]"
                            placeholder="Votre message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-[#113F67] text-white text-lg font-bold rounded hover:bg-[#34699A] transition-colors duration-300"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;