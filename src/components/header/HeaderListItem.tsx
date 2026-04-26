import { useHashLocation } from "wouter/use-hash-location";

interface HeaderListItemProps {
    name: string;
    id?: string;
}

export default function HeaderListItem(props: HeaderListItemProps) {

    const [location] = useHashLocation();
    const highlight = (location === "" || location === `/${props.id}`);

    return (
        <li className={`hidden sm:block text-xl ${highlight ? ' border-b-4 pb-7 border-[#5294e2] font-bold' : ' pb-8 text-gray-600 hover:text-black'}`}>
            <a href={`#/${props.id ? props.id : ''}`}>
                {props.name}
            </a>
        </li>
    );
}