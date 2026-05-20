interface ShowHideButtonProps {
    setShowAll: (value: boolean) => void;
    showAll: boolean;
    description: string;
}

export default function ShowHideButton(props: ShowHideButtonProps) {
    return (
        <div className="pt-3">
            <button
                className="rounded-3xl py-1 px-8 text-(--accent-color) bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) border-2 border-(--accent-color) dark:hover:bg-(--darkmode-background-color-hover) hover:scale-105 text-md dark:text-(--darkmode-text-color-primary) font-bold dark:font-normal" onClick={() => props.setShowAll(props.showAll)}>
                {props.description}
            </button>
        </div>
    );
}