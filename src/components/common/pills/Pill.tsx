interface PillProps {
    name: string;
    index: number;
}

const colorSchemes: Map<number, string> = new Map([
    [0, "border-blue-500 bg-blue-100 text-blue-700"],
    [1, "border-blue-600 bg-blue-50 text-blue-800"],
    [2, "border-blue-400 bg-blue-100 text-blue-600"],
    [3, "border-indigo-500 bg-indigo-100 text-indigo-700"],
    [4, "border-indigo-600 bg-indigo-50 text-indigo-800"],
    [5, "border-indigo-400 bg-indigo-100 text-indigo-600"],
    [6, "border-cyan-500 bg-cyan-100 text-cyan-700"],
    [7, "border-cyan-600 bg-cyan-50 text-cyan-800"],
    [8, "border-cyan-400 bg-cyan-100 text-cyan-600"],
    [9, "border-sky-500 bg-sky-100 text-sky-700"],
    [10, "border-sky-600 bg-sky-50 text-sky-800"],
    [11, "border-sky-400 bg-sky-100 text-sky-600"],
    [12, "border-slate-500 bg-slate-100 text-slate-700"],
    [13, "border-slate-600 bg-slate-50 text-slate-800"],
    [14, "border-slate-400 bg-slate-100 text-slate-600"],
    [15, "border-teal-500 bg-teal-100 text-teal-700"],
    [16, "border-teal-600 bg-teal-50 text-teal-800"],
    [17, "border-blue-700 bg-blue-50 text-blue-900"],
    [18, "border-indigo-700 bg-indigo-50 text-indigo-900"],
    [19, "border-sky-300 bg-sky-50 text-sky-700"],
]);

function getRandomColorScheme(): string {
    const randomKey = Math.floor(Math.random() * colorSchemes.size);

    const defaultValue = 'border-gray-500 bg-gray-100 text-gray-700';

    return colorSchemes.get(randomKey) || defaultValue;
}

export default function Pill(props: PillProps) {
    const colorScheme = getRandomColorScheme();

    return (
        <li className={`border py-0.5 px-4 rounded-2xl text-md text-center ${colorScheme}`} key={props.index}>
            {props.name}
        </li>
    );
}