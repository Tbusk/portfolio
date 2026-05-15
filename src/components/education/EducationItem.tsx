import DateRange from "../common/DateRange.tsx";
import SubSectionTitle from "../common/SubSectionTitle.tsx";
import PillsComponent from "../common/PillsComponent.tsx";

export interface EducationItemProps {
    name: string;
    institution: string;
    link: string;
    startDate: string;
    endDate: string|null;
    achievements?: string[];
    gpa?: string;
    courses?: string[];
}

export default function EducationItem(props: EducationItemProps) {
    return (
        <div className="pb-6">
            <DateRange startDate={props.startDate} endDate={props.endDate}/>

            <SubSectionTitle name={props.name}/>

            <div className="text-lg pb-2">
                <a href={props.link} className="underline">
                    {props.institution}
                </a>
            </div>

            {props.courses && props.courses.length > 0 && (
                <PillsComponent name="Courses" items={props.courses} />
            )}

            {props.achievements && props.achievements.length > 0 && (
                <PillsComponent name="Achievements" items={props.achievements} />
            )}

            {props.gpa && (
                <PillsComponent name="GPA" items={[props.gpa]} />
            )}
        </div>
    );
}