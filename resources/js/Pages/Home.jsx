
import { GoodsDrink,GoodsShikokuJR,GoodsShikokuJRCampaign, GoodsShimonadaJR } from '@/Components/Goods';
import { Overview1st, Overview2nd } from '@/Components/Overview';
import {Instagram} from '@/Components/Sns';
import ContactForm from '@/Components/ContactForm';
import React, { useState, useEffect } from 'react'
import { usePage } from '@inertiajs/react';
import {FaInstagram} from 'react-icons/fa6';

import {spMenuShow,countUpNumber,onScrollOverray,ShowModal,imgClick} from '../Script';
import kv from '../../images/kv.jpg';
import kv_sp from '../../images/kv_sp.jpg';
import iyorin from '../../images/iyorin.png';
import logo from '../../images/logo.png';
import og from '../../images/og.webp';
import $ from "jquery";
import { router } from '@inertiajs/react'

export default function Home(props){
    console.log(router)
    router.on('start', (event) => {
        console.log(event)
      })
    spMenuShow();
    countUpNumber();
    onScrollOverray();
    imgClick();

    const locales = ['ja', 'en', 'zh'];
    const handleChangeLocale = locale => {
        location.href = '?locale='+ locale;
    };
    let userLocale = props.locale.currentLocale?props.locale.currentLocale:props.userLocale;
    
    //console.log(userLocale)

    

    const Load = ()=>{
        return(
            locales.map((locale,i)=>{
                let selected = locale === userLocale ? "on":"";
                let showedLocale;
                switch(locale){
                    case "ja":
                        showedLocale="JPN"
                        break;
                    case "en":
                        showedLocale="ENG"
                        break;
                    case "zh":
                        showedLocale="CHN"
                        break;
                }
                return(
                    <li onClick={e => handleChangeLocale(e.target.id)} 
                        key={locale} value={locale} className={`nav_lang_li ${selected}`} id={locale}>
                            {showedLocale}
                    </li>
                )
            })
        )
    }


    return(
        <>
            <ShowModal />
            <header className="header">
                <div className='header_fixed'>
                    <div className="toggle-sp js-toggle-sp">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 
                    <div className="header_fixed_sns">
                        <a href="https://instagram.com/shimonadashoten" rel="noopener noreferrer" target='_blank'>
                            <FaInstagram className='nav_sns_icon'/>
                        </a>
                    </div>
                </div>
                <nav className="nav js-nav">
                    <ul className="nav_menu">
                        <li className="nav_menu_li js-nav-ul-li">
                        <a href='#overview'>{__(':menu_list1')}</a>
                        </li>
                        <li className="nav_menu_li js-nav-ul-li">
                            <a href='#goods'>{__(':menu_list2')}</a>
                        </li>
                        <li className="nav_menu_li js-nav-ul-li">
                            <a href='#shopinfo'>{__(':menu_list3')}</a>
                        </li>
                        <li className="nav_menu_li js-nav-ul-li">
                            <a href='#contact'>{__(':menu_list4')}</a>
                        </li>
                        <li className="nav_menu_li js-nav-ul-li">
                            <a href='#about'>{__(':menu_list5')}</a>
                        </li>
                    </ul>
                    <ul className="nav_lang" >
                        <Load />  
                    </ul>


                </nav>
            </header>
            <main>
                <div className='openGate'>
                    <div className='openGate_top'></div>
                    <div className='openGate_bottom'></div>
                </div>
                <section className="kv">
                    <div className="kv_bg js-kv-bg">
                        <img src={kv} alt="" className='kv_bg_pc'/>
                        <img src={kv_sp} alt="" className='kv_bg_sp'/>
                    </div>
                    <div className='kv_text'>
                        <div className="kv_text_num js-countup">
                            1935
                        </div>

                        <img src={logo} alt=""  className='kv_text_logo'/>
                        
                    </div>
                </section>
                <section className="section overview wrap" id='overview'>
                    <h2 className='section_title'>OVERVIEW</h2>
                    <h2 className={`section_title_sub ${userLocale}`}>{__(':overview_title')}</h2>
                    <div className='section_content_twoCol'>
                        <div className='section_content_twoCol_first'>
                            <h3 className={`section_content_title ${userLocale}`}>
                                {__(':overview_desc1')}
                            </h3>
                            <div className='section_content_swiper cube'>
                                <Overview1st />
                            </div>
                        </div>
                        <div className='section_content_twoCol_first'>
                            <h3 className={`section_content_title ${userLocale}`}>
                                {__(':overview_desc2')}
                            </h3>
                            <div className='section_content_swiper cube'>
                                <Overview2nd />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section details wrap" id='goods'>
                    <h2 className='section_title'>GOODS</h2>
                    <h2 className={`section_title_sub ${userLocale}`}>{__(':goods_title')}</h2>
                    <div className='section_content_twoCol'>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card drink '>
                                <h3 className={`section_content_title ${userLocale}`}>{__(':goods_1')}</h3>
                                <GoodsDrink /> 
                            </div>
                        </div>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card '>
                            <h3 className={`section_content_title ${userLocale}`}>{__(':goods_2')} </h3>
                                <GoodsShimonadaJR /> 
                            </div>
                        </div>
                    </div>

                    <div className='section_content_twoCol'>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card '>
                            <h3 className={`section_content_title ${userLocale}`}>{__(':goods_3')} </h3>
                                <GoodsShikokuJR /> 
                            </div>
                        </div>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card '>
                            <h3 className={`section_content_title ${userLocale}`}>{__(':goods_4')}</h3>
                                <GoodsShikokuJRCampaign /> 
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section details wrap" id='shopinfo'>
                    <h2 className='section_title'>INFO</h2>
                    <h2 className={`section_title_sub ${userLocale}`}>{__(':info_title')}</h2>
                    <div className='section_content_oneCol'>
                        <div className='section_content_twoCol'>
                            <div className='section_content_twoCol_first text'>
                                <dl>
                                    <dt>{__(':info_title_address')}</dt>
                                    <dd>{__(':info_address')}</dd>
                                    <dt>{__(':info_title_time')}</dt>
                                    <dd>{__(':info_time')}</dd>
                                    <dt>{__(':info_title_parking')}</dt>
                                    <dd>{__(':info_parking_1')}<a href='https://www.city.iyo.lg.jp/keizaikoyou/kanko/documents/rinji_chushajo.pdf' rel="noopener noreferrer" target='_blank' className='link'>{__(':info_parking_2')}</a></dd>
                                    <dt>{__(':info_title_phone')}</dt>
                                    <dd><a href="tel:{__(':info_phone')}">{__(':info_phone')}</a></dd>
                                </dl>
                            </div>
                            <div className='section_content_twoCol_second map'>
                                <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046.423517254648!2d132.58377473286856!3d33.65540119108132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354f890dad04e18d%3A0x62f7cca76ce583b6!2z5LiL54GY5ZWG5bqX!5e0!3m2!1sja!2sus!4v1707094947916!5m2!1sja!2sus" 
                                   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section overview wrap" id='instagram'>
                    <h2 className='section_title'>INSTAGRAM</h2>
                    <h2 className={`section_title_sub ${userLocale}`}>{__(':instagram_title')}</h2>
                    <div className='section_content instagram'>    
                        <Instagram />
                        <div className='section_content_icon'>
                            <a href="https://instagram.com/shimonadashoten" rel="noopener noreferrer" target='_blank'>
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="section overview wrap" id='contact'>
                    <h2 className='section_title'>CONTACT</h2>
                    <h2 className={`section_title_sub ${userLocale}`}>{__(':contact_title')}</h2>
                    <div className='section_content contact'>    
                        <ContactForm />
                    </div>
                </section>
                <section className="section overview wrap" id='about'>
                    <h2 className='section_title'>ABOUT</h2>
                    <h2 className={`section_title_sub ${userLocale}`}>{__(':about_title')}</h2>
                    <div className='section_content'>    
                        <h3 className='section_content_title'>
                            {__(':about_second_title1')}
                                <br />
                            {__(':about_second_title2')}
                            </h3>
                        <div className='section_content_twoCol'>
                            <div className='section_content_twoCol_first img'>
                                <a href="https://iyorin.jp/" className='js-img-click' rel="noopener noreferrer" target='_blank'>
                                    <span>{__(':about_msg')}</span>
                                    <img src={iyorin} alt='' />
                                  　
                                    <div className='img_desc'>
                                        <p>{__(':about_desc1')}</p>
                                        <p>{__(':about_desc2')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className='section_content_twoCol_second movie'>
                                <iframe src="https://www.youtube.com/embed/artfbz_lO7Y?si=xuMskUBdLNegrqCX" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>   
            </main>
            <footer className='footer'>
                <p>&copy;{__(':title')}</p>
                <div>
                            <a href="https://instagram.com/shimonadashoten" rel="noopener noreferrer" target='_blank'>
                                <FaInstagram />
                            </a>
                </div>
            </footer>
        </>
    )
    
}
