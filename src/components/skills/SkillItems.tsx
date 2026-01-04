import Pills from "../common/pills/Pills.tsx";

interface SkillItemsProps {
    title: string;
    items: string[];
}

export default function SkillItems(props: SkillItemsProps) {
    return (
        <div className="py-4">
            <div className="text-xl px-2 font-bold pb-4">
                {props.title}
            </div>

            <Pills items={props.items} />
        </div>
    );
}