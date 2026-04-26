import Pills from "../common/pills/Pills.tsx";

export interface EducationItemProps {
    name: string;
    institution: string;
    link: string;
    startDate: string;
    endDate: string;
    achievements?: string[];
    gpa?: string;
    courses?: string[];
}

export default function EducationItem(props: EducationItemProps) {
    return (
        <div className="pb-6">
            <div className="text-lg pb-2">
                {props.startDate} - {props.endDate}
            </div>

            <div className="text-2xl font-bold pb-2 text-[#5294e2]">
                {props.name}
            </div>

            <div className="text-lg pb-2">
                <a href={props.link} className="underline">
                    {props.institution}
                </a>
            </div>

            {props.courses && props.courses.length > 0 && (
                <div className="pt-2 pb-3">
                    <div className="font-bold text-gray-600 pb-3">
                        Courses
                    </div>
                    <Pills items={props.courses} />
                </div>
            )}

            {props.achievements && props.achievements.length > 0 && (
                <div className="pt-2 pb-3">
                    <div className="font-bold text-gray-600 pb-3">
                        Achievements
                    </div>
                    <Pills items={props.achievements} />
                </div>
            )}

            {props.gpa && (
                <div className="pt-2 pb-3">
                    <div className="font-bold text-gray-600 pb-3">
                        GPA
                    </div>
                    <Pills items={[props.gpa]} />
                </div>
            )}
        </div>
    );
}