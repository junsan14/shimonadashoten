import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { usePage } from '@inertiajs/react';
import {ShowModal} from '@/Script';

import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import beni from '../../images/goods/drink_madonna.webp';
import iyokan from '../../images/goods/drink_iyokan.webp';
import kanpei from '../../images/goods/drink_kanpei.webp';
import kuripai from '../../images/goods/okashi_kuripai.webp';



import totobag from '../../images/goods/totobag.webp';
import plate from '../../images/goods/plate.webp';
import clearfile from '../../images/goods/clearfile.webp';
import maskingtape from '../../images/goods/maskingatape.webp';
import passcase from '../../images/goods/passcase.webp';
import maskcase from '../../images/goods/maskcase.webp';
import keychain from '../../images/goods/keychain.webp';
import figures01 from '../../images/goods/figures01.webp';
import figures02 from '../../images/goods/figures02.webp';
import fan from '../../images/goods/fan.webp';
import towel from '../../images/goods/towel.webp';
import towel02 from '../../images/goods/towel02.webp';
import blanket from '../../images/goods/blanket.webp';
import sticker from '../../images/goods/sticker.webp';



import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

function GoodsDrink(){  

    return (
        <>
            <ShowModal props='goods'/>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
            >
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-drink' key='0' data-index='0'>
                        <img src={iyokan} alt="" className='js-modal-img js-modal-goods-drink-img' data-index='0' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_1_1')}
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-drink' key='1' data-index='1'>
                        <img src={beni} alt="" className='js-modal-img js-modal-goods-drink-img' data-index='1' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_1_2')}
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-drink' key='2' data-index='2'>
                        <img src={kanpei} alt="" className='js-modal-img js-modal-goods-drink-img' data-index='2' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_1_3')}
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-drink' key='3' data-index='3'>
                        <img src={kuripai} alt="" className='js-modal-img js-modal-goods-drink-img' data-index='3' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_1_4')}
                    </figcaption>  
                </SwiperSlide>
            </Swiper>
        </>
      );
    
}

function GoodsShimonadaJR(){  

    return (
        <>
            <ShowModal props='goods'/>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
            >
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shimondajr' key='0' data-index='0'>
                        <img src={totobag} alt="" className='js-modal-img js-modal-goods-shimonadajr-img' data-index='0' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_2_1')}
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shimondajr' key='1' data-index='1'>
                        <img src={plate} alt="" className='js-modal-img js-modal-goods-shimonadajr-img' data-index='1' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_2_2')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shimondajr' key='2' data-index='2'>
                        <img src={clearfile} alt="" className='js-modal-img js-modal-goods-shimonadajr-img' data-index='2' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_2_3')} 
                     </figcaption>  
                </SwiperSlide>
            </Swiper>
        </>
      );
    
}
function GoodsShikokuJR(){  

    return (
        <>
            <ShowModal props='goods'/>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
            >
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='0' data-index='0'>
                        <img src={keychain} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='0' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_3_1')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='1' data-index='1'>
                        <img src={maskingtape} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='1' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_3_2')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='2' data-index='2'>
                        <img src={passcase} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='2' />
                    </div>
                    <figcaption className="post_desc_caption" >　
                        {__(':goods_3_3')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='3' data-index='3'>
                        <img src={maskcase} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='3' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_3_4')}  
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='4' data-index='4'>
                        <img src={figures01} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='4' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_3_5')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='5' data-index='5'>
                        <img src={figures02} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='5' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_3_6')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='6' data-index='6'>
                        <img src={towel02} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='6' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_3_7')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujr' key='7' data-index='7'>
                        <img src={blanket} alt="" className='js-modal-img js-modal-goods-shikokujr-img' data-index='7' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_3_8')} 
                    </figcaption>  
                </SwiperSlide>
            </Swiper>
        </>
      );
    
}
function GoodsShikokuJRCampaign(){  

    return (
        <>
            <ShowModal props='goods'/>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
            >
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujrcampaign' key='0' data-index='0'>
                        <img src={fan} alt="" className='js-modal-img js-modal-goods-shikokujrcampaign-img' data-index='0' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_4_1')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujrcampaign' key='1' data-index='1'>
                        <img src={towel} alt="" className='js-modal-img js-modal-goods-shikokujrcampaign-img' data-index='1' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_4_2')} 
                    </figcaption>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section_content_swiper_item js-show-modal js-modal-goods-shikokujrcampaign' key='2' data-index='2'>
                        <img src={sticker} alt="" className='js-modal-img js-modal-goods-shikokujrcampaign-img' data-index='2' />
                    </div>
                    <figcaption className="post_desc_caption" >
                        {__(':goods_4_3')} 
                    </figcaption>  
                </SwiperSlide>
            </Swiper>
        </>
      );
    
}
    

export {GoodsDrink, GoodsShikokuJR, GoodsShimonadaJR, GoodsShikokuJRCampaign};



