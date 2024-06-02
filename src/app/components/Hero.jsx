'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import ProfileOfDirector from "./ProfileOfDirector";
import NoticeBoard from "./NoticeBoard";
import QuickLink from "./QuickLink";



const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', zIndex: 1, background: 'transparent' }} // Customize your styles here
      onClick={onClick}
    >
      <IoIosArrowBack style={{ color: 'red', fontSize: '20px' }} /> {/* Customize the icon style */}
    </div>
  );
};
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', zIndex: 1, background: 'transparent' }} // Customize your styles here
      onClick={onClick}
    >
      <IoIosArrowForward style={{ color: 'red', fontSize: '24px' }} /> {/* Customize the icon style */}
    </div>
  );
};
export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow:<CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  return (
   <div className="grid grid-cols-4 gap-4 container mx-auto">
    
     <div className="col-span-3 ms-2 ">
      {/* Slider Part Start */}
      <Slider {...settings} >
      <div className=" ">
        <img src="../image/gtc-1.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-2.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-3.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-4.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-1.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-2.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-3.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-4.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-1.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-2.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-3.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
      <div>
      <img src="../image/gtc-4.jpg" alt="" className=" w-full lg:h-[450px]"/>
      </div>
    </Slider>
    {/* Slider Part End */}
    {/* Brief of GTC start */}
    <div>
      <h1 className=" font-bold text-center text-[20px] text-blue-400">Ghorashal Training Center (GTC)</h1>
      <p>Ghorashal Training Center (GTC) is one of the leading training institutes of the country established in 1991 for providing professional and career development training in the field of development Technical, administration and management. Later on, the institute converted into Foundation by a government resolution in November 2002. It is a self financed associate organization of the Bangladesh Power Development Board.Ghorashal Training Center (GTC) is mandated for enhancing professional skills, expertise and performance of the members of BPDB as well as other public and private organization of the country.</p>
    </div>
    {/* Brief of GTC end */}
    </div>
    <div className="">
      {/* Profile of Director sir Start */}
         <ProfileOfDirector/>
       {/* Profile of Director sir end */}
       {/* Notice Board Start */}
       <NoticeBoard/>
      {/* Notice Board End */}
      {/* Quick Link Part Start */}
       <QuickLink/>
      {/* Quick Link Part End */}
    </div>
    
   </div>
  );
}