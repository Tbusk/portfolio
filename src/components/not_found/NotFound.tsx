export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div
                className="text-7xl md:text-9xl text-center md:text-start py-8 md:py-8 font-bold">
                Whoops!
            </div>

            <div className="text-3xl md:text-6xl text-center md:text-start py-1 md:py-4">
                This page doesn't exist
            </div>

            <div className="text-2xl py-20 md:w-140 px-4 md:px-8 text-center">
                Use the navbar to navigate to other pages.
            </div>
        </div>
    );
}