import React from "react";
import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { RefreshCw, CheckCircle2, XCircle, Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Refund and Returns Policy | Phoenix Creative Hub",
    description: "Read Phoenix Creative Hub's refund and returns policy for digital and custom software, web development, and creative services.",
    alternates: {
        canonical: "https://phoenixcreativehub.com/refund_returns",
    },
};

export default function RefundReturnsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            <ServiceHeader
                title="Refund and Returns Policy"
                subtitle="Guidelines and criteria regarding refunds, revisions, and returns for custom digital solutions."
                badge="Customer Care"
                icon={<RefreshCw className="w-3.5 h-3.5" />}
            />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 leading-relaxed space-y-10 font-medium">

                    {/* Intro / Last Updated banner */}
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6B00]/10 text-[#FF6B00]">
                            Last Updated: 1st April, 2024
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Thank you for choosing <strong>Phoenix Creative Hub</strong> for your graphic design, digital marketing, and software development needs. We strive to provide the best possible service, but we understand that sometimes things don’t go as planned. This Refund and Returns Policy outlines the terms under which refunds may be provided and how returns of services or products are handled.
                        </p>
                    </div>

                    {/* Section 1: General Policy */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            1. General Policy
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Due to the nature of our services—primarily digital and custom work—refunds and returns are handled on a case-by-case basis. Our goal is to ensure client satisfaction, and we encourage you to contact us if you are not completely satisfied with the services provided.
                        </p>
                    </div>

                    {/* Section 2: Eligibility for Refunds */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            2. Eligibility for Refunds
                        </h2>
                        <p className="text-sm text-slate-600">Refunds may be granted under the following circumstances:</p>
                        <div className="space-y-3">
                            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-[#111111] text-sm mb-1">Project Cancellation</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    If a project is canceled by the client before any work has commenced, a full refund may be issued, minus any applicable transaction fees.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-[#111111] text-sm mb-1">Unsatisfactory Work</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    If the delivered work does not meet the agreed-upon specifications or standards, we will first attempt to make the necessary revisions. If the issue remains unresolved, a partial or full refund may be considered.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-[#111111] text-sm mb-1">Non-Delivery</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    If the agreed-upon work is not delivered within the specified timeline, and no prior arrangements for extensions were made, a full refund may be issued.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Non-Refundable Situations */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            3. Non-Refundable Situations
                        </h2>
                        <p className="text-sm text-slate-600">Refunds will not be provided under the following conditions:</p>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                            <li className="flex items-start gap-2.5">
                                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <span><strong>Completed Projects:</strong> Once a project has been completed and approved by the client, it is non-refundable.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <span><strong>Change of Mind:</strong> Refunds will not be issued if the client changes their mind after work has commenced or after the delivery of the services.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <span><strong>Minor Revisions:</strong> Minor revisions or tweaks are part of our service and are not grounds for a refund.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <span><strong>Delayed Responses:</strong> If delays in the project timeline are caused by the client’s lack of communication or response, refunds will not be issued.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 4: Requesting a Refund */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            4. Requesting a Refund
                        </h2>
                        <p className="text-sm text-slate-600">To request a refund, please follow these steps:</p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                                <strong className="text-[#111111] block text-sm">1. Contact Us</strong>
                                <p>Email us at <a href="mailto:info@phoenixcreativehub.com" className="text-[#FF6B00] hover:underline font-semibold">info@phoenixcreativehub.com</a> with your order details and reason.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                                <strong className="text-[#111111] block text-sm">2. Assessment</strong>
                                <p>Our team will review your request and communicate the outcome within 7-10 business days.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                                <strong className="text-[#111111] block text-sm">3. Resolution</strong>
                                <p>Approved refunds are processed within 10-15 business days using the original payment method.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Revisions and Amendments */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            5. Revisions and Amendments
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We aim to provide services that meet or exceed your expectations. Therefore, we offer reasonable revisions on all work delivered. Revisions must be requested within 5 days of receiving the final deliverable. Requests made after this period may be subject to additional charges.
                        </p>
                    </div>

                    {/* Section 6 & 7: Third-Party & Custom Services */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            6. Third-Party Services &amp; 7. Custom Services
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Our refund policy does not cover third-party services such as hosting, domain registration, stock images, or software licenses. Refunds for these services are subject to the terms and conditions of the respective third-party providers.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            For custom services and packages, specific terms regarding refunds and cancellations will be outlined in the individual contract or agreement. Please refer to your contract for detailed information.
                        </p>
                    </div>

                    {/* Section 8 & 9: Policy Changes & Contact */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] pb-2 border-b border-slate-200">
                            8. Changes to This Policy &amp; 9. Contact Information
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            <strong>Phoenix Creative Hub</strong> reserves the right to update or change this Refund and Returns Policy at any time. Any changes will be posted on our website with the updated date.
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
