interface EducationItemProps {
    name: string;
    institution: string;
    link: string;
    startDate: string;
    endDate: string;
    gpa?: string;
}

export default function EducationItem(props: EducationItemProps) {
    return (
        <>
            <div>
                <div className="text-lg pb-2">
                    {props.startDate} - {props.endDate}
                </div>

                <div className="text-2xl font-bold pb-2 text-[#5294e2]">
                    {props.name}
                </div>

                <div className="text-lg">
                    <a href={props.link} className="hover:underline">
                        {props.gpa ? `${props.institution}, GPA: ${props.gpa}` : props.institution}
                    </a>
                </div>
            </div>
        </>
    );
}