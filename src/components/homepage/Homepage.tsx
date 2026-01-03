import Socials from "./Socials.tsx";

export default function Homepage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-3xl md:text-6xl text-center md:text-start py-1 md:py-4">
                    Hiya
                </div>

                <div className="text-4xl md:text-8xl text-center md:text-start py-2 md:py-4 font-bold">
                    I'm Trevor Busk
                </div>

                <div className="text-2xl text-center md:text-start md:text-4xl py-4 md:py-6">
                    Full-Stack Software Engineer
                </div>

                <Socials />
            </div>
        </>
    );
}