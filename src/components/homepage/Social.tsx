export interface SocialProps {
    name: string;
    link: string;
    logo:  string;
    logoAlt: string;
    imageHeight: number;
    imageWidth: number;
    mode: string;
}

export default function Social(props: SocialProps) {
    return (
        <div className="flex justify-center items-center rounded-4xl px-8 py-2 hover:scale-105 border-2 border-(--accent-color) hover:shadow-md dark:hover:bg-(--darkmode-background-color-hover)">
            <a href={props.link} className="flex items-center gap-2">
                <img src={props.logo} alt={props.logoAlt} height={props.imageHeight} width={props.imageWidth}/>
                <span className="text-xl md:text-2xl dark:text-(--darkmode-text-color-secondary)">{props.name}</span>
            </a>
        </div>
    );
}