
interface SubSectionTitleProps {
    name: string;
}

export default function SubSectionTitle(props: SubSectionTitleProps) {
    return (
        <h2 className="text-2xl font-bold pb-4 text-(--accent-color)">
            {props.name}
        </h2>
    );
}