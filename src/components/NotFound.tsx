import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";

export default function NotFound() {

    const { route } = useLocation();

    // Redirect to home page
    useEffect(() => {
        route("/");
    }, []);

    return (
        <>
        </>
    );
}