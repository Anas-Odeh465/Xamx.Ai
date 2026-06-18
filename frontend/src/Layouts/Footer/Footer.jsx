import { FooterContent, socialMediaLinks } from "../../Data/data"
import { ArrowUpRight, LanguagesIcon } from "lucide-react"
import { LogoWhite } from "../../UI/Logo"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="w-full h-full bg-black flex flex-col justify-center items-center gap-4 lg:px-10 px-5 py-10 mt-10">
            {/* Footer Top Content */}
            <div className="w-full flex lg:flex-row flex-col justify-between items-start">
                <div className="flex flex-col w-60 z-30 -mt-4">
                    <LogoWhite />
                </div>
                <div className="flex flex-wrap sm:justify-end justify-start lg:gap-16 gap-10 lg:px-0 px-6 mt-5 sm:mt-0">
                    {FooterContent.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3 lg:w-35 w-33 max-w-50">
                            <p className="text-sm text-white placeHolder-font-type">{item.Heading}</p>
                            <div className="flex flex-col gap-4 text-xs">
                                {item.Links.map((link, linkIndex) => (
                                    <Link to="#" key={linkIndex} className="group placeHolder-font-type text-[13px] text-[#afa9a4] hover:text-white transition-colors duration-300">
                                        {link}
                                        <ArrowUpRight className="hidden group-hover:inline-block ml-1 group-hover:text-white" size={12} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Separator Line */}
            <div className="border-b border-white/10 w-full my-10"></div>
            {/* Footer End Content */}
            <div className="relative w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:gap-0 gap-4">
                {/* Social Media Links & icons */}
                <div className="flex flex-wrap gap-4">
                    {socialMediaLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#afa9a4] transition-colors duration-300">
                            {link.icon}
                        </a>
                    ))}
                </div>
                {/* copy right */}
                <p className="text-sm text-white placeHolder-font-type">
                    &copy; 2026 - {new Date().getFullYear()} Xamx AI. All rights reserved.
                </p>
                {/* Language Selector */}
                <div className="flex items-center cursor-pointer py-2 px-4 bg-white/5 hover:bg-white/10 gap-2">
                    <LanguagesIcon className="text-white" size={16} />
                    <span className="text-sm text-white placeHolder-font-type">English</span>
                    <p className="text-xs text-[#afa9a4]">United States</p>
                </div>
            </div>
        </div>
    )
}

// last task - Add language selector with globe icon and country name in the footer.

