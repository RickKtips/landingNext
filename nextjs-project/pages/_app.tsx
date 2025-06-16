import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '@/styles/globals.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100, // values from 0 to 300, with step 10px
      duration: 400, // values from 0 to 3000, with step 50ms
      once: true, 
      mirror:true,    // whether animation should happen only once - while scrolling down
      easing: 'ease-out-cubic', // example easing
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
