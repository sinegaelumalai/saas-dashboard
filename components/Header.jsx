import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const pageTitle = {
        "/dashboard": "Dashboard",
        "/analytics": "Analytics",
        "/customers": "Customer List",
        "/invoices": "Invoices",
        "/calendar": "Calendar",
        "/tasks": "Task Board",
        "/products": "Product Analytics",
    };

    return (
        <header className="h-15 flex items-center justify-between px-6">

            <h2 className="text-2xl font-bold">
                {pageTitle[location.pathname]}
            </h2>
        </header>
    );
};

export default Header;