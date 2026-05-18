
interface SubSectionTitleProps {
    name: string;
}

export default function SubSectionTitle(props: SubSectionTitleProps) {
    return (
        <div className="text-2xl font-bold pb-3 text-(--accent-color)">
            {props.name}
        </div>
    );
}