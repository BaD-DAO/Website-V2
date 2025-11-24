'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

const cards = [
  {
    title: "Education",
    description: "World-class AI and blockchain courses for all skill levels",
    image: "/speaker.png",
  },
  {
    title: "Startup Support",
    description: "Accelerating 500 innovative startups across the continent",
    image: "/speaker-1.png",
  },
  {
    title: "Talent Network",
    description: "Connecting skilled professionals with opportunities",
    image: "/speaker-2.png",
  }
];

export default function SpeakersSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section_meet">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="header">
            <h2 className="slide-left">What Is BuildaDAO?</h2>
            <div className="max-description is-40">
              <div className="text-color-secondary slide-right">
              BuildaDAO is a decentralized autonomous organization dedicated to fostering innovation, education, and entrepreneurship across Africa through blockchain technology and community collaboration.              </div>
            </div>
          </div>
          <div className="gap-section-medium"></div>
          <div className="meet_wrap slide_down">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Mousewheel, Keyboard]}
              speed={700}
              loop={false}
              slidesPerView={1}
              spaceBetween={16}
              mousewheel={{ forceToAxis: true }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="swiper w-dyn-list"
              wrapperClass="meet_list swiper-wrapper w-dyn-items"
            >
              {cards.map((card, index) => (
                <SwiperSlide 
                  key={index} 
                  className="meet_item swiper-slide w-dyn-item"
                  data-w-id="ad3c1389-fdb5-f287-14c4-c8debac25f07"
                  role="listitem"
                >
                  <a href="#" className="meet_content w-inline-block">
                    <div className="meet_gradient">
                      <div className="gradient_black"></div>
                      <div className="gradient_blue"></div>
                    </div>
                    <div className="meet_details">
                      <div className="text-2xl speaker-name">{card.title.toUpperCase()}</div>
                      <div className="meet_summary">
                        <div className="text-color-secondary text-style-2lines">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </a>
                  <img 
                    src={card.image} 
                    loading="lazy" 
                    alt="" 
                    sizes="100vw" 
                    srcSet={
                      card.image === '/speaker-2.png' 
                        ? `${card.image.replace('.png', '-p-500.png')} 500w, ${card.image.replace('.png', '-p-800.png')} 800w, ${card.image.replace('.png', '-p-1080.png')} 1080w, ${card.image} 1296w`
                        : `${card.image.replace('.png', '-p-500.png')} 500w, ${card.image.replace('.png', '-p-800.png')} 800w, ${card.image.replace('.png', '-p-1080.png')} 1080w, ${card.image} 1296w`
                    }
                    className="img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}

