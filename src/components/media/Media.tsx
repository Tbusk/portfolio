import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Fragment } from "react";

interface MediaProps {
    items: MediaItem[];
}

export interface MediaItem {
    image: string;
    alt: string;
    mode: string;
}

export default function Media(props: MediaProps) {

    const darkmode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return (
        <Fragment>

            <h3 className="font-bold text-(--lightmode-text-color-tertiary) pt-2 pb-3 dark:text-(--darkmode-text-color-tertiary)">
                Media
            </h3>

            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                loop={true}
                centeredSlidesBounds={true}
                centeredSlides={false}
                pagination={{clickable: true}}
                navigation
                className="md:h-120 md:max-w-208 border-2 rounded-xl border-(--lightmode-border-color) dark:border-(--darkmode-border-color) bg-(--lightmode-background-color-secondary) dark:bg-(--darkmode-background-color)"
                style={{margin: 0}}
            >
                {props.items && props.items.length > 0 && darkmode ? props.items.filter(item => darkmode && item.mode === "dark").map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.image} alt={item.alt} className="h-full w-auto object-contain"/>
                    </SwiperSlide>
                )) : props.items.filter(item => !darkmode && item.mode === "light").map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.image} alt={item.alt} className="h-full w-auto object-contain"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
}