import React from 'react';
import Head from "next/head";

const Outreach = () => {
    return (
        <div className={"mb-36 md:mb-96"}>
            <Head>
                <script async src="https://analytics.eu.umami.is/script.js" data-website-id="094464ac-a9dc-42b6-b10b-97463324f939"></script>
                <title>Outreach - FTC Team Matrix</title>
                <meta name="title" content="Outreach - FTC Team Matrix" />
                <meta name="theme-color" content="#7143E5" />
                <meta name="description" content="Dive in to the glamorous outreach endeavours undertaken by FTC Team Matrix." />
                <meta property="og:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
                <meta property="og:url" content="https://www.ftcmatrix.com/outreach" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Outreach - FTC Team Matrix" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Outreach - FTC Team Matrix" />
                <meta name="twitter:description" content="Dive in to the glamorous outreach endeavours undertaken by FTC Team Matrix." />
                <meta name="twitter:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
            </Head>
            
            <div className={"flex flex-col justify-center items-center space-y-10 mt-10"}>
                <h1 className={"text-4xl md:text-6xl font-extrabold"}>Outreach</h1>
                <h2 className={"text-md md:text-2xl text-center"}>Take a look at some of our outreach projects for the current season</h2>
                
                <div className={"grid grid-cols-1 md:grid-cols-5 gap-5 p-2"}>
                    <div className={"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"}>
                        <h1 className={"text-2xl font-bold"}>FTC Centerstage Scorer</h1>
                        <p className={"text-lg font-normal mb-5"}>Meet our FTC CenterStage Scorer—a user-friendly tool with a sleek design. It guarantees accurate scoring and offers a shareable link system for collaborative score tracking. Simplify your CenterStage season with this practical solution.</p>
                        <a target={"_blank"} href={"https://scorer.ftcmatrix.com/"} className={"bg-black p-1 rounded-xl"}>scorer.ftcmatrix.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outreach;