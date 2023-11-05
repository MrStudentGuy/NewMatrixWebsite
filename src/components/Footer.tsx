import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Instagram, Youtube} from "iconoir-react";

const Footer = () => {
    return (
        // <footer className="bg-[#2c2c2c] pb-4 mt-8 border-t-8 border-matrixPurple">
        //     <div className="container mx-auto flex justify-between items-center">
        //         <div className={"flex flex-col items-start"}>
        //             <Image className={"hover:scale-125 hover:rotate-3 transition delay-0"} src={"/LogoNew_TransparentBG_White.png"} alt={"Matrix Logo"} height={128} width={128}/>
        //
        //             <p className="text-gray-300">
        //                 &copy; {new Date().getFullYear()} FTC Team Matrix. All rights reserved. FIRST Logos, Centerstage Logos and FIRST Tech Challenge Logo are property of FIRST.
        //             </p>
        //         </div>
        //
        //         <div className="space-x-6">
        //             <code className={"font-black text-5xl text-white"}>#20870</code>
        //         </div>
        //     </div>
        // </footer>
        
        <footer className="bg-[#2c2c2c] pb-4 mt-8 border-t-8 border-matrixPurple">
            <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-center lg:items-start">
                    <div className={"flex flex-row items-center space-x-2"}>
                        <Image
                            className="hover:scale-125 hover:rotate-3 transition delay-0"
                            src="/LogoNew_TransparentBG_White.png"
                            alt="Matrix Logo"
                            height={128}
                            width={128}
                        />
                        
                        <Image
                            className="hover:scale-125 hover:rotate-3 transition delay-0 object-contain"
                            src="/FIRSTTech_iconHorz_RGB.png"
                            alt="FIRST Logo"
                            height={32}
                            width={128}
                        />
                    </div>
                    
                    <div className={"flex flex-row space-x-4 mb-2"}>
                        <Link href={"https://instagram.com/ftcmatrix"} target={"_blank"}>
                            <Instagram className={"text-gray-300 w-8 h-8 hover:scale-125 hover:rotate-3 transition delay-0"} />
                        </Link>
                        
                        <Link href={"https://youtube.com/@ftcteammatrix"} target={"_blank"}>
                            <Youtube className={"text-gray-300 w-8 h-8 hover:scale-125 hover:rotate-3 transition delay-0"} />
                        </Link>
                    </div>
                    
                    <p className="text-gray-300 text-center p-1 lg:text-left">
                        &copy; {new Date().getFullYear()} FTC Team Matrix. All rights reserved. FIRST Logos, Centerstage Logos, and FIRST Tech Challenge Logo are the property of FIRST.
                    </p>
                </div>
                
                <div className="space-x-6 md:m-0 mt-10">
                    <code className="font-black text-2xl md:text-5xl text-white">#20870</code>
                </div>
            </div>
        </footer>
    );
};

export default Footer;