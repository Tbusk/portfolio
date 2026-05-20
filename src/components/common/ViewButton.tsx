interface ViewButtonProps {
    link: string;
}

export default function ViewButton(props: ViewButtonProps) {
    return (
        <div className="pt-4 flex">
            <a href={props.link} rel="noreferrer" target="_blank" className="rounded-3xl  py-1.5 px-10 text-(--accent-color) bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) border-2 border-(--accent-color) dark:hover:bg-(--darkmode-background-color-hover) hover:scale-105">
                <div className="text-lg dark:text-(--darkmode-text-color-primary) font-bold dark:font-normal">
                    View
                </div>
            </a>
        </div>
    );
}