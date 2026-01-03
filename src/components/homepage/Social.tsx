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
            <div className="border-2 rounded-2xl py-1 px-3 text-xl md:text-2xl hover:underline hover:scale-110">
                <a className="flex gap-3" href={props.link}>
                    <img src={props.logo} alt={props.logoAlt} height={props.imageHeight} width={props.imageWidth}/>
                    {props.name}
                </a>
            </div>
        </>
    );
}