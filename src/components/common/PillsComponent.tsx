import Pills from "./pills/Pills.tsx";

interface PillsComponentProps {
    name: string;
    items: string[];
}

export default function PillsComponent(props: PillsComponentProps) {
    return (
        <div className="pt-2 pb-3">
            <h3 className="font-bold text-(--lightmode-text-color-tertiary) dark:text-(--darkmode-text-color-tertiary) pb-3">
                {props.name}
            </h3>
            <Pills items={props.items} />
        </div>
    )
}