import React from 'react';
import Slider from 'react-slick';
import TextSlide from './TextSlide';
import TextSlide2 from './TextSlide2';
import ImageAlbumSlide from './ImageAlbumSlide';
import styles from '@/styles/CasesSlider.module.scss';

// Custom Arrow components
function NextArrow(props) {
  const { className, style, onClick } = props; // className from slick contains "slick-arrow slick-next"
  return (
    <div
      className={`${className} ${styles.customArrow} ${styles.customNextArrow}`} // Add custom classes
      style={{ ...style }} // Keep Slick's inline styles for positioning if needed, or override
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props; // className from slick contains "slick-arrow slick-prev"
  return (
    <div
      className={`${className} ${styles.customArrow} ${styles.customPrevArrow}`} // Add custom classes
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const CasesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: `slick-dots ${styles.customDotsContainer}`, // Add custom class to dots container
    customPaging: i => (
      <button type="button" className={styles.customDot}> {/* Use button for accessibility */}
        {i + 1}
      </button>
    ),
    responsive: [
      {
        breakpoint: 768, // Tablet and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // You could adjust dots or arrows here if needed for tablets specifically
        }
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,    // Ensure dots are visible
          arrows: false  // Hide arrows on mobile
        }
      }
    ]
  };

  // Placeholder data for slides
  const slidesData = [
    {
      type: 'text',
      title: 'SKOL<span> Umbrellas</span>',
      text: '2020 SUMMER UMBRELLAS',
    },
    {
      type: 'imageAlbum',
      title: 'Process',
      images: [
        { src: './image84.png', alt: 'SKOL 2020 Summer Umbrellas' },
        { src: './image79.png', alt: 'SKOL 2020 Summer Umbrellas' },
        { src: './image76.png', alt: 'SKOL 2020 Summer Umbrellas' },
        { src: './image72.png', alt: 'SKOL 2020 Summer Umbrellas' },
        { src: './image77.png', alt: 'SKOL 2020 Summer Umbrellas' },
        { src: './image78.png', alt: 'SKOL 2020 Summer Umbrellas' },        
      ],
    },
    {
      type: 'text2',
      title: 'Skol Challenge',
      text: 'To setup a local operation to make feasible a big summer campaign for Skol in brazil. The key challenge was to produce 20+ units of a promotional branded umbrella, without depending on a specific local supplier that dominated the market. And should do that reducing costs without reducing quality.',
    },
  ];

  return (
    <div className={styles.casesSliderContainer}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          if (slide.type === 'text') {
            return <TextSlide key={index} title={slide.title} text={slide.text} />;
          } else if (slide.type === 'imageAlbum') {
            return <ImageAlbumSlide key={index} title={slide.title} images={slide.images} />;
          }else if (slide.type === 'text2') {
            return <TextSlide2 key={index} title={slide.title} text={slide.text}  />;
          }
          return null;
        })}
      </Slider>
    </div>
  );
};

export default CasesSlider;
