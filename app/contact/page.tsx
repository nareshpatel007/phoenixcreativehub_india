import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Contact Us | Get Free Quote for Software Development",
    description: "Contact Phoenix Creative Hub Gandhinagar, Gujarat for custom software development. Call +91 7574806930. Expert web, mobile apps, CRM & IT consulting solutions.",
    keywords: ['Contact Phoenix Creative Hub', 'Software Development Contact', 'IT Company Gandhinagar, Gujarat', 'Web Development Quote', 'Mobile App Development Inquiry', 'Custom Software Consultation'],
    openGraph: {
        title: "Contact Us | Get Free Quote for Software Development",
        description: "Contact Phoenix Creative Hub Gandhinagar, Gujarat for custom software development. Call +91 7574806930. Expert web, mobile apps, CRM & IT consulting.",
        url: 'https://phoenixcreativehub.com/contact',
        siteName: 'Phoenix Creative Hub',
        images: [{
            url: '/images/logo-black.png',
            width: 1200,
            height: 630,
        }],
        locale: 'en_GB',
        type: 'website',
    },
};

export default function Page() {
    return <ClientPage />;
}
