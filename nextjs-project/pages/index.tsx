import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Section from '@/components/Section';
import CasesSlider from '@/components/CasesSlider'; // Corrected import path

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Landing Page</title>
        <meta name="description" content="Landing page with multiple sections and case slider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section id="solutions" title="Our Solutions">
        <p>This is the solutions section. We offer a variety of innovative solutions tailored to meet your unique needs. Explore how we can help you achieve your goals.</p>
      </Section>

      <Section id="differentials" title="Our Differentials">
        <p>Discover what sets us apart. Our differentials lie in our commitment to quality, our experienced team, and our forward-thinking approach to every project.</p>
      </Section>

      <Section id="cases" title="Case Studies">
        <CasesSlider />
      </Section>

      <Section id="about" title="About Us">
        <p>Learn more about our company, our mission, and our values. We are passionate about what we do and dedicated to our clients' success.</p>
      </Section>

      <Section id="contact" title="Contact Us">
        <p>Get in touch with us today. We're here to answer your questions and discuss how we can work together. Reach out via email, phone, or our online form.</p>
      </Section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
