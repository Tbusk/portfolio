interface PillProps {
    name: string;
}

export default function Pill(props: PillProps) {

    return (
        <li className={`py-1 px-2 rounded-lg text-sm text-center bg-gray-200`}>
            {props.name}
        </li>
    );
}