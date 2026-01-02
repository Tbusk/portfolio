export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <>
            <div className="pt-2">
                <div className="flex justify-center text-center md:text-start pb-8 pt-4 px-2">
                    Copyright © {year} Trevor Busk. All rights reserved.
                </div>
            </div>
        </>
    );
}