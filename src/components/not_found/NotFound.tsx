export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2
                className="text-7xl md:text-9xl text-center md:text-start py-8 md:py-8 font-bold dark:text-(--darkmode-text-color-primary)">
                Whoops!
            </h2>

            <h3 className="text-3xl md:text-6xl text-center md:text-start py-1 md:py-4 dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary)">
                This page doesn't exist
            </h3>

            <p className="text-2xl py-20 md:w-140 px-4 md:px-8 text-center dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-tertiary)">
                Use the navbar to navigate to other pages.
            </p>
        </div>
    );
}