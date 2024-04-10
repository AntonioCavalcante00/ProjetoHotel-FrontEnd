import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './slider.module.css'

import banner1 from '../../public/banner1.png'
import banner2 from '../../public/banner2.png'
import banner3 from '../../public/banner3.png'




const Slide = () => {
    const settings = {
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
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
            <div className={s.img}>
                <img src={banner1} />
            </div>
            <div className={s.img}>
                <img src={banner2} />
            </div >
            <div className={s.img}>
                <img src={banner3} />
            </div>
        </Slider>

    );
};

export default Slide;