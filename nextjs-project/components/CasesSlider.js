import React from 'react';
import Slider from 'react-slick';
import TextSlide from './TextSlide';
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
      title: 'Detailed Case Analysis 1',
      text: 'This is a paragraph providing a detailed analysis of a specific case. It outlines the challenges, methodologies, and outcomes, demonstrating our expertise and problem-solving capabilities in real-world scenarios for Client Alpha.',
    },
    {
      type: 'imageAlbum',
      title: 'Visual Showcase: Project Highlights',
      images: [
        { src: '/images/cases/placeholderA.jpg', alt: 'Placeholder Image A - Abstract Design Concept' },
        { src: '/images/cases/placeholderB.jpg', alt: 'Placeholder Image B - Data Visualization Example' },
        { src: '/images/cases/placeholderC.jpg', alt: 'Placeholder Image C - User Interface Mockup' },
        { src: '/images/cases/placeholderD.jpg', alt: 'Placeholder Image D - Team Collaboration' },
      ],
    },
    {
      type: 'text',
      title: 'Detailed Case Analysis 2',
      text: 'Another example of our work, this case study focuses on Client Beta. We discuss the unique approach taken to overcome specific industry challenges, leading to significant improvements in their operational metrics.',
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
          }
          return null;
        })}
      </Slider>
    </div>
  );
};

export default CasesSlider;
