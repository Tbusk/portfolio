import type { Dispatch } from "preact/hooks";
import type { SetStateAction } from "preact/compat";

interface HeaderListItemMobileProps {
    name: string;
    id?: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    index: number;
}

export default function HeaderListItemMobile(props: HeaderListItemMobileProps) {

    const highlight = document.documentURI.endsWith(`/${props.id ? props.id : ''}`)

    return (
        <li className={`hover:underline hover:scale-110 text-xl py-3 text-center ${highlight ? 'underline' : ''}`} key={props.index}>
            <a href={`#/${props.id ? props.id : ''}`} onClick={() => props.setIsOpen(!props.isOpen)}>
                {props.name}
            </a>
        </li>
    );
}