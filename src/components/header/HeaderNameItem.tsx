interface HeaderNameItemProps {
    name: string;
}

export default function HeaderNameItem(props: HeaderNameItemProps) {

    return (
        <li className={`hidden sm:block text-2xl text-(--lightmode-text-color-secondary) font-bold dark:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary) dark:hover:text-(--darkmode-text-color-primary)`}>
            <a href={`#/`} aria-current={'page'}>
                {props.name}
            </a>
        </li>
    );
}