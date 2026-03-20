interface PillProps {
    name: string;
    index: number;
}

export default function Pill(props: PillProps) {

    return (
        <li className={`py-1 px-2 rounded-lg text-sm text-center bg-gray-200`} key={props.index}>
            {props.name}
        </li>
    );
}