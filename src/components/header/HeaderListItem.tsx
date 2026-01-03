interface HeaderListItemProps {
    name: string;
    id: string;
}

export default function HeaderListItem(props: HeaderListItemProps) {
    return (
        <li className="hover:underline hover:scale-110 text-xl hidden sm:block">
            <a href={`#${props.id}`}>
                {props.name}
            </a>
        </li>
    );
}