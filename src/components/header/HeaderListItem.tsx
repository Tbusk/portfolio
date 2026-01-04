interface HeaderListItemProps {
    name: string;
    id: string;
    index: number;
}

export default function HeaderListItem(props: HeaderListItemProps) {
    return (
        <li className="hover:underline hover:scale-110 text-xl hidden sm:block" key={props.index}>
            <a href={`#${props.id}`}>
                {props.name}
            </a>
        </li>
    );
}