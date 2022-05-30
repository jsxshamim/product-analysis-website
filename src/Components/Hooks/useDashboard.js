import axios from "axios";
import { useEffect, useState } from "react";

const useDashboard = () => {
    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
        axios.get("data.json").then((res) => setDashboard(res.data));
    }, []);
    return [dashboard, setDashboard];
};

export default useDashboard;
