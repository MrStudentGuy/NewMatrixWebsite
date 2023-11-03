import React from 'react';
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <script async src="https://analytics.eu.umami.is/script.js" data-website-id="094464ac-a9dc-42b6-b10b-97463324f939"></script>
                <title>About Us - FTC Team Matrix</title>
                <meta name="title" content="About Us - FTC Team Matrix" />
                <meta name="theme-color" content="#7143E5" />
                <meta name="description" content="Learn more about FTC Team Matrix, a dynamic FTC Robotics team based in Mumbai, India. Discover our mission, values, and the dedicated team of young engineers and innovators who drive our mission of excellence in robotics and STEM education." />
                <meta property="og:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
                <meta property="og:url" content="https://www.ftcmatrix.com/about-us" />
                <meta property="og:type" content="website" />
                <meta property={"og:title"} content={"About Us - FTC Team Matrix"} />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us - FTC Team Matrix" />
                <meta name="twitter:description" content="Learn more about FTC Team Matrix, a dynamic FTC Robotics team based in Mumbai, India. Discover our mission, values, and the dedicated team of young engineers and innovators who drive our mission of excellence in robotics and STEM education." />
                <meta name="twitter:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
            </Head>
            
            
            <div className={"p-4 mt-10 md:mb-20"}>
                <h1 className={"text-4xl font-bold text-center mb-8"}>About Us</h1>
                
                <div className={"flex flex-col space-y-6"}>
                    <div className={"mb-6"}>
                        <h2 className={"text-3xl font-bold"}>Our Roots</h2>
                        <p className={"text-lg"}>
                            Team Matrix was born with a vision to cultivate young minds and inspire a passion for robotics and innovation. Our humble beginnings in 2021 marked the start of an exciting journey filled with challenges, learning, and growth.
                        </p>
                    </div>
                    
                    <div className={"mb-6"}>
                        <h2 className={"text-3xl font-bold"}>Rising Stars</h2>
                        <p className={"text-lg"}>
                            Over the years, Team Matrix has achieved remarkable milestones in the FIRST Tech Challenge (FTC) community, consistently pushing the boundaries of innovation and teamwork. Our dedication and hard work have paid off, as we have proudly clinched multiple awards at the India Regionals every year.
                        </p>
                    </div>
                    
                    <div className={"mb-6"}>
                        <h2 className={"text-3xl font-bold"}>A Global Stage</h2>
                        <p className={"text-lg"}>
                            But our journey didn&apos;t stop there. In 2023, we reached new heights as we qualified for the Asia Pacific Open Championships held at Macquarie University in Sydney. There, we proudly stood as runner-up finalists alliance, showcasing our skills and determination on the global stage.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className={"text-3xl font-bold"}>Our Mission</h2>
                        <p className={"text-lg"}>
                            At Team Matrix, we&apos;re more than just a robotics team. We&apos;re a family of aspiring engineers, innovators, and problem-solvers, all united by our love for technology. Our mission is to continue nurturing a spirit of creativity, collaboration, and leadership within our team and the wider community.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;