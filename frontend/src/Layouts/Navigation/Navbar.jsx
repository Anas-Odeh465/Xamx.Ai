import {navLinks, platformMenu, mainMenuNavLinksIcon} from '../../Data/data';
import {useState, useRef, useEffect} from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LogoBlack } from '../../UI/Logo';

export default function Navbar(){
    const [hoverPlatform, setHoverPlatform] = useState(false); 
    const [openMenu, setOpenMenu] = useState(false);
    const [menuIcon, xIcon] = mainMenuNavLinksIcon;
    
    {/* Handle hover out platform -> */}
    const platformHoverRef = useRef(null);
    const handleMouseIn = () => {clearTimeout(platformHoverRef.current); setHoverPlatform(true)}
    const handleMouseOut = () => {platformHoverRef.current = setTimeout(() => { setHoverPlatform(false) }, 100)}

    {/* Handle click out platform -> */}
    const platformRef = useRef(null);
    useEffect(() => {
        const platformClickAway = (e) => {
            if(platformRef.current && !platformRef.current.contains(e.target)){
                setHoverPlatform(false)
            }
        }
        document.addEventListener("mousedown", platformClickAway);
        return () => {document.removeEventListener("mousedown", platformClickAway)}
    }, []);

    {/* Disabling body scroll while menu opend & Resizing when menu opened */}
    useEffect(() => { openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'; return () => { document.body.style.overflow = 'auto'}}, [openMenu]);

    useEffect(() => {
        const handelResize = () => {window.innerWidth >= 640 ? setOpenMenu(false) : null}
        window.addEventListener('resize', handelResize);

        return () => {window.removeEventListener('resize', handelResize)}
    }, []);

    return(
        <nav className={`${openMenu ? 'fixed sm:sticky' : 'sticky'} top-0 left-0 right-0 w-full z-50`}>
            <div className={`flex flex-row justify-between items-center px-2 h-18 ${openMenu ? 'bg-white sm:bg-white/10 sm:backdrop-blur-sm' : 'bg-white/60 backdrop-blur-sm'} border-b border-gray-600/10 z-50`}>
                {/* Logo section */}
                <LogoBlack />
                {/* Wide Screens - Navigation links */}
                <div className='hidden sm:flex justify-center items-center gap-6 text-[12px] text-black nav-link-font-type pr-5'>
                    {navLinks?.map((nav, index) => (
                        (nav?.name === "PLATFORM" ? (
                            <div key={index} className='relative group' onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                                <button onClick={() => setHoverPlatform(false)} className={`${nav.style} group-hover:text-gray-600 transition-colors duration-300 ease-out`}>{nav.name} <span className={`transition-all duration-300 ease-out ${hoverPlatform ? 'rotate-180' : 'rotate-0'}`}>{nav.icon}</span></button>
                                <div ref={platformRef} className={`absolute top-7 left-1/2 transform -translate-x-1/2 shadow-xl transition-all duration-300 ease-out ${hoverPlatform ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className='relative grid grid-cols-2 p-2 gap-2 w-100 bg-white shadow-lg border border-gray-200'>
                                        <div className="absolute top-0 bottom-0 right-1/2  w-px bg-gray-200"></div>
                                        {platformMenu?.map((link, index) => (
                                            <div key={index} className='flex flex-row group/item justify-start items-start gap-2 p-2 hover:bg-gray-100 max-w-45 cursor-pointer ml-1'>
                                                <span className='transition-transform duration-200 group-hover/item:translate-x-0.5'>{link.icon}</span>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='text-[11px] platform-link-font-type-name'>{link.name}</p>
                                                    <p className='text-[10px] platform-link-font-desc'>{link.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <a href={nav.href} className={nav.style} key={index}>{nav.name} </a>
                        ))
                    ))}
                </div>
                {/* Small Screens - (Menu Button) */}
                <span onClick={() => setOpenMenu(!openMenu)} data-testid="menu-btn" className='cursor-pointer flex sm:hidden pr-5'>{openMenu ? (xIcon) : (menuIcon)}</span>
            </div>
            {/* Small Screens - Navigation links (Menu) */}
            <div className='sm:hidden'>
                <div className={`fixed top-18 bottom-0 left-0 w-full overflow-y-auto transition-all duration-300 ease-out  bg-white transform ${openMenu ? 'translate-y-0' : 'opacity-0 pointer-events-none  translate-y-10'}`}>
                    <div data-testid="mobile-menu" className='flex flex-col mx-6'>
                        {navLinks?.map((link, index) => (
                            <div key={index} className='p-1 w-full h-full'>
                                {['LOGIN', 'ACCESS NOW'].includes(link.name) ? (
                                    <div className="flex justify-center items-center gap-2 w-full">
                                        <a href={link.href} className={`${link.style} flex items-center justify-center w-full`} >{link.name}</a>
                                    </div>
                                ) : (
                                    (link.name === 'PLATFORM' ? (
                                        <div ref={platformRef} className="flex flex-col items-start border-b border-gray-100 w-full z-15 my-1 py-2">
                                            <button onClick={() => setHoverPlatform(!hoverPlatform)} className={`${link.style} group-hover:text-gray-600 z-10  transition-colors duration-300 ease-out`}>{link.name} <span className={`transition-all duration-300 ease-out ${hoverPlatform ? 'rotate-180' : 'rotate-0'}`}>{link.icon}</span></button>
                                            <div className={`grid grid-cols-2 justify-start w-full  transition-all duration-300 ease-in-out transform ${hoverPlatform ? 'mt-2 opacity-100 translate-y-0 max-h-50 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                                {platformMenu.map((link, index) => (
                                                    <div key={index} className='flex flex-row group/item justify-start items-start gap-2 p-2 hover:bg-gray-100 max-w-45 cursor-pointer ml-1'>
                                                        <span className='transition-transform duration-200 group-hover/item:translate-x-0.5'>{link.icon}</span>
                                                        <div className='flex flex-col gap-2'>
                                                            <p className='text-[11px] platform-link-font-type-name'>{link.name}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex border-b border-gray-100 my-1 py-2 bg-white">
                                            <a href={link.href} className='flex items-baseline gap-2 w-full'>{link.name}</a>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                        <div className="flex justify-center lg:space-y-2 space-y-0 items-center my-10 mx-1 backdrop-blur-xs border border-gray-200 md:p-4 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ">
                            <a href="#" className="group flex items-center gap-2 sm:text-xl text-lg md:py-1.5 py-1 md:px-3 px-1 transition-all duration-300 nav-link-font-type tracking-wider hover:bg-gray-100">
                                Quick start 
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><ArrowUpRight /></span>
                            </a>
                        </div>
                        <div className='relative w-full py-2 text-xs text-gray-400 whitespace-nowrap'>
                            <span className='absolute bottom-0 flex left-1/2 -translate-x-1/2 '>© 2026 Xamx.Ai Company All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}