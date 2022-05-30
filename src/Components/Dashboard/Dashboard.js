import axios from "axios";
import React, { useEffect, useState } from "react";

import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState([]);
    useEffect(() => {
        axios.get("data.json").then((res) => setDashboard(res.data));
    }, []);

    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-10">
                <ChartOne data={dashboard} />
                <ChartTwo data={dashboard} />
            </div>
            <ChartThree data={dashboard} />
        </div>
    );
};

export default Dashboard;
