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
            <div className="flex justify-center items-center rounded-2xl px-8 py-2 hover:scale-105 border-2 border-[#5294e2] hover:shadow-md">
                <a href={props.link} className="flex items-center gap-2">
                    <img src={props.logo} alt={props.logoAlt} height={props.imageHeight} width={props.imageWidth}/>
                    <span className="text-xl md:text-2xl">{props.name}</span>
                </a>
            </div>
        </>
    );
}