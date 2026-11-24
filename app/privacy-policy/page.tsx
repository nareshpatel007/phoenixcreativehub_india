import React from "react";
import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { Shield, Lock, FileText, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Phoenix Creative Hub",
    description: "Read Phoenix Creative Hub's privacy policy. Learn how we collect, use, and safeguard your personal information when you visit our website.",
    alternates: {
        canonical: "https://phoenixcreativehub.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            <ServiceHeader
                title="Privacy Policy"
                subtitle="How we collect, use, and safeguard your personal information and project data."
                badge="Legal Policies"
                icon={<Shield className="w-3.5 h-3.5" />}
            />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 leading-relaxed space-y-10 font-medium">
                    
                    {/* Intro / Effective date banner */}
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6B00]/10 text-[#FF6B00]">
                            Effective Date: 1st April, 2024
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            At <strong>Phoenix Creative Hub</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, <a href="https://phoenixcreativehub.com/" className="text-[#FF6B00] hover:underline font-semibold">https://phoenixcreativehub.com/</a>.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            1. Information We Collect
                        </h2>
                        <p className="text-sm text-slate-600">
                            We collect different types of information depending on how you interact with our Site:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 pt-1">
                            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                                <h3 className="font-bold text-[#111111] text-sm">Personal Information</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    When you contact us or request services, we may collect personal details such as your name, email address, phone number, and company information.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                                <h3 className="font-bold text-[#111111] text-sm">Technical Information</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    We automatically collect certain data about your device, browsing actions, and usage patterns. This may include your IP address, browser type, operating system, and other interaction data.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-sm text-slate-600">The information we collect is used for:</p>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                                <span><strong>Service Delivery:</strong> To respond to your inquiries, provide IT and creative services, and manage our client relationships.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                                <span><strong>Site Improvement:</strong> To analyze how our Site is used and to improve its content, performance, and functionality.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                                <span><strong>Marketing Communications:</strong> With your consent, we may send you updates, newsletters, or promotional materials related to our services.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            3. Sharing Your Information
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following cases:
                        </p>
                        <div className="space-y-3 text-sm text-slate-600">
                            <div className="p-4 rounded-xl bg-white border border-slate-200">
                                <strong className="text-[#111111] block mb-1">Service Providers:</strong>
                                We may share your information with trusted third-party providers who assist us in operating our Site, conducting our business, or serving our clients, so long as those parties agree to keep this information confidential.
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-slate-200">
                                <strong className="text-[#111111] block mb-1">Legal Compliance:</strong>
                                We may disclose your information if required by law, or in response to valid requests by public authorities.
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            4. Cookies and Tracking Technologies
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Our Site uses cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us understand your preferences and improve our Site’s performance. You can choose to disable cookies through your browser settings, but doing so may affect your experience on our Site.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            5. Data Security
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet can be guaranteed to be completely secure, and we cannot ensure the absolute security of any information you transmit to us.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            6. Your Rights
                        </h2>
                        <p className="text-sm text-slate-600">You have the right to:</p>
                        <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-600">
                            <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                                <strong className="text-[#111111] block text-sm mb-1">Access:</strong>
                                Request a copy of the personal information we hold about you.
                            </div>
                            <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                                <strong className="text-[#111111] block text-sm mb-1">Correction:</strong>
                                Request that we correct any inaccuracies in your personal information.
                            </div>
                            <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                                <strong className="text-[#111111] block text-sm mb-1">Deletion:</strong>
                                Request the deletion of your personal information, subject to certain legal obligations.
                            </div>
                            <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                                <strong className="text-[#111111] block text-sm mb-1">Opt-Out:</strong>
                                Unsubscribe from marketing communications by following instructions in the message or contacting us.
                            </div>
                        </div>
                    </div>

                    {/* Section 7 & 8 */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            7. Third-Party Links &amp; 8. Changes to This Policy
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Our Site may contain links to third-party websites. We are not responsible for these external sites’ privacy practices or content. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </div>

                    {/* Section 9: Contact */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            9. Contact Us
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy or our data practices, please get in touch with us at:
                        </p>
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm space-y-3">
                            <p className="font-bold text-[#111111] text-base">Phoenix Creative Hub</p>
                            <p className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                                <span>222, 2nd Floor, Gold Mine Jewel, Sector 26, Green City, Gandhinagar, Gujarat - 382028, India.</span>
                            </p>
                            <p className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                                <span>Email: <a href="mailto:info@phoenixcreativehub.com" className="text-[#FF6B00] hover:underline font-semibold">info@phoenixcreativehub.com</a>, <a href="mailto:ravi@phoenixcreativehub.com" className="text-[#FF6B00] hover:underline font-semibold">ravi@phoenixcreativehub.com</a></span>
                            </p>
                            <p className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                                <span>Phone: <a href="tel:+917574806930" className="hover:text-[#FF6B00] font-semibold">+91 7574806930</a>, <a href="tel:+916356266930" className="hover:text-[#FF6B00] font-semibold">+91 6356266930</a></span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
