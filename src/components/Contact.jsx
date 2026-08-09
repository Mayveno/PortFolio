import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';

const ContactSection = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({
        text: '',
        type: '',
    });

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            setStatusMessage({
                text: 'Please fill in all required fields.',
                type: 'error',
            });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage({
            text: '',
            type: '',
        });

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatusMessage({
                    text: 'Message sent successfully!',
                    type: 'success',
                });

                formRef.current.reset();
            })
            .catch((error) => {
                console.error('EmailJS error:', error);

                setStatusMessage({
                    text: 'Failed to send message. Please try again later.',
                    type: 'error',
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div
            id="contact"
            className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)]"
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed top-0 left-0 w-full h-[100vh] object-cover z-0"
            >
                <source src={contactBgVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />

            {/* Main Content */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">

                {/* =========================
                    LEFT SIDE
                ========================== */}
                <div className="w-full lg:w-5/12 flex flex-col justify-start">

                    {/* Heading */}
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl mb-16">
                        Get in touch
                    </h2>

                    <div className="flex flex-col gap-10">

                        {/* Email */}
                        <div className="hidden md:block">
                            <p className="text-gray-400 text-sm mb-2">
                                Email:
                            </p>

                            <p className="text-xl tracking-wide">
                                mayveno.dev@gmail.com
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="hidden md:block">
                            <p className="text-gray-400 text-sm mb-2">
                                Phone:
                            </p>

                            <p className="text-xl tracking-wide">
                                {import.meta.env.VITE_PHONE_NUMBER}
                            </p>
                        </div>

                        {/* Follow Me */}
                        <div className="mt-4 flex flex-col items-center md:items-start">

                            <p className="text-gray-400 text-sm mb-4">
                                Follow Me
                            </p>

                            <div className="flex items-center gap-3">

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/mayank-jha-5232bb27a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                                >
                                    <FaLinkedinIn className="w-[17px] h-[17px] text-white group-hover:text-black transition-colors duration-300" />
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/Mayveno"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                                >
                                    <FaGithub className="w-[18px] h-[18px] text-white group-hover:text-black transition-colors duration-300" />
                                </a>

                                {/* LeetCode */}
                                <a
                                    href="https://leetcode.com/u/MayankDev21/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LeetCode"
                                    className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                                >
                                    <SiLeetcode className="w-[18px] h-[18px] text-white group-hover:text-black transition-colors duration-300" />
                                </a>

                                {/* X / Twitter */}
                                <a
                                    href="https://x.com/MayankJ80497200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X"
                                    className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                                >
                                    <FaXTwitter className="w-[17px] h-[17px] text-white group-hover:text-black transition-colors duration-300" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================
                    RIGHT SIDE - CONTACT FORM
                ========================== */}
                <div className="w-full lg:w-7/12 flex flex-col lg:pt-4">

                    <form
                        ref={formRef}
                        className="flex flex-col gap-5 w-full"
                        onSubmit={sendEmail}
                    >

                        {/* Name + Email */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">

                            {/* Name */}
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />

                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Email address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email address"
                                    required
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />

                            </div>
                        </div>

                        {/* Phone + Subject */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">

                            {/* Phone */}
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />

                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />

                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 w-full">

                            <label className="text-xs text-gray-400 font-medium">
                                Message
                            </label>

                            <textarea
                                name="message"
                                placeholder="Write something...."
                                rows="5"
                                required
                                className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent resize-none"
                            />

                        </div>

                        {/* Status Message */}
                        {statusMessage.text && (
                            <div
                                className={`text-sm px-4 py-3 rounded-lg border ${
                                    statusMessage.type === 'success'
                                        ? 'bg-green-500/10 border-green-500/50 text-green-400'
                                        : 'bg-red-500/10 border-red-500/50 text-red-400'
                                }`}
                            >
                                {statusMessage.text}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-black text-sm font-semibold rounded-lg py-3 hover:bg-gray-200 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />

                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>

                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;