import { useHashLocation } from "wouter/use-hash-location";

interface HeaderListItemProps {
    name: string;
    id?: string;
}

export default function HeaderListItem(props: HeaderListItemProps) {

    const [location] = useHashLocation();
    const highlight = (location === "" || location === `/${props.id}`);

    return (
        <li className={`hidden sm:block pt-7 text-xl ${highlight ? 'pb-6 border-b-3 border-[#5294e2] font-bold' : 'text-gray-600 hover:text-black'}`}>
            <a href={`#/${props.id ? props.id : ''}`}>
                {props.name}
            </a>
        </li>
    );
}