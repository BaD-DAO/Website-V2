'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import Image from 'next/image';

const speakers = [
  {
    name: "Dr. Rebecca Lin",
    description: "A globally recognized leader in artificial intelligence, Dr. Roberts has spent over 20 years pushing the boundaries of innovation. She will share her vision of how AI will shape the future of business, creativity, and human connection.",
    image: "/speaker.png",
    slug: "dr-rebecca-lin"
  },
  {
    name: "Alex Carter",
    description: "A globally recognized leader in artificial intelligence, Alex Carter has spent over 20 years pushing the boundaries of innovation. She will share her vision of how AI will shape the future of business, creativity, and human connection.",
    image: "/speaker-1.png",
    slug: "alex-carter"
  },
  {
    name: "Jamie Rivera",
    description: "A globally recognized leader in artificial intelligence, Jamie Rivera has spent over 20 years pushing the boundaries of innovation. She will share her vision of how AI will shape the future of business, creativity, and human connection.",
    image: "/speaker-2.png",
    slug: "jamie-rivera"
  },
  {
    name: "Nina Patel",
    description: "A globally recognized leader in artificial intelligence, Dr. Nina Patel Cole has spent over 20 years pushing the boundaries of innovation. She will share her vision of how AI will shape the future of business, creativity, and human connection.",
    image: "/speaker-3.png",
    slug: "nina-patel"
  },
  {
    name: "Dr. Marcus Cole",
    description: "A globally recognized leader in artificial intelligence, Dr. Dr. Marcus Cole has spent over 20 years pushing the boundaries of innovation. She will share her vision of how AI will shape the future of business, creativity, and human connection.",
    image: "/speaker-4.png",
    slug: "dr-marcus-cole"
  },
  {
    name: "Ethan Boyd",
    description: "A globally recognized leader in artificial intelligence, Dr. Roberts has spent over 20 years pushing the boundaries of innovation. She will share her vision of how AI will shape the future of business, creativity, and human connection.",
    image: "/speaker-5.png",
    slug: "ethan-boyd"
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
            <h2 className="slide-left">Meet Our Speakers</h2>
            <div className="max-description is-40">
              <div className="text-color-secondary slide-right">
                Gain insights from world-class leaders, innovators, and experts who are shaping the future of AI. Each speaker brings unique perspectives, real-world experience, and actionable knowledge you can apply right away.
              </div>
            </div>
          </div>
          <div className="gap-section-medium"></div>
          <div className="meet_wrap slide_down">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={700}
              loop={false}
              slidesPerView={1}
              spaceBetween={16}
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
              className="swiper"
            >
              {speakers.map((speaker, index) => (
                <SwiperSlide key={index} className="meet_item swiper-slide">
                  <a href={`/speakers/${speaker.slug}`} className="meet_content w-inline-block">
                    <div className="meet_gradient">
                      <div className="gradient_black"></div>
                      <div className="gradient_blue"></div>
                    </div>
                    <div className="meet_details">
                      <div className="text-2xl">{speaker.name}</div>
                      <div className="meet_summary">
                        <div className="text-color-secondary text-style-2lines">
                          {speaker.description}
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="img-wrapper">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="img"
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="arrow_group">
              <div className="arrow slide_prev" onClick={() => swiperRef.current?.slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium">
                  <path d="M9.54801 6.57999L8.48701 5.51999L2.70801 11.297C2.61486 11.3896 2.54093 11.4996 2.49048 11.6209C2.44003 11.7421 2.41406 11.8722 2.41406 12.0035C2.41406 12.1348 2.44003 12.2648 2.49048 12.3861C2.54093 12.5073 2.61486 12.6174 2.70801 12.71L8.48701 18.49L9.54701 17.43L4.12301 12.005L9.54801 6.57999Z" fill="white"></path>
                </svg>
              </div>
              <div className="arrow slide_next" onClick={() => swiperRef.current?.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium">
                  <path d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z" fill="white"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}

