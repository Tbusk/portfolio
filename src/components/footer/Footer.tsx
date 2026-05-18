import myInfoJson from "../../data/my-info.json";

export default function Footer() {

    const myInfo = myInfoJson;

    const year = new Date().getFullYear();

    return (
        <div className="pt-2">
            <div className="flex justify-center text-center md:text-start pb-8 pt-4 px-2 text-(--lightmode-text-color-tertiary) dark:text-(--darkmode-text-color-tertiary)">
                Copyright © {year} {myInfo.name}. All rights reserved.
            </div>
        </div>
    );
}