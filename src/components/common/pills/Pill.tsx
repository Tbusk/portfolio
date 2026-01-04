interface PillProps {
    name: string;
    index: number;
}

export default function Pill(props: PillProps) {
    return (
        <li className="border py-0.5 px-4 rounded-2xl text-md text-center" key={props.index}>
            {props.name}
        </li>
    );
}