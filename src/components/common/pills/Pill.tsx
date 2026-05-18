interface PillProps {
    name: string;
}

export default function Pill(props: PillProps) {

    return (
        <li className={`py-1 px-2 rounded-lg text-sm text-center bg-(--lightmode-pill-background-color) dark:bg-(--darkmode-pill-background-color) dark:text-(--darkmode-text-color-secondary)`}>
            {props.name}
        </li>
    );
}