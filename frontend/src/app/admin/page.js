import DashboardOverview from "@/components/Dashboard/DashboardOverview";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <div>
                <DashboardOverview />
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;
