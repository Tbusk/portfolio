interface DateRangeProps {
    startDate: string;
    endDate: string | null;
}

export default function DateRange(props: DateRangeProps) {

    return (
        <div className="text-md pb-2 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-tertiary)">
            <time datetime={props.startDate} >
                {getDateSection(props.startDate)}
            </time>
            {` - `}
            {props.endDate ? (
                <time datetime={props.endDate}>
                    {getDateSection(props.endDate)}
                </time>
            ) : (
                getDateSection(props.endDate)
            )}
        </div>
    );
}

function getDateSection(dateString: string | null): string {
    if (dateString !== null) {
        const date = new Date(dateString);

        const month: string = date.toLocaleString('en-US', {month: 'short'});
        const year: number = date.getFullYear();

        return `${month} ${year}`;
    }

    return 'Present';
}