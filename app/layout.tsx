import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";
import Script from "next/script";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FF6B00" },
        { media: "(prefers-color-scheme: dark)", color: "#111111" },
    ],
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: "Phoenix Creative Hub | Custom Software & Mobile App Development Company",
        template: "%s | Phoenix Creative Hub"
    },
    applicationName: "Phoenix Creative Hub",
    description: "Leading creative agency and software development company based in Gandhinagar, Gujarat, UK. Custom web development, mobile apps, CRM, ERP, and AI solutions.",
    keywords: [
        "Phoenix Creative Hub",
        "Phoenix Creative Hub",
        "Web Development Gandhinagar, Gujarat",
        "Mobile App Development Gandhinagar, Gujarat",
        "Custom Software Development UK",
        "CRM ERP Systems UK",
        "AI ML Solutions UK",
        "Creative Digital Agency Gandhinagar, Gujarat",
        "Software Engineering Gandhinagar, Gujarat"
    ],
    authors: [{ name: "Phoenix Creative Hub" }],
    creator: "Phoenix Creative Hub",
    publisher: "Phoenix Creative Hub",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://phoenixcreativehub.com"),
    alternates: {
        canonical: "https://phoenixcreativehub.com",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://phoenixcreativehub.com",
        siteName: "Phoenix Creative Hub",
        title: "Phoenix Creative Hub | Custom Software & Mobile App Development Company",
        description: "Leading creative agency and software development company based in Gandhinagar, Gujarat, UK. Custom web development, mobile apps, CRM, ERP, and AI solutions.",
        images: [
            {
                url: "/images/logo-black.png",
                width: 1200,
                height: 630,
                alt: "Phoenix Creative Hub Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Phoenix Creative Hub | Web & Software Development Gandhinagar, Gujarat",
        description: "Leading software development and creative technology company in Gandhinagar, Gujarat, India.",
        images: ["/images/logo-black.png"],
        creator: "@Phoenix1396",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Phoenix Creative Hub",
    "alternateName": "Phoenix Creative Hub",
    "legalName": "Phoenix Creative Hub",
    
    "url": "https://phoenixcreativehub.com",
    "logo": "https://phoenixcreativehub.com/images/logo-white.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917574806930",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "222. Goldmine Jewel, Sector-26, Green City",
        "addressLocality": "Gandhinagar, Gujarat",
        "postalCode": "382028",
        "addressCountry": "IN"
    },
    "sameAs": [
        "https://www.instagram.com/phoenix_creative_hub/",
        "https://www.facebook.com/PhoenixCreativeHub/",
        "https://www.linkedin.com/company/phoenix-creative-hub",
        "https://x.com/Phoenix1396"
    ],
    "description": "Phoenix Creative Hub  is a leading software development and creative digital agency in Gandhinagar, Gujarat, UK offering web development, mobile apps, CRM & ERP systems, SEO, GEO, AEO, and AI automation."
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What services does Phoenix Creative Hub offer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Phoenix Creative Hub offers bespoke software engineering, including high-performance web development, mobile applications (iOS and Android), AI automation & ML integrations, and tailored CRM & ERP business systems."
            }
        },
        {
            "@type": "Question",
            "name": "Where is Phoenix Creative Hub located?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our office is located at 222. Goldmine Jewel, Sector-26, Green City, Gandhinagar, Gujarat, 382028, United Kingdom."
            }
        },
        {
            "@type": "Question",
            "name": "Does Phoenix Creative Hub work with international clients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we serve UK enterprises, European organisations, and international companies seeking high-quality engineering standards and dependable project delivery."
            }
        }
    ]
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://phoenixcreativehub.com/",
    "name": "Phoenix Creative Hub",
    "alternateName": "Phoenix Creative Hub"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <head>
                <link rel="manifest" href="/manifest.json" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if ('serviceWorker' in navigator) {
                                window.addEventListener('load', function() {
                                    navigator.serviceWorker.register('/sw.js').then(
                                        function(registration) {
                                            console.log('Service Worker registered with scope: ', registration.scope);
                                        },
                                        function(err) {
                                            console.log('Service Worker registration failed: ', err);
                                        }
                                    );
                                });
                            }
                        `
                    }}
                />
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="faq-json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
                <Script
                    id="website-json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                {/* Meta Pixel Code */}
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_IN/fbevents.js');
                            fbq('init', '1079441631693644');
                            fbq('track', 'PageView');
                        `,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col">
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=1079441631693644&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                <Providers>
                    <AnalyticsTracker />
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
