import React, {useState} from 'react';
import Link from "next/link";
import { stack as Menu } from 'react-burger-menu';

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '12px',
        top: '15px'
    },
    bmBurgerBars: {
        background: '#ffffff'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        top: '0',
        height: '110%'
    },
    bmMenu: {
        borderRadius: '0 0 0 1.5em',
        background: '#1c1c1c',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};


const Header = () => {
    const [open, setOpen] = useState<boolean>(false)
    
    return (
        <header className="bg-matrixPurple py-4 px-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="text-xl md:text-2xl space-x-2 font-bold text-white hover:scale-110 transition duration-150 delay-0">
                    <span className="text-white">FTC Team Matrix</span>
                    <span className="text-white bg-black p-1 rounded-xl">#20870</span>
                </Link>
                <div className="lg:hidden">
                    <Menu isOpen={open} onOpen={() => {
                        setOpen(true)
                    }} onClose={() => {
                        setOpen(false)
                    }} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right styles={styles}
                          className={"flex flex-col space-y-2"}>
                        <Link href={"/"} onClick={() => {
                            setOpen(false)
                        }} className={"text-white text-4xl font-bold"}>Team Matrix</Link>
                        <br/>
                        <br/>
                        <br/>
                        
                        <div onClick={() => {
                            setOpen(false)
                        }}>
                            <Link href="/meet-the-team" className="text-white text-3xl">
                                Meet The Team
                            </Link>
                        </div>
                        <br/>
                        <br/>
                        <div onClick={() => {
                            setOpen(false)
                        }}>
                            <Link href="/about" className="text-white text-3xl">
                                About
                            </Link>
                        </div>
                        <br/>
                        <br/>
                        <div onClick={() => {
                            setOpen(false)
                        }}>
                            <Link href="/gallery" className="text-white text-3xl">
                                Gallery
                            </Link>
                        </div>
                        <br/>
                        <br/>
                        <div onClick={() => {
                            setOpen(false)
                        }}>
                            <Link href="/outreach" className="text-white text-3xl">
                                Outreach
                            </Link>
                        </div>
                        <br/>
                        <br/>
                        <div onClick={() => {
                            setOpen(false)
                        }}>
                            <Link href="/contact" className="text-white text-3xl">
                                Contact Us
                            </Link>
                        </div>
                    </Menu>
                </div>
                <nav className={`space-x-6 hidden lg:flex`}>
                    <Link href="/meet-the-team" className="text-white hover:scale-110 transition duration-150 delay-0">
                        Meet The Team
                    </Link>
                    <Link href="/gallery" className="text-white hover:scale-110 transition duration-150 delay-0">
                        Gallery
                    </Link>
                    <Link href="/about" className="text-white hover:scale-110 transition duration-150 delay-0">
                        About
                    </Link>
                    <Link href="/outreach" className="text-white hover:scale-110 transition duration-150 delay-0">
                        Outreach
                    </Link>
                    <Link href="/contact" className="text-white hover:scale-110 transition duration-150 delay-0">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;