import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { usePage } from '@inertiajs/react';
import {ShowModal} from '@/Script';
import {AiFillHeart} from 'react-icons/ai';
import { useMemo } from "react";
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


import {Autoplay } from 'swiper/modules';
import logo from '../../images/logo.png';


function Instagram(){  
  let page = usePage();
  const [posted, setPosted] = useState("");
  useEffect(()=>{
    const user_name = "shimonadashoten" 
    const access_token = import.meta.env.VITE_APP_Instagram_access_token_KEY;
    const user_id = import.meta.env.VITE_APP_Instagram_user_id_KEY;
    const get_count = 9 ;//取得したい投稿数

    axios
      .get(
        `https://graph.facebook.com/v16.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`,
      )
      .then((res) => {
        setPosted(res.data);   
      });
    
  }, [])
//console.log(posted)
    const Render = ()=>{
      if(posted){
        let posts =posted.business_discovery.media.data; 
          return(
            <>
              <ShowModal props='instagram'/>

              <div className='grid_container'>
              {posts.map((post,i) => {
                let gridClass;
                
                if(i === 4){                         
                  return(  
                    <div className='grid_container_item js-show-modal js-modal-instagram' key='4' data-index='4'>
                      <img src={logo} alt="" className='js-modal-img js-modal-instagram-img' 
                          data-url='zikokuyo' data-index='4'/>
                    </div>
                  ) 
                }else{
                  return(  
                    <div className='grid_container_item js-show-modal js-modal-instagram' key={i} data-index={i}>
                      <img src={post.media_url} alt="" className='js-modal-img js-modal-instagram-img' 
                          data-url={post.media_url} data-index={i}/>
                    </div>
                  ) 
                }
         
              })}
              </div>
            </>
          )

    }
  }
  return (
    <Render />
  );


 
}



  

export {Instagram};



