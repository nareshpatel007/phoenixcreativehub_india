import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "About Us | Software Development Company Gandhinagar, Gujarat",
    description: "Learn about Phoenix Creative Hub, Gandhinagar, Gujarat's leading software development company. 8+ years experience, 100+ successful projects delivered globally.",
    keywords: ['About Phoenix Creative Hub', 'Software Company Gandhinagar, Gujarat', 'IT Company UK', 'Web Development Team', 'Mobile App Developers', 'Custom Software Engineers'],
    openGraph: {
        title: "About Us | Software Development Company Gandhinagar, Gujarat",
        description: "Learn about Phoenix Creative Hub, Gandhinagar, Gujarat's leading software development company. 8+ years experience, 100+ successful projects.",
        url: 'https://phoenixcreativehub.com/about-us',
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
