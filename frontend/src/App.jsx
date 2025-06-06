import React from "react";
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLayout></UserLayout>} >
                {/* User Layout*/}
                {/* home */}
                {/* Products  */}
                {/* cart  */}
                </Route>
                <Route>{/* Admin Layout */}</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
