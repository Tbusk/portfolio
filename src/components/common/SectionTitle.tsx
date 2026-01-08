interface SectionTitleProps {
    title: string;
    id: string;
}

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <>
            <div className="text-3xl md:text-5xl pt-4 pb-6 md:pt-4 md:pb-8 md:px-2 px-6" id={props.id}>
                {props.title}
            </div>

            <hr className=" border-gray-300 pb-4"/>
        </>
    );
}