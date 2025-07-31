"use client";
import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface Props { children: ReactNode; }

export default function ReCaptchaProvider({ children }: Props) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            scriptProps={{ async: true, defer: true, appendTo: "head" }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
