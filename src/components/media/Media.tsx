interface MediaProps {
    items: string[];
}

export default function Media(props: MediaProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.items.map((item, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
                    <img src={item} alt={`Media ${index + 1}`} className="h-fit object-right md:object-center w-full" />
                </div>
            ))}
        </div>
    );
}