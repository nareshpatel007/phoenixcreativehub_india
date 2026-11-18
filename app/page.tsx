import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Phoenix Creative Hub - Premier Web, Mobile & Software Solutions Gandhinagar, Gujarat',
    description: 'Premier digital engineering agency in Gandhinagar, Gujarat, India. Custom web development, iOS & Android mobile apps, bespoke CRM & ERP platforms, and AI automation.',
    keywords: ['Web Development Gandhinagar, Gujarat', 'Mobile App Development UK', 'Custom Software Gandhinagar, Gujarat', 'CRM ERP Systems', 'AI Automation UK', 'Phoenix Creative Hub'],
    openGraph: {
        title: 'Phoenix Creative Hub - Premier Web, Mobile & Software Solutions Gandhinagar, Gujarat',
        description: 'Premier digital engineering agency in Gandhinagar, Gujarat, India. Custom web development, iOS & Android mobile apps, bespoke CRM & ERP platforms, and AI automation.',
        url: 'https://phoenixcreativehub.com',
        siteName: 'Phoenix Creative Hub',
        images: [{
            url: 'https://phoenixcreativehub.com/images/logo-black.png',
            width: 1200,
            height: 630,
        }],
        locale: 'en_GB',
        type: 'website',
    },
}

export default function Home() {
    return <HomeClient />
}
