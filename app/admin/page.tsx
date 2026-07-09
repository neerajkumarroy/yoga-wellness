"use client";

import { useEffect, useState } from "react";
import { FiUsers, FiUserCheck, FiCalendar, FiMail, FiFileText, FiDollarSign } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Topbar from "../../components/admin/Topbar";
import StatCard from "../../components/admin/StatCard";
import { adminService } from "../../services/adminService";

interface AnalyticsData {
  totalStudents: number;
  totalTrainers: number;
  totalBookings: number;
  pendingBookings: number;
  newMessages: number;
  totalBlogs: number;
  totalRevenue: number;
  bookingsTrend: { _id: { year: number; month: number }; count: number; revenue: number }[];
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function AdminDashboardPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    adminService.getAnalytics().then((res) => setData(res.data));
  }, []);

  const chartData =
    data?.bookingsTrend.map((item) => ({
      month: monthNames[item._id.month - 1],
      bookings: item.count,
      revenue: item.revenue,
    })) || [];

  return (
    <>
      <Topbar title="Dashboard" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatCard label="Total Students" value={data?.totalStudents ?? "-"} icon={FiUsers} />
          <StatCard label="Active Trainers" value={data?.totalTrainers ?? "-"} icon={FiUserCheck} accent="secondary" />
          <StatCard label="Total Bookings" value={data?.totalBookings ?? "-"} icon={FiCalendar} />
          <StatCard label="Pending Bookings" value={data?.pendingBookings ?? "-"} icon={FiCalendar} accent="secondary" />
          <StatCard label="New Messages" value={data?.newMessages ?? "-"} icon={FiMail} />
          <StatCard label="Published Blogs" value={data?.totalBlogs ?? "-"} icon={FiFileText} accent="secondary" />
        </div>

        <div className="rounded-xl2 bg-white dark:bg-[#161616] p-6 shadow-premium">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl text-dark dark:text-cream">Bookings & Revenue (last 6 months)</h2>
            <div className="flex items-center gap-2 text-primary font-medium">
              <FiDollarSign />
              ₹{data?.totalRevenue?.toLocaleString("en-IN") ?? 0}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" stroke="#8884" />
              <YAxis stroke="#8884" />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              />
              <Line type="monotone" dataKey="bookings" stroke="#3A7D44" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="revenue" stroke="#8BC34A" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
