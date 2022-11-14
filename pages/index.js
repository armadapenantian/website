import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Destinations from "../components/Destinations";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Armada Penantian</title>
        <meta name="description" content="Armada penantian" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <Navbar />
        <Hero />
        <Explore />
        <Destinations />
        <WhyUs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
