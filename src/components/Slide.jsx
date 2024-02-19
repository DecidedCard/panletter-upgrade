// react-slick 패키지 사용
// 자세한 사용방법은 정확히 찾지 않아서 필요없는 것들이 있을 수 있음.

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageData } from "shared/data";
import styled from "styled-components";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 400,
  };
  return (
    <ImageBox>
      <Artist>artist 이미지</Artist>
      <Slider {...settings}>
        {imageData.map((e) => {
          return (
            <div key={e.id}>
              <ImageH3>
                <img width="100%" src={e.image} alt="이미지가 없습니다." />
              </ImageH3>
            </div>
          );
        })}
      </Slider>
    </ImageBox>
  );
};

export default Slide;

const ImageBox = styled.div`
  background-color: rgb(112, 119, 161, 0.5);
  margin: 10px auto 10px auto;
  border-radius: 8px;
  padding-top: 5px;
  width: 90%;
`;

const ImageH3 = styled.h3`
  width: auto;
  margin: 50px;
`;

const Artist = styled.h2`
  display: flex;
  justify-content: center;
  font-size: large;
  margin: 5px;
`;
