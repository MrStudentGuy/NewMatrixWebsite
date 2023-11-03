import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <script async src="https://analytics.eu.umami.is/script.js" data-website-id="094464ac-a9dc-42b6-b10b-97463324f939"></script>
                <title>Team Matrix - #20870</title>
                <meta name="title" content="FTC Team Matrix - #20870" />
                <meta name="theme-color" content="#7143E5" />
                <meta name="description" content="Team Matrix is a dynamic FTC Robotics team based in Mumbai, India. Established in 2021, this talented group of young engineers and innovators has consistently shone as a beacon of technological excellence in India and on the global stage. Explore their remarkable journey and achievements, as they continue to push the boundaries of robotics and STEM education worldwide." />
                <meta property="og:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
                <meta property="og:title" content="FTC Team Matrix - #20870" />
                <meta property="og:url" content="https://www.ftcmatrix.com/" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FTC Team Matrix - #20870" />
                <meta name="twitter:description" content="Team Matrix is a dynamic FTC Robotics team based in Mumbai, India. Established in 2021, this talented group of young engineers and innovators has consistently shone as a beacon of technological excellence in India and on the global stage. Explore their remarkable journey and achievements, as they continue to push the boundaries of robotics and STEM education worldwide." />
                <meta name="twitter:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
            </Head>
            <div className={"overflow-x-hidden mb-2 md:mb-28"}>
                <section className="bg-matrixPurple">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We&apos;re Team Matrix</h1>
                        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Team Matrix is a FIRST FTC Robotics team from Mumbai, India</p>
                    </div>
                </section>
                
                <section className={"mt-8 mx-4 md:mx-2"}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Meet The Team</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Team Matrix attracts the most passionate members in the community. We&apos;re a family of aspiring engineers, innovators, and problem-solvers, all united by our love for technology.</p>
                            <a href="#" className="text-blue-400 hover:underline font-medium text-lg inline-flex items-center">See
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Contact Us</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Want to conduct an outreach session with us, collaborate in anyway, or just chat?</p>
                            <a href="#" className="text-blue-400 hover:underline font-medium text-lg inline-flex items-center">Get In Touch
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            
            </div>
        </>
    )
}
