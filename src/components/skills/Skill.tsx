interface SkillProps {
    name: string;
}

export default function Skill(props: SkillProps) {
    return (
        <>
            <div className="border rounded-2xl py-1 px-3 text-md md:text-md">
                {props.name}
            </div>
        </>
    );
}
