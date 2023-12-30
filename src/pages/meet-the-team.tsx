import PersonCard from "@/components/PersonCard";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <script async src="https://analytics.eu.umami.is/script.js" data-website-id="094464ac-a9dc-42b6-b10b-97463324f939"></script>
                <title>Meet the Team - FTC Team Matrix</title>
                <meta name="title" content="Meet the Team - FTC Team Matrix" />
                <meta name="theme-color" content="#7143E5" />
                <meta name="description" content="Get to know the members of FTC Team Matrix, a dynamic FTC Robotics team based in Mumbai, India. Learn about the talented group of young engineers and innovators who are the driving force behind our success." />
                <meta property="og:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
                <meta property="og:url" content="https://www.ftcmatrix.com/meet-the-team" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Meet the Team - FTC Team Matrix" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meet the Team - FTC Team Matrix" />
                <meta name="twitter:description" content="Get to know the members of FTC Team Matrix, a dynamic FTC Robotics team based in Mumbai, India. Learn about the talented group of young engineers and innovators who are the driving force behind our success." />
                <meta name="twitter:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
            </Head>
            
            <div className={"flex flex-col justify-center items-center space-y-10 mt-10"}>
                <h1 className={"text-4xl md:text-6xl font-extrabold text-white"}>Meet the Matrix</h1>
                <div className={"grid grid-cols-1 md:grid-cols-5 gap-5"}>
                    <PersonCard name={"Aryan Pai"} image={"/AryanPaiApoc.jpg"} subteam={"Team Captain"}/>
                    <PersonCard name={"Saanvie Seth"} image={"/saanvieseth.jpg"} subteam={"Team Captain"}/>
                    <PersonCard name={"Kaavya Majumder"} image={"/KaavyaMajumder.png"} subteam={"Programming"}/>
                    <PersonCard name={"Neil Agrawal"} image={"NeilAgarwal.png"} subteam={"Programming"}/>
                    <PersonCard name={"Aarav Gupta"} image={"/AaravGupta.png"} subteam={"Programming"}/>
                    <PersonCard name={"Ria Chavan"} image={"/RiaChavan.jpeg"} subteam={"CAD"}/>
                    <PersonCard name={"Atharv Agarwal"} image={"/AtharvAgarwal.png"} subteam={"CAD"}/>
                    <PersonCard name={"Yuvansh Shah"} image={"/yuvansh.png"} subteam={"CAD"}/>
                    <PersonCard name={"Ilina Awasthi"} image={"/IlinaAwasthi.png"} subteam={"CAD"}/>
                    <PersonCard name={"Sivah Navle"} image={"/SivahNavle.png"} subteam={"Outreach"}/>
                </div>
            </div>
        </>
    )
}
