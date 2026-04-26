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
        <li className={`text-xl py-2 px-4 ${highlight ? 'underline-offset-4 underline' : 'text-gray-600 hover:text-black'}`}>
            <a href={`#/${props.id ? props.id : ''}`} onClick={() => props.setIsOpen(!props.isOpen)}>
                {props.name}
            </a>
        </li>
    );
}