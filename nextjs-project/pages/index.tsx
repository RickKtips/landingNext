import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Section from '@/components/Section';
import CasesSlider from '@/components/CasesSlider'; // Corrected import path
import { YouTubeEmbed } from '@next/third-parties/google';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next3 - Strategic Sourcing</title>
        <meta name="description" content="Landing page with multiple sections and case slider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Section id="banner" title="Inicio">
<YouTubeEmbed videoid="ijOzxz-Qk_8" height={400} width={720} params="autoplay=1&controls=0&loop=1" />
<h2>we bring
your <strong>ideas</strong>
to <strong>life</strong>
</h2>
<h3>NEXT3 IS THE BEST PARTNER TO SUPPORT YOUR BUSINESS GROWTH THROUGH STRATEGIC SOURCING</h3>
  </Section>
      <Section id="solutions" title="Our Solutions">
        <p>This is the solutions section. We offer a variety of innovative solutions tailored to meet your unique needs. Explore how we can help you achieve your goals.</p>
      <p data-aos="fade-up">dsgfydfygdfydf uyd gfdfgfd gdfiusgdsfgiyius</p>
            <p data-aos="fade-down">dsgfydfygdfydf uyd gfdfgfd gdfiusgdsfgiyius</p>

      </Section>

      <Section id="differentials" title="Our Differentials">
        <p>Discover what sets us apart. Our differentials lie in our commitment to quality, our experienced team, and our forward-thinking approach to every project.</p>
         <p data-aos="fade-right">dsgfydfygdfydf uyd gfdfgfd gdfiusgdsfgiyius</p>

      </Section>

      <Section id="cases" title="Case Studies">
        <CasesSlider />
      </Section>

      <Section id="about" title="About Us" >
        <p data-aos="fade-up">Learn more about our company, our mission, and our values. We are passionate about what we do and dedicated to our clients' success.</p>
      </Section>

      <Section id="contact" title="Contact Us">
        <p>Get in touch with us today. We're here to answer your questions and discuss how we can work together. Reach out via email, phone, or our online form.</p>
      </Section>

      <footer className={styles.footer}>
rodapé da bagaça      </footer>
    </div>
  );
}
