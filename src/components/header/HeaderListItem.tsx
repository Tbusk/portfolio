import { useHashLocation } from "wouter/use-hash-location";

interface HeaderListItemProps {
    name: string;
    id?: string;
}

export default function HeaderListItem(props: HeaderListItemProps) {

    const [location] = useHashLocation();
    const highlight = (location === `/${props.id}`);

    return (
        <li className={`hidden sm:block text-md ${highlight ? 'font-bold dark:text-(--darkmode-text-color-primary)' : ' text-(--lightmode-text-color-tertiary) dark:text-(--darkmode-text-color-tertiary) hover:text-(--lightmode-text-color-primary) dark:hover:text-(--darkmode-text-color-secondary)'}`}>
            <a href={`#/${props.id ? props.id : ''}`} aria-current={highlight ? 'page' : undefined}>
                {props.name}
            </a>
        </li>
    );
}