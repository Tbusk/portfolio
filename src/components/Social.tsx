interface SocialProps {
    name: string;
    link: string;
    logo:  string;
    logoAlt: string;
}

export default function Social(props: SocialProps) {
    return (
        <>
            <div className="border-2 rounded-2xl py-1 px-3 text-xl md:text-2xl">
                <a className="flex gap-3" href={props.link}>
                    <img src={props.logo} alt={props.logoAlt} height="32" width="32"/>
                    {props.name}
                </a>
            </div>
        </>
    );
}