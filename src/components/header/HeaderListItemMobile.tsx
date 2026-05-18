import type { Dispatch } from "preact/hooks";
import type { SetStateAction } from "preact/compat";
import { useHashLocation } from "wouter/use-hash-location";

interface HeaderListItemMobileProps {
    name: string;
    id: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderListItemMobile(props: HeaderListItemMobileProps) {

    const [location] = useHashLocation();
    const highlight = (location === "" || location === `/${props.id}`);

    return (
        <li className={`text-xl py-2 px-4 dark:text-(--darkmode-text-color-primary) ${highlight ? 'underline-offset-4 underline' : 'text-gray-600 dark:text-(--darkmode-text-color-tertiary) hover:text-black dark:hover:text-(--darkmode-text-color-secondary)'}`}>
            <a href={`#/${props.id ? props.id : ''}`} onClick={() => props.setIsOpen(!props.isOpen)}>
                {props.name}
            </a>
        </li>
    );
}