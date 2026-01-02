interface EducationItemProps {
    name: string;
    institution: string;
    startDate: string;
    endDate: string;
    gpa?: string;
}

export default function EducationItem(props: EducationItemProps) {
    return (
        <>
            <div>
                <div className="text-lg text-center md:text-start pb-2 px-2">
                    {props.startDate} - {props.endDate}
                </div>
                <div className="text-2xl text-center md:text-start font-bold pb-2  px-2">
                    {props.name}
                </div>
                <div className="text-lg text-center md:text-start pb-2  px-2">
                    {props.institution}
                </div>
                <div className="text-md text-center md:text-start px-2">
                    {props.gpa ? `GPA: ${props.gpa}` : ''}
                </div>
            </div>
        </>
    );
}