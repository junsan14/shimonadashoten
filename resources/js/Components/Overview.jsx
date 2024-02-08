import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { usePage } from '@inertiajs/react';
import {ShowModal} from '@/script';

import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import overview01 from '../../images/overview/overview01.webp';
import overview02 from '../../images/overview/overview02.webp';
import overview03 from '../../images/overview/overview03.webp';
import overview04 from '../../images/overview/overview04.webp';

import overview2nd01 from '../../images/overview/overview2nd01.webp';
import overview2nd02 from '../../images/overview/overview2nd02.webp';




import { Pagination,EffectCube,Autoplay,EffectFade,Navigation } from 'swiper/modules';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

function Overview1st(){  

    return (
        <>
           <Swiper
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay:5000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination,Autoplay]}
            >
                <SwiperSlide>
                   <img src={overview01} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                   <img src={overview02} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                   <img src={overview03} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                   <img src={overview04} alt='' />
                </SwiperSlide>

            </Swiper>
        </>
      );
    
}

function Overview2nd(){  

    return (
        <>
           <Swiper
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                clickable: true,
                }}
                loop={true}
                modules={[EffectFade, Navigation, Pagination,Autoplay]}
            >
                <SwiperSlide>
                   <img src={overview2nd01} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                   <img src={overview2nd02} alt='' />
                </SwiperSlide>
            </Swiper>
        </>
      );
    
}
   
  


 




  

export {Overview1st, Overview2nd};



