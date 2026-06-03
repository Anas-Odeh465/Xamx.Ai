import logo_black from "../assets/Logo/Xamx.Ai - Black.png";
import logo_white from "../assets/Logo/Xamx.Ai - White.png";

export function LogoBlack() {
    return(
        <a href="/" className='flex items-center select-none'>
            <img onDragStart={(e) => e.preventDefault()} src={logo_black} alt="Logo" className="h-12 w-12"/>
            <h1 className='logo-font-type text-black text-xl -ml-2'>Xamx.Ai</h1>
        </a>
    )
}

export function LogoWhite() {
    return(
        <a href="/" className='flex items-center select-none'>
            <img onDragStart={(e) => e.preventDefault()} src={logo_white} alt="Logo" className="h-12 w-12"/>
            <h1 className='logo-font-type text-white text-xl -ml-2'>Xamx.Ai</h1>
        </a>
    )
}