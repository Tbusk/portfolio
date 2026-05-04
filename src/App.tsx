import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import GeneralComponent from "./components/common/GeneralComponent.tsx";
import { type RouteProps, routes } from "./components/routing/Route.tsx";


export default function App() {

    return (
        <Router hook={useHashLocation} base="/">
            <Switch>
                {routes && routes.length > 0 && routes.map((route: RouteProps) => (
                    <Route path={route.path}>
                        <GeneralComponent hasHeading={route.hasHeading} title={route.title} children={route.component}/>
                    </Route>
                ))}
            </Switch>
        </Router>
    )
}
