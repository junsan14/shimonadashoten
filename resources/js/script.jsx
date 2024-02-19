import $ from "jquery";
import React,{useState,useEffect, Component } from "react";
import transparentImg from '../images/transparent.png';



function spMenuShow(){
    const [loadState, setLoadState]= useState(false);
    //console.log(loadState)
    $(function(){
      if(!loadState){
     
        let $nav = $('.js-nav');
        let $toggleBtn = $('.js-toggle-sp');
        let $naviList = $('.js-nav-ul-li');

          $toggleBtn.on('click', ()=>{       
            if($nav.hasClass('show')){
              $nav.removeClass('show');
              $toggleBtn.removeClass('show');
              $("body").removeClass('noscroll');
              //console.log($header.hasClass('show'))
            }else{
              $nav.addClass('show');
              $toggleBtn.addClass('show');
              $("body").addClass('noscroll');
              //console.log($header.hasClass('show'))
            }
      
          })
          $naviList.on('click',()=>{
            $nav.removeClass('show');
            $toggleBtn.removeClass('show');
            $("body").removeClass('noscroll');
          })
          setLoadState(true);
      }
  
  
  
    })
}

function imgClick(){
  $(function(){
    $('.js-img-click').hover(function(){
      $(this).children('span').html('ありがとにゃ');
      //console.log($(this).children('span'))
    },function(){
      $(this).children('span').html('来てくれないにゃ?');
    })
  })
  
}

function countUpNumber(){
    let start = 1935;
    const goal = new Date().getFullYear();
    let speed = 25;
    let waittime = 1500;
    let intervalId;
    waittime =0;
    speed=5;
    function startInterval(){
      intervalId = setInterval(function(){
        if(start >= goal+1){
            $('.kv_text_num').addClass('hide');
            $('.kv_text_logo').addClass('show');
            $('.kv_bg').addClass('show');
            $('body').removeClass('noscroll');
            $('.openGate_top').addClass('show');
            $('.openGate_bottom').addClass('show');
            clearInterval(intervalId);
        }else{
          $('.js-countup').html(start);
          start++;
          
        }
    },speed);
    }

    setTimeout(startInterval, waittime)
}


function onScrollOverray(){
    let $sections = $('.section');
    let mag = $(window).width()>375?1.15:1.5;
   //console.log($sections)
    
        $(window).on('scroll', function(){
            let currentHeight = $(window).scrollTop();
            let browserHeight = $(window).height();
            //console.log(mag)
            //kvfade
            if(currentHeight >  browserHeight*0.8){
                //console.log("a")
                $('.kv_bg').addClass('overlay');
            }else if(currentHeight ===  0){
                $('.kv_bg').removeClass('overlay');
            }
            //section fadein
            $sections.each(function(i, ele){
                let sectionHeight = $(ele).offset().top;
               // console.log(sectionHeight)
                //console.log(currentHeight)
                if(currentHeight*mag > sectionHeight){
                   // console.log($(ele))
                    $(ele).addClass('show');
                }
                //console.log($(ele).height());
            })
        })
    
}

function ShowModal(props){
  let images;

  $(function(){
    let $imageModal = $(".js-image-modal");
    let $showModal = $(".js-show-modal");

    $showModal.on("click", function(){
    
      if($(this).hasClass('js-modal-instagram')){
        $showModal = $(".js-modal-instagram");
      }else if($(this).hasClass('js-modal-goods-drink')){
        $showModal = $(".js-modal-goods-drink");
      }else if($(this).hasClass('js-modal-goods-shimondajr')){
        $showModal = $(".js-modal-goods-shimondajr");
      }else if($(this).hasClass('js-modal-goods-shikokujr')){
        $showModal = $(".js-modal-goods-shikokujr");
      }else if($(this).hasClass('js-modal-goods-shikokujrcampaign')){
        $showModal = $(".js-modal-goods-shikokujrcampaign");
      }
    
  //$showModal = $(this).hasClass('js-modal-instagram')?$(".js-modal-instagram"):$(".js-modal-goods");
      $("body").addClass("noscroll");
      let $url = $(this).children().attr("src");
      let index = $(this).data("index");
      //console.log($imageModal)
      $imageModal.addClass("show");
      $imageModal.find(".js-modal-pic").attr("src", $url);
      //images = $(this).hasClass('js-modal-instagram')?$('.js-modal-instagram-img'):$(".js-modal-goods-img");    
      
      if($(this).hasClass('js-modal-instagram')){
        images = $(".js-modal-instagram-img");
      }else if($(this).hasClass('js-modal-goods-drink')){
        images = $(".js-modal-goods-drink-img");
      }else if($(this).hasClass('js-modal-goods-shimondajr')){
        images = $(".js-modal-goods-shimonadajr-img");
      }else if($(this).hasClass('js-modal-goods-shikokujr')){
        images = $(".js-modal-goods-shikokujr-img");
      }else if($(this).hasClass('js-modal-goods-shikokujrcampaign')){
        images = $(".js-modal-goods-shikokujrcampaign-img");
      }

      if(images.length === 1){
        $(".js-left-arrow").addClass("hide");
        $(".js-right-arrow").addClass("hide");
      }
      $(".js-slide-number").text(`${index+1}/${images.length}`)
      $(".js-slide-figcaption").text($($showModal[index]).next("figcaption").text());
      
      //console.log($($showModal[index]).next("figcaption").text())
      //モバイルスワイプ処理
      const minimumDistance = 30
      let startX = 0
      let startY = 0
      let endX = 0
      let endY = 0
      let isTouch = false;
      $(".js-modal-pic").on("touchstart", function(e){
        
        startX = e.touches[0].pageX
        startY = e.touches[0].pageY
        isTouch = true;
      })
      $(".js-modal-pic").on("touchmove", function(e){
        
        endX = e.changedTouches[0].pageX
        endY = e.changedTouches[0].pageY
      })
      $(".js-modal-pic").on('touchend', function(e){
       
        if(isTouch){
          const distanceX = Math.abs(endX - startX)
          // 左右のスワイプ距離の方が上下より長い && 小さなスワイプは検知しないようにする
          if (endX > startX && distanceX > minimumDistance) {
            // スワイプ後の動作
            //console.log('右');
            if(index === 0){
              index = images.length-1;
            }else{
              index = index - 1;
            }
            isTouch = false;
          }else if(endX < startX && distanceX > minimumDistance){
            //console.log('左');
            if(index === images.length-1){
              index = 0;
            }else{
              index = index + 1;
            }
            isTouch = false;
          }
        
          
          $imageModal.find(".js-modal-pic").attr("src", $(images[index]).attr("src")); 
          $(".js-slide-number").text(`${index+1}/${images.length}`);
          $(".js-slide-figcaption").text($($showModal[index]).next("figcaption").text());
     
        }
      })
      //モバイルスワイプ処理終了

      //スライダー処理
      $(".js-close-image-modal-btn, .js-image-modal").on("click", function(e){ 
        //$('.js-content').show("slow");
        //console.log($imageModal);
        //console.log("click")
        if($(e.target).hasClass("js-left-arrow")){
          console.log($(e.target))
          if(index === 0){
            index = images.length-1;
            
          }else{
            index = index - 1;
          }
  
          $imageModal.find(".js-modal-pic").attr("src", $(images[index]).attr("src"));

          $(".js-slide-number").text(`${index+1}/${images.length}`)
          $(".js-slide-figcaption").text($($showModal[index]).next("figcaption").text());
      
        }else if($(e.target).hasClass("js-right-arrow")){
          if(index === images.length-1){
            index = 0;
          }else{
            index = index + 1;
          }

          $imageModal.find(".js-modal-pic").attr("src", $(images[index]).attr("src")); 
          $(".js-slide-number").text(`${index+1}/${images.length}`);
          $(".js-slide-figcaption").text($($showModal[index]).next("figcaption").text());
          

        }else if(!$(e.target).hasClass("js-modal-pic")){
          
          $(".js-close-image-modal-btn").parent().removeClass("show");
          $imageModal.find(".js-modal-pic").attr("src", transparentImg);
          $(".js-slide-figcaption").text($($showModal[index]).next("figcaption").text());
          $("body").removeClass("noscroll");
          
        }
      })
      //スライダークローズ処理
    })
    
  });

  return(
    <>
      <div className="image_modal js-image-modal">
          <span className='js-left-arrow left-arrow'></span>
          <button className="js-close-image-modal-btn">✕</button>
          <div className="js-content content">
            <img className="js-modal-pic modal-pic" src='' alt="" />
            <p className='js-slide-figcaption slide-figcaption'>a</p> 
            <span className='js-slide-number slide-number'></span> 
          </div>
          <span className='js-right-arrow right-arrow'></span>  
      </div>
    </>
  )
}




export {spMenuShow,countUpNumber,onScrollOverray,ShowModal,imgClick};
