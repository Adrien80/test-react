import Favorites from "./pages/favorites/Favorites";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";

/**
 * Applications routes definition with the corresponding component to load
 */
export const AppRoutes = [
    {
        path: "/home",
        component: Home
    }, {
        path: "/settings",
        component: Settings
    }, {
        path: "/favorites",
        component: Favorites
    }
];