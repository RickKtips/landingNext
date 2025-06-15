import Head from 'next/head';
import { useEffect, useRef } from 'react'; // Added useEffect and useRef
import styles from '@/styles/Home.module.scss';
import Section from '@/components/Section';
import CasesSlider from '@/components/CasesSlider'; // Corrected import path
import { YouTubeEmbed } from '@next/third-parties/google';
import { registerParallaxElement, unregisterParallaxElement } from '../utils'; // Imported parallax functions

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const ecoSystemRef = useRef<HTMLDivElement>(null);
  const weAreDifferentBannerRef = useRef<HTMLDivElement>(null);
  const globalMapRef = useRef<HTMLDivElement>(null);
  const aboutUsImageRef = useRef<HTMLDivElement>(null);
  const workflowImageContainerRef = useRef<HTMLDivElement>(null); // Added workflowImageContainerRef
  const sourcingUlRef = useRef<HTMLUListElement>(null); // Added sourcingUlRef

  useEffect(() => {
    if (videoRef.current) {
      registerParallaxElement(videoRef.current, 0.1); // New strengthFactor
    }
    if (textContainerRef.current) {
      registerParallaxElement(textContainerRef.current, 0.15); // New strengthFactor
    }
    if (ecoSystemRef.current) {
      registerParallaxElement(ecoSystemRef.current, 0.1); // New strengthFactor
    }
    if (weAreDifferentBannerRef.current) {
      registerParallaxElement(weAreDifferentBannerRef.current, 0.1); // New strengthFactor
    }
    if (globalMapRef.current) {
      registerParallaxElement(globalMapRef.current, 0.1); // New strengthFactor
    }
    if (aboutUsImageRef.current) {
      registerParallaxElement(aboutUsImageRef.current, 0.08); // New strengthFactor
    }
    if (workflowImageContainerRef.current) {
      registerParallaxElement(workflowImageContainerRef.current, 0.15); // New strengthFactor
    }
    if (sourcingUlRef.current) {
      registerParallaxElement(sourcingUlRef.current, 0.15); // New strengthFactor
    }

    // Cleanup function to unregister elements on component unmount
    return () => {
      if (videoRef.current) {
        unregisterParallaxElement(videoRef.current);
      }
      if (textContainerRef.current) {
        unregisterParallaxElement(textContainerRef.current);
      }
      if (ecoSystemRef.current) {
        unregisterParallaxElement(ecoSystemRef.current);
      }
      if (weAreDifferentBannerRef.current) {
        unregisterParallaxElement(weAreDifferentBannerRef.current);
      }
      if (globalMapRef.current) {
        unregisterParallaxElement(globalMapRef.current);
      }
      if (aboutUsImageRef.current) {
        unregisterParallaxElement(aboutUsImageRef.current);
      }
      if (workflowImageContainerRef.current) { // Added unregistration for workflowImageContainerRef
        unregisterParallaxElement(workflowImageContainerRef.current);
      }
      if (sourcingUlRef.current) { // Added unregistration for sourcingUlRef
        unregisterParallaxElement(sourcingUlRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <div className={styles.container}>
      <Head>
        <title>Next3 - Strategic Sourcing</title>
        <meta name="description" content="Landing page with multiple sections and case slider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Section id="banner" title="Inicio">
<div className={styles.banner}>
{/* Added ref to video element */}
<video ref={videoRef} autoPlay muted loop>
<source src="NEXT3REEL2.webm" type="video/webm" />
</video>
{/* Added ref to text container div */}
<div ref={textContainerRef}>
<h2  data-aos="fade-left">we bring<br />
your <span>ideas</span><br />
to <span>life</span><br />
</h2>
<h3  data-aos="fade-right">NEXT3 IS THE BEST PARTNER TO SUPPORT YOUR BUSINESS GROWTH THROUGH STRATEGIC SOURCING</h3>
</div>
</div>
  </Section>
      <Section id="solutions" title="">
<section className={styles.workflow}>
<h3>work<span>flow</span></h3>
<h4>Our multidisciplinary expertise ensures high performance, end-to-end execution of marketing and sourcing solutions, for both services and products.
</h4>

  <div>
    <div>
      <ul>
          <li>Calendar & brief</li>
          <li>Research & analysis</li>
          <li>ideation</li>
          <li>design</li>
      </ul>
    </div>
    <div ref={workflowImageContainerRef}> {/* Attached workflowImageContainerRef */}
      <ul>
          <li className={styles.img1}>brief</li>
          <li className={styles.img2}>quotation</li>
          <li className={styles.img3}>approval</li>
          <li className={styles.img4}>production</li>
          <li className={styles.img5}>qa</li>
          <li className={styles.img6}>delivery</li>        
      </ul>
      <span>technology supporting end to end processes</span>
    </div>
  </div>
    </section>

    <section className={styles.sourcing}>
<h3>Strategic<br /><span>Sourcing</span></h3>
<h4>
Our expertise enables full-service management of marketing, sourcing, giveaways, POSM, printing, and packaging execution.
Our technical background ensures safe, precise work with strong focus on cost-efficiency and brand integrity.

</h4>

    <div>
    
      <ul ref={sourcingUlRef}> {/* Attached sourcingUlRef */}
          <li className={styles.img1}>PREMIUM</li>
          <li className={styles.img2}>PRINTING</li>
          <li className={styles.img3}>POSM</li>
          <li className={styles.img4}>PACKAGING</li>
      </ul>
      <span>O u t s o u r c i n g</span>
  </div>
    </section>
      </Section>

      <Section id="differentials" title="Our Differentials">
        <section  className={styles.busEcoSystem}>
        <div>
        <h3 data-aos="fade-right">business<br /><span>Ecosystem</span></h3>
        <h4 data-aos="fade-left">NEXT3 is the single point of contact for streamlined and efficient management. Through a specialized ecosystem of companies, we integrate specific solutions across the entire chain. from strategy to execution, ensuring synergy, agility, and superior results at every stage.</h4>
        </div>
        <div ref={ecoSystemRef} className={styles.ecoSystem}></div> {/* Added ref to ecoSystem div */}
        </section>
    <section className={styles.suppliers}>
      <div>
      <h3>suppliers<br /><span>certifications</span></h3>
      <ul className={styles.short}>
        <li><span className={styles.img1}>Smeta</span></li>
        <li><span className={styles.img2}>Coca Cola</span></li>
        <li><span className={styles.img3}>Ecovadis</span></li>
        <li><span className={styles.img4}>Loreal</span></li>
        </ul>
        <ul>
        <li><span className={styles.img5}>FSC</span></li>
        <li><span className={styles.img6}>ISO14001</span></li>
        <li><span className={styles.img7}>OHSAS18001</span></li>
        <li><span className={styles.img8}>SA8000</span></li>
        <li><span className={styles.img9}>Walt Disney - Certificação Fama</span></li>
      </ul>
      </div>
    </section>
      <section  className={styles.weAreDifferent}>
        <div>
        <h3 data-aos="fade-right">We are <span>Different</span></h3>
        <div ref={weAreDifferentBannerRef} className={styles.banner}></div> {/* Removed data-aos attribute */}
        </div>
<ul>
<li data-aos="fade-top">
<strong className={styles.even}>Technical dna</strong>
Our creative and technical expertise in developing promotional products and point-of-sale materials allows us to deliver cost-effective, end-to-end solutions that ensure quality and align with marketing goals.
</li>
<li data-aos="fade-top">
<strong>transparency</strong>
Full project visibility ensures easy compliance with processes and steps.
With real-time progress tracking, teams and leaders can focus on priorities, spot trends, act fast, and adjust as needed, all with open communication and shared dashboards for client stakeholders.

</li>
<li data-aos="fade-top">
<strong className={styles.even}>flexibility</strong>
We adapt our business model and workflows to meet the operational and strategic needs of each client, responding to their specific challenges with flexibility and partnership.

</li>
<li data-aos="fade-top">
<strong>quality</strong>
High standards across production and strategic processes, with full monitoring of every project stage and its evolution.
We ensure 100% legal, fiscal, and quality compliance in every country we operate.
Dedicated in-house teams handle quality assurance and quality control.

</li>
<li data-aos="fade-top">
<strong className={styles.even}>Supply chain</strong>
We operate a borderless, global product development network, built to identify and deliver the best solutions in production, materials, or technology.

</li>
</ul>
      </section>


      </Section>
      <Section id="clients" title="Our clients">
    <section  className={styles.clients}>
      <div>
        <div>
      <h3 data-aos="fade-right">Our<span>clients</span></h3>
      <h5 data-aos="fade-top">These are some of the companies Score Group is proud to call clients. More than commercial relationships, we build long-term strategic partnerships with some of the world’s leading brands.</h5>
      </div><ul>
        <li><span className={styles.img1}>Sanofi</span></li>
        <li><span className={styles.img2}>shell</span></li>
        <li><span className={styles.img3}>Ype</span></li>
        <li><span className={styles.img4}>Stellantis</span></li>
        <li><span className={styles.img5}>ABInBev</span></li>
        <li><span className={styles.img6}>Cervejaria Ambev</span></li>
        <li><span className={styles.img7}>Avon</span></li>
        <li><span className={styles.img8}>Cinemark</span></li>
        <li><span className={styles.img9}>Cinépolis</span></li>
        <li><span className={styles.img10}>Diageo</span></li>
        <li><span className={styles.img11}>TIM</span></li>
        <li><span className={styles.img12}>Google</span></li>
        <li><span className={styles.img13}>Habib s</span></li>
        <li><span className={styles.img14}>Haleon</span></li>
        <li><span className={styles.img15}>JBS</span></li>
        <li><span className={styles.img16}>Johnsons</span></li>
        <li><span className={styles.img17}>Kinoplex</span></li>
        <li><span className={styles.img18}>Moura</span></li>
        <li><span className={styles.img19}>Mondelez</span></li>
        <li><span className={styles.img20}>Outback Steakhouse</span></li>
      </ul>
</div>
    </section>
          </Section>
      <Section id="cases" title="Case Studies">
        <CasesSlider />
      </Section>

      <Section id="about" title="About Us">
      <section className={styles.globalStructure}>
        <h3 data-aos="fade-right">global<br /><span>structure</span></h3>
        <h4 data-aos="fade-left">our offices:</h4>
        <div ref={globalMapRef} className={styles.globalMap}></div> {/* Added ref to globalMap div */}
      </section>

      <section className={styles.aboutUs2}>
        <ul>
<li data-aos="fade-right">
Score Group’s Project Management Consultancy (PMC) company.
Through Strategic Sourcing, we deliver cost-saving solutions anchored in our technical DNA, with transparency and agility, ensuring full compliance with quality standards and brand policies.
</li>
<li data-aos="fade-left">
The companies within Score Group are specialists in their fields, creating a unique ecosystem of bottom-funnel strategy solutions.
We are a team of over 350 professionals, focused on solving a wide range of client challenges with integration, transparency, and agility.
Score Group leads the retail pillar within the B&Partners ecosystem.
</li>
<li data-aos="fade-right">
B&Partners is a collaborative ecosystem designed to drive sustainable growth for brands, companies, investors, and professionals. By connecting expertise across multiple disciplines, it empowers strategic decision-making, innovation, and long-term value creation.
</li>
<li data-aos="fade-top">
  Learn more:<br />
  <a href="https://www.Scoregroup.com.br" target="_blank" rel="noopener noreferrer">www.Scoregroup.com.br</a>
</li>
        </ul>
<div ref={aboutUsImageRef}>&nbsp;</div> {/* Added ref to the image container div */}
      </section>
      
      </Section>


      <Section id="contact" title="Contact Us">
      
      
      <footer className={styles.footer}>
<h5>NEXT3</h5>
<div>
  <strong>São Paulo</strong><br />
Alameda Tocantins, 630 - 01<br />
Alphaville Centro Industrial e Empresarial<br />
Barueri - SP<br />
06455-020<br />
+55 11 3848.1733<br />
brasil@next3.com.br<br />

<ul>
<li>
<strong>CIDADE DO MÉXICO
</strong>
<a href="mailto:mexico@next3.com.br" target="_blank" rel="noopener noreferrer">mexico@next3.com.br
</a>
</li>
<li>
<strong>LINKEDIN</strong>
<a href="www.linkedin.com/company/scoregroupbrasil" target="_blank" rel="noopener noreferrer">www.linkedin.com/company/scoregroupbrasil
</a>
</li>
<li>
<strong>BUENOS AIRES
</strong>
<a href="mailto:argentina@next3.com.br" target="_blank" rel="noopener noreferrer">argentina@next3.com.br</a>
</li>
<li>
<strong>INSTAGRAM</strong>
<a href="https://www.instagram.com/agenciascoregroup/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/agenciascoregroup/</a>
</li>
<li>
<strong>CALI</strong>
<a href="mailto:colombia@next3.com.br" target="_blank" rel="noopener noreferrer">colombia@next3.com.br</a>
</li>
<li>
<strong>YOUTUBE</strong>
<a href="https://www.youtube.com/@scoregroup1809" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@scoregroup1809</a>
</li>
<li>
<strong>HONG KONG</strong>
<a href="mailto:china@next3.com.br" target="_blank" rel="noopener noreferrer">china@next3.com.br
</a>
</li>
<li>
<strong>WORK WITH US</strong>
<a href="mailto:rh@bpartners.ag" target="_blank" rel="noopener noreferrer">rh@bpartners.ag</a>
</li>

</ul>

</div>

</footer>      


</Section>


    </div>
  );
}
