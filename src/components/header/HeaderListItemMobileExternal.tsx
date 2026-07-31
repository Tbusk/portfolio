interface HeaderListItemMobileExternalProps {
    name: string;
    link: string;
}

export default function HeaderListItemMobileExternal(props: HeaderListItemMobileExternalProps) {

    return (
        <li className={`text-xl py-2 px-4 text-(--lightmode-text-color-tertiary) dark:text-(--darkmode-text-color-tertiary) hover:text-black dark:hover:text-(--darkmode-text-color-secondary)`}>
            <a href={props.link} rel="noreferrer" target="_blank">
                {props.name}
            </a>
        </li>
    );
}