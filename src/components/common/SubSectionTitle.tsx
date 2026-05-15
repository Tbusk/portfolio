
interface SubSectionTitleProps {
    name: string;
}

export default function SubSectionTitle(props: SubSectionTitleProps) {
    return (
        <div className="text-2xl font-bold pb-3 text-[#5294e2]">
            {props.name}
        </div>
    );
}