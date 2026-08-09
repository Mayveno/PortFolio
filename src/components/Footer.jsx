import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
    return (
        <footer className="relative w-full min-h-screen overflow-hidden text-white">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
                style={{ backgroundImage: `url(${footerBg})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-[1]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen justify-between px-6 md:px-16 py-10">

                {/* ================= TOP SECTION ================= */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">

                    {/* Left */}
                    <div className="flex flex-col gap-6 w-full md:w-auto">

                        <div>
                            <p className="text-gray-400 text-sm mb-2">
                                Connect with me
                            </p>

                            <a
                                href="mailto:mayveno.dev@gmail.com"
                                className="text-xl md:text-5xl font-medium hover:text-gray-300 transition-colors break-words"
                            >
                                mayveno.dev@gmail.com
                            </a>
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">
                            <a
                                href="#home"
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                className="hover:text-white transition-colors"
                            >
                                About
                            </a>

                            <a
                                href="#services"
                                className="hover:text-white transition-colors"
                            >
                                Services
                            </a>

                            <a
                                href="#project"
                                className="hover:text-white transition-colors"
                            >
                                Projects
                            </a>

                            <a
                                href="#contact"
                                className="hover:text-white transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">

                        <h3 className="text-lg md:text-2xl font-medium mb-2">
                            Let's build something
                        </h3>

                        <p className="text-gray-400 text-sm mb-6 max-w-xs">
                            Open for software development opportunities,
                            freelance projects, and collaborations.
                        </p>

                        <a
                            href="#contact"
                            className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>


                {/* ================= SOCIALS ================= */}
                <div className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-sm md:text-lg font-medium gap-5">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mayank-jha-5232bb27a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                    >
                        LinkedIn
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Mayveno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                    >
                        GitHub
                    </a>

                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/u/MayankDev21/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                    >
                        LeetCode
                    </a>

                    {/* X */}
                    <a
                        href="https://x.com/MayankJ80497200"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                    >
                        X
                    </a>
                </div>


                {/* ================= HUGE BRAND TEXT ================= */}
                <div className="w-full text-center flex-1 flex items-center justify-center min-h-0">

                    <h1
                        className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold leading-none tracking-tighter"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        MAYVENO
                    </h1>

                </div>


                {/* ================= BOTTOM SECTION ================= */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6 border-t border-white/10">

                    <p>
                        © {new Date().getFullYear()} Mayveno. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">

                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms & Conditions
                        </a>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;