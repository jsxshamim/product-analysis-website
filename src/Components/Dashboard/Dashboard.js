import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import useDashboard from "../Hooks/useDashboard";

const Dashboard = () => {
    const [dashboard] = useDashboard();

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
