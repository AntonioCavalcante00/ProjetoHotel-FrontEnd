import { Outlet } from "react-router-dom"
import CanvasDashboard from "./pages/admin/CanvasDashboard"

export default function AppAdmin() {
    return (
        <>
            <CanvasDashboard />
            <Outlet />
        </>
    )
}