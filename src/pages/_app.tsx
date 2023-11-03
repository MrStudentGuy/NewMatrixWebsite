import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Public_Sans} from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ps = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ps'
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div id={"outer-container"}>
            <main className={`${ps.variable} font-sans`} id="page-wrap">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </main>
        </div>
        
    )
}
