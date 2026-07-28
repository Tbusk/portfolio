import Pills from "./pills/Pills.tsx";

interface PillsComponentProps {
    name: string;
    items: string[];
}

export default function PillsComponent(props: PillsComponentProps) {
    return (
        <div>
            <h3 className="font-bold text-(--lightmode-text-color-primary) dark:text-(--darkmode-text-color-primary) pb-4">
                {props.name}
            </h3>
            <Pills items={props.items} />
        </div>
    )
}