import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './slider.module.css'


type PropsBannerSliders = {
    Banners?: string[]
}



const Slide = (props: PropsBannerSliders) => {
    const settings = {
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2300,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true
                }
            }
        ]
    };

    return (
        <Slider className={s.Wallpapers} {...settings}>
            {props.Banners?.map((banner, index) => (
                <div className={s.img} key={index}>
                    <img src={banner} />
                </div>
            ))
            }
        </Slider>
    );
};

export default Slide;