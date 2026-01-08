import Pill from "./Pill.tsx";

interface PillsProps {
    items: string[];
}

export default function Pills(props: PillsProps) {
    return (
        <ul className="flex flex-row flex-wrap gap-2">
            {props.items.map((item, index) => (
                <Pill name={item} index={index} />
            ))}
        </ul>
    );
}