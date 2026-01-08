interface SocialProps {
    name: string;
    link: string;
    logo:  string;
    logoAlt: string;
    imageHeight: number;
    imageWidth: number;
}

export default function Social(props: SocialProps) {
    return (
        <>
            <div className="flex justify-center items-center rounded-full p-4 text-xl md:text-2xl hover:scale-105 border-2 border-[#5294e2]">
                <a href={props.link}>
                    <img src={props.logo} alt={props.logoAlt} height={props.imageHeight} width={props.imageWidth}/>
                </a>
            </div>
        </>
    );
}