import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface MediaProps {
    items: string[];
}

export default function Media(props: MediaProps) {

    return (
        <div>

            <div className="font-bold text-gray-600 pt-2 pb-3 dark:text-(--darkmode-text-color-tertiary)">
                Media
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                navigation
                pagination={{clickable: true}}
                className="py-3 md:h-96 h-full w-full"
            >
                {props.items.map((item, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <img src={item} alt={`Media ${index + 1}`} className="h-full w-auto object-contain"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}