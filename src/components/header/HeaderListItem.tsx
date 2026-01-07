interface HeaderListItemProps {
    name: string;
    id?: string;
    index: number;
}

export default function HeaderListItem(props: HeaderListItemProps) {

    const highlight = document.documentURI.endsWith(`/${props.id ? props.id : ''}`)

    return (
        <li className={`hover:underline hidden sm:block pt-7 text-xl ${highlight ? 'pb-6 border-b-3 border-gray-400 font-bold' : ''}`} key={props.index}>
            <a href={`#/${props.id ? props.id : ''}`}>
                {props.name}
            </a>
        </li>
    );
}