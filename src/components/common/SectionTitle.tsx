interface SectionTitleProps {
    title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <>
            <h1 className="text-3xl md:text-5xl pt-4 pb-6 md:pt-4 md:pb-8 md:px-2 px-6 dark:text-(--darkmode-text-color-secondary)">
                {props.title}
            </h1>

            <hr className=" border-(--lightmode-border-color) dark:border-(--darkmode-border-color) pb-4"/>
        </>
    );
}