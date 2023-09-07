import React from 'react'
import './AdminDashboard.css'
import { Line } from 'react-chartjs-2'

const AdminDashboard = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="admin-dashboard">
            <div className="admin-dashboard-main">
                <div className="admin-dash-top">
                    <div className="dash-top-cart" style={{ background: "#7c3aed" }}>
                        <div>Total Sales Amount</div>
                        <span>₹ 0</span>
                    </div>
                    <div className="dash-top-cart" style={{ background: "#ef4444" }}>
                        <div>Total Sales Amount</div>
                        <span>₹ 0</span>
                    </div>
                    <div className="dash-top-cart" style={{ background: "#f59e0b" }}>
                        <div>Total Sales Amount</div>
                        <span>₹ 0</span>
                    </div>
                    <div className="dash-top-cart" style={{ background: "#10b981" }}>
                        <div>Total Sales Amount</div>
                        <span>₹ 0</span>
                    </div>
                </div>
                {/* Charts and pie-charts and all */}
                <div className="admin-dash-chart">
                    Working on Charts Soon
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard