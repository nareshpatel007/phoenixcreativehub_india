import { Metadata } from 'next'
import { MobileApplicationPortfolioClient } from './MobileApplicationPortfolioClient'

export const metadata: Metadata = {
    title: "Mobile App Development Portfolio | iOS & Android Apps | Phoenix Creative Hub",
    description: "Explore our Mobile App Development portfolio. Discover how Phoenix Creative Hub engineers high-performance iOS, Android, and cross-platform mobile apps.",
    keywords: [
        'Mobile App Development Portfolio',
        'iOS App Development',
        'Android App Development',
        'React Native Applications',
        'Mobile Software Portfolio',
        'Phoenix Creative Hub Mobile Apps',
        'Enterprise Mobile Solutions'
    ],
    openGraph: {
        title: "Mobile App Development Portfolio | Phoenix Creative Hub",
        description: "Build Smarter. Automate Faster. Grow Better. View custom iOS & Android mobile applications, tech stack, and business impact.",
        url: 'https://phoenixcreativehub.com/portfolio/mobile-application',
        siteName: 'Phoenix Creative Hub',
        images: [{
            url: '/images/logo-black.png',
            width: 1200,
            height: 630,
            alt: 'Phoenix Creative Hub Logo',
        }],
        locale: 'en_GB',
        type: 'website',
    },
}

export default function MobileApplicationPortfolioPage() {
    return <MobileApplicationPortfolioClient />
}
