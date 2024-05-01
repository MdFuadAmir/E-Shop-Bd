import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-7xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;