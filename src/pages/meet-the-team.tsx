import PersonCard from "@/components/PersonCard";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Meet the Team - FTC Team Matrix</title>
                <meta name="title" content="Meet the Team - FTC Team Matrix" />
                <meta name="theme" content="#7143E5" />
                <meta name="description" content="Get to know the members of FTC Team Matrix, a dynamic FTC Robotics team based in Mumbai, India. Learn about the talented group of young engineers and innovators who are the driving force behind our success." />
                <meta property="og:image" content="https://www.ftcmatrix.com/LogoNew_BlackBG.png" />
                <meta property="og:url" content="https://www.ftcmatrix.com/meet-the-team" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meet the Team - FTC Team Matrix" />
                <meta name="twitter:description" content="Get to know the members of FTC Team Matrix, a dynamic FTC Robotics team based in Mumbai, India. Learn about the talented group of young engineers and innovators who are the driving force behind our success." />
                <meta name="twitter:image" content="https://www.ftcmatrix.com/TeamPhoto.jpg" />
            </Head>
            
            <div className={"flex flex-col justify-center items-center space-y-10 mt-10"}>
                <h1 className={"text-4xl md:text-6xl font-extrabold"}>Meet the Matrix</h1>
                <div className={"grid grid-cols-1 md:grid-cols-5 gap-5"}>
                    <PersonCard name={"Atharv Agarwal"} image={"/atharvagarwal.png"} subteam={"Programming"}/>
                    <PersonCard name={"Aryan Pai"} image={"/AryanPaiApoc.jpg"} subteam={"Programming"}/>
                    <PersonCard name={"Kaavya Majumder"} image={"/kaavya_majumdar.png"} subteam={"Programming"}/>
                    <PersonCard name={"Neil Agrawal"} image={"/neil_agrawal.png"} subteam={"Programming"}/>
                    <PersonCard name={"Aarav Gupta"} image={"/aarav_gupta.png"} subteam={"Programming"}/>
                    <PersonCard name={"Sivah Navle"} image={"/sivah_navle.png"} subteam={"Outreach"}/>
                    <PersonCard name={"Yuvansh Shah"} image={"/yuvansh.png"} subteam={"CAD"}/>
                </div>
            </div>
        </>
    )
}
