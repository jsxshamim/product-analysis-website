import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ChartOne = ({ data }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">Line Chart</h2>
            <LineChart
                className="m-auto"
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="natural" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="natural" dataKey="investment" stroke="#82ca9d" />
                <Line type="natural" dataKey="sell" stroke="#F97316" />
            </LineChart>
        </div>
    );
};

export default ChartOne;
