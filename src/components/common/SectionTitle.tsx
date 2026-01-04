interface SectionTitleProps {
    title: string;
    id: string;
}

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <>
            <div className="text-3xl md:text-5xl py-1 md:py-4 px-2" id={props.id}>
                {props.title}
            </div>
        </>
    );
}