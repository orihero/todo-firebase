import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HeaderPage } from "./Site/HeaderPage";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/*" element={<HeaderPage/>}>
            <Route path="login" element={<h1>Login</h1>} />
        </Route>
    )
)