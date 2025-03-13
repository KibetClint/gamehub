import 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import the fade effect CSS
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Slider = () => {
  const slides = [
    {
      image: '/src/assets/images/P1.jpeg',
      title: 'Chess Championship',
      description: 'Join our biggest chess tournament yet!',
    },
    {
      image: '/src/assets/images/P1.webp',
      title: 'Pool Masters',
      description: 'Pool competition is on the rise, sign up now!',
    },
    {
      image: '/src/assets/images/P2.jpeg',
      title: 'Grand Finale',
      description: 'Exciting prizes await the winners!',
    },
    {
      image: '/src/assets/images/P3.jpeg',
      title: 'Grand Finale',
      description: 'Exciting prizes await the winners!',
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={2000} // 2-second fade transition
      className="w-full h-full rounded-lg"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          {/* Full-Cover Image */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Black Overlay & Text */}
          <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center px-4">
            <h2 className="text-3xl font-bold mb-2 text-white drop-shadow">
              {slide.title}
            </h2>
            <p className="max-w-md text-center text-white drop-shadow">
              {slide.description}
            </p>
            {/* Optional: A button or link can go here */}
            {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </button> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
