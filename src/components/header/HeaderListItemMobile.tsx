import type { Dispatch } from "preact/hooks";
import type { SetStateAction } from "preact/compat";

interface HeaderListItemMobileProps {
    name: string;
    id: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    index: number;
}

export default function HeaderListItemMobile(props: HeaderListItemMobileProps) {
    return (
        <li className="hover:underline hover:scale-110 text-xl py-3 text-center" key={props.index}>
            <a href={`#${props.id}`} onClick={() => props.setIsOpen(!props.isOpen)}>
                {props.name}
            </a>
        </li>
    );
}