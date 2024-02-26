import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultipleItemsCarousel.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const MultipleItemsCarousel = () => {
  const foodReducer = useSelector((state) => state.food);
  const foodList = foodReducer.foodList.data;

  const navigateTo = useNavigate();

  const clickHandler = (result) => {
    navigateTo(`/result/?product_id=${result.product_id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Add autoplay setting
    autoplaySpeed: 1000, // Adjust autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  //   const NextArrow = (props) => (
  //     <div className="slick-arrow slick-next" onClick={props.onClick}>
  //       Next
  //     </div>
  //   );

  //   const PrevArrow = (props) => (
  //     <div className="slick-arrow slick-prev" onClick={props.onClick}>
  //       Prev
  //     </div>
  //   );

  return (
    <div className="slider">
      <Slider {...settings}>
        {foodList.map((item) => {
          return (
            <div
              onClick={() => {
                clickHandler(item);
              }}
            >
              <img
                style={{
                  width: "270px",
                  height: "270px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                src={item.image_src}
                alt="Slide 1"
              />
            </div>
          );
        })}
        {/* 
        <div>
          <img
            style={{ width: "270px", height: "270px", borderRadius: "10px" }}
            src="https://www.acouplecooks.com/wp-content/uploads/2020/08/Shrimp-Pasta-003.jpg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            style={{ width: "270px", height: "270px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aDab5TYIOCTCvNDnHJCSD5FMTpvIiJl1Hw&usqp=CAU"
            alt="Slide 3"
          />
        </div>
        <div>
          <img
            style={{ width: "270px", height: "270px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3s1H_UtfoBeyQi604JVU799bpZdQRljnQA&usqp=CAU"
            alt="Slide 4"
          />
        </div>
        <div>
          <img
            style={{ width: "270px", height: "270px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgPlVQ8x0FfY4YYGDBFn3K-8cP1bIq2sJ9Q&usqp=CAU"
            alt="Slide 5"
          />
        </div>
        <div>
          <img
            style={{ width: "270px", height: "270px", borderRadius: "10px" }}
            src="https://img.freepik.com/free-photo/fresh-orange-juice-glass-dark-background_1150-45560.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704326400&semt=ais"
            alt="Slide 6"
          />
        </div> */}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default MultipleItemsCarousel;
