
import { GoodsDrink,GoodsShikokuJR,GoodsShikokuJRCampaign, GoodsShimonadaJR } from '@/Components/Goods';
import { Overview1st, Overview2nd } from '@/Components/Overview';
import {Instagram} from '@/Components/Sns';
import ContactForm from '@/Components/ContactForm';
import React, { useState, useEffect } from 'react'
import { usePage } from '@inertiajs/react';
import {FaInstagram} from 'react-icons/fa6';

import {spMenuShow,countUpNumber,onScrollOverray,ShowModal,imgClick} from '../script';
import kv from '../../images/kv.jpg';
import kv_sp from '../../images/kv_sp.jpg';
import iyorin from '../../images/iyorin.png';
import logo from '../../images/logo.png';
import og from '../../images/og.webp';




export default function Home(){
    spMenuShow();
    countUpNumber();
    onScrollOverray();
    imgClick();
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
                    <ul className="nav_ul">
                        <li className="nav_ul_li js-nav-ul-li">
                        <a href='#overview'>OVERVIEW</a>
                        </li>
                        <li className="nav_ul_li js-nav-ul-li">
                            <a href='#goods'>GOODS</a>
                        </li>
                        <li className="nav_ul_li js-nav-ul-li">
                            <a href='#shopinfo'>SHOP INFO</a>
                        </li>
                        <li className="nav_ul_li js-nav-ul-li">
                            <a href='#contact'>CONTACT</a>
                        </li>
                        <li className="nav_ul_li js-nav-ul-li">
                            <a href='#about'>ABOUT US</a>
                        </li>
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
                    <h2 className='section_title_jp'>下灘商店とは</h2>
                    <div className='section_content_twoCol'>
                        <div className='section_content_twoCol_first'>
                            <h3 className='section_content_title'>
                                海に最も近い駅の1つとして有名な<br />
                                愛媛県伊予市に位置する下灘駅に<br />
                                小売店が24年2月10日OPEN
                                </h3>
                            <div className='section_content_swiper cube'>
                                <Overview1st />
                            </div>
                        </div>
                        <div className='section_content_twoCol_first'>
                            <h3 className='section_content_title'>
                                長年未使用だった駅室の一角で<br />
                                伊予市ならではのお土産や<br />
                                JR商品を販売
                            </h3>
                            <div className='section_content_swiper cube'>
                                <Overview2nd />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section details wrap" id='goods'>
                    <h2 className='section_title'>GOODS</h2>
                    <h2 className='section_title_jp'>商品</h2>
                    <div className='section_content_twoCol'>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card drink '>
                                <h3 className='section_content_title'>ご当地 Drink</h3>
                                <GoodsDrink /> 
                            </div>
                        </div>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card '>
                            <h3 className='section_content_title'>JR四国商品 下灘駅 </h3>
                                <GoodsShimonadaJR /> 
                            </div>
                        </div>
                    </div>

                    <div className='section_content_twoCol'>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card '>
                            <h3 className='section_content_title'>JR四国商品 </h3>
                                <GoodsShikokuJR /> 
                            </div>
                        </div>
                        <div className='section_content_twoCol_first'>
                            <div className='section_content_swiper card '>
                            <h3 className='section_content_title'>JR四国7周年キャンペーン商品</h3>
                                <GoodsShikokuJRCampaign /> 
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section details wrap" id='shopinfo'>
                    <h2 className='section_title'>SHOP INFO</h2>
                    <h2 className='section_title_jp'>ショップ情報</h2>
                    <div className='section_content_oneCol'>
                        <div className='section_content_twoCol'>
                            <div className='section_content_twoCol_first text'>
                                <dl>
                                    <dt>住所</dt>
                                    <dd>愛媛県伊予市双海町大久保</dd>
                                    <dt>営業時間</dt>
                                    <dd>土日祝日PM12:00-日没(基本)</dd>
                                    <dt>駐車場</dt>
                                    <dd>駅前約5台/ <a href='https://www.city.iyo.lg.jp/keizaikoyou/kanko/documents/rinji_chushajo.pdf' rel="noopener noreferrer" target='_blank' className='link'>第2駐車場約20台(徒歩5分)</a></dd>
                                    <dt>お問い合わせ</dt>
                                    <dd><a href="tel:090-5829-3111">090-5829-3111</a></dd>
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
                    <h2 className='section_title_jp'>インスタグラム</h2>
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
                    <h2 className='section_title_jp'>お問い合わせ</h2>
                    <div className='section_content contact'>    
                        <ContactForm />
                    </div>
                </section>
                <section className="section overview wrap" id='about'>
                    <h2 className='section_title'>ABOUT US</h2>
                    <h2 className='section_title_jp'>運営組織</h2>
                    <div className='section_content'>    
                        <h3 className='section_content_title'>愛媛県伊予市<br />移住サポートセンター</h3>
                        <div className='section_content_twoCol'>
                            <div className='section_content_twoCol_first img'>
                                <a href="https://iyorin.jp/" className='js-img-click' rel="noopener noreferrer" target='_blank'>
                                    <span>クリックしてにゃ</span>
                                    <img src={iyorin} alt='' />
                                  　
                                    <div className='img_desc'>
                                        <p>「ともに暮らせるなかまを求めて」</p>
                                        <p>いよりん</p>
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
                <p>&copy;下灘商店</p>
                <div>
                            <a href="https://instagram.com/shimonadashoten" rel="noopener noreferrer" target='_blank'>
                                <FaInstagram />
                            </a>
                </div>
            </footer>
        </>
    )
    
}
