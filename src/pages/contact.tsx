import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <script async src="https://analytics.eu.umami.is/script.js" data-website-id="094464ac-a9dc-42b6-b10b-97463324f939"></script>
                <title>Let&apos;s Talk - FTC Team Matrix</title>
                <meta name="title" content="Let&apos;s Talk - FTC Team Matrix" />
                <meta name="theme-color" content="#7143E5" />
                <meta name="description" content="Contact FTC Team Matrix for inquiries, collaboration opportunities, or any questions you may have. We're here to assist you with any information or assistance you need." />
                <meta property="og:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
                <meta property="og:title" content="Let&apos;s Talk - FTC Team Matrix" />
                <meta property="og:url" content="https://www.ftcmatrix.com/contact-us" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Let&apos;s Talk - FTC Team Matrix" />
                <meta name="twitter:description" content="Contact FTC Team Matrix for inquiries, collaboration opportunities, or any questions you may have. We're here to assist you with any information or assistance you need." />
            </Head>
            
            <div className={"flex flex-col justify-center items-center space-y-10 md:mb-72 mb-40 mt-10"}>
                <h1 className={"text-4xl md:text-6xl font-extrabold"}>Let&apos;s Talk</h1>
                
                <div className={"flex flex-col justify-center items-start space-y-10"}>
                    <div className={"flex flex-row items-center w-72 h-20 md:w-96 justify-center space-x-2 bg-matrixPurple rounded-xl p-2 hover:scale-110 transition duration-150 delay-0"}>
                        <a className={"text-white text-xl md:text-2xl font-medium"} href={"mailto:ftcmmatrix2021@gmail.com"} target={"_blank"}>ftcmatrix2021@gmail.com</a>
                    </div>
                    
                    <div className={"flex flex-row text-2xl w-72 h-20 md:w-96 justify-center items-center space-x-2 bg-matrixPurple rounded-xl p-2 hover:scale-110 transition duration-150 delay-0"}>
                        <a className={"text-white text-xl md:text-2xl font-medium"} href={"https://www.instagram.com/ftcmatrix/"} target={"_blank"}>Instagram</a>
                    </div>
                </div>
                
                <p className={"text-lg"}>We follow Indian Standard Time (GMT +5:30), expect replies accordingly.</p>
            </div>
        </>
    );
}

export default Contact;