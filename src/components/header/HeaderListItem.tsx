import { useHashLocation } from "wouter/use-hash-location";

interface HeaderListItemProps {
    name: string;
    id?: string;
}

export default function HeaderListItem(props: HeaderListItemProps) {

    const [location] = useHashLocation();
    const highlight = (location === "" || location === `/${props.id}`);

    return (
        <li className={`hidden sm:block text-xl ${highlight ? ' border-b-4 pb-7 border-(--accent-color) font-bold dark:text-(--darkmode-text-color-primary)' : ' pb-8 text-gray-600 dark:text-(--darkmode-text-color-tertiary) hover:text-black dark:hover:text-(--darkmode-text-color-secondary)'}`}>
            <a href={`#/${props.id ? props.id : ''}`}>
                {props.name}
            </a>
        </li>
    );
}