import Pills from "../common/pills/Pills.tsx";

interface EducationItemProps {
    name: string;
    institution: string;
    link: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    coursework?: string[];
}

export default function EducationItem(props: EducationItemProps) {
    return (
        <>
            <div>
                <div className="text-lg pb-2 px-2">
                    {props.startDate} - {props.endDate}
                </div>

                <div className="text-2xl font-bold pb-2  px-2">
                    {props.name}
                </div>

                <div className="text-lg pb-2 px-2">
                    <a href={props.link} className="hover:underline">
                        {props.gpa ? `${props.institution}, GPA: ${props.gpa}` : props.institution}
                    </a>
                </div>

                {props.coursework && props.coursework.length > 0 && (
                    <>
                        <div className="font-bold px-2 py-2 pb-4">
                            Relevant Coursework
                        </div>

                        <Pills items={props.coursework} />
                    </>
                )}
            </div>
        </>
    );
}