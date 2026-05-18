interface ViewButtonProps {
    link: string;
}

export default function ViewButton(props: ViewButtonProps) {
    return (
        <div className="pt-4 flex">
            <a href={props.link} className="rounded-3xl  py-1.5 px-10 dark:border-(--darkmode-border-color) bg-(--accent-color) hover:bg-(--accent-color-hover)">
                <div className="text-lg font-bold text-(--darkmode-text-color-primary)">
                    View
                </div>
            </a>
        </div>
    );
}