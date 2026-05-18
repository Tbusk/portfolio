import Pills from "./pills/Pills.tsx";

interface PillsComponentProps {
    name: string;
    items: string[];
}

export default function PillsComponent(props: PillsComponentProps) {
    return (
        <div className="pt-2 pb-3">
            <div className="font-bold text-gray-600 dark:text-(--darkmode-text-color-tertiary) pb-3">
                {props.name}
            </div>
            <Pills items={props.items} />
        </div>
    )
}