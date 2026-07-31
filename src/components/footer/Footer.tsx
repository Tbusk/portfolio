import myInfoJson from "../../data/my-info.json";

export default function Footer() {

    const myInfo = myInfoJson;

    const year = new Date().getFullYear();

    return (
        <footer
            className="pt-6 px-4 md:px-0 py-4 text-(--lightmode-text-color-tertiary) dark:text-(--darkmode-text-color-tertiary) flex justify-between">
            <span>
                © {year} {myInfo.firstName} {myInfo.lastName}.
            </span>

            <a className="bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) hover:underline" href={`mailto:${myInfo.emailAddress}`}>
                Contact Me →
            </a>
        </footer>
    );
}