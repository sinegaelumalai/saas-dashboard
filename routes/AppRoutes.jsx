import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ScrollToTop from "../components/ScrollToTop";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import CustomerList from "../pages/CustomerList";
import InvoiceList from "../pages/InvoiceList";
import Calendar from "../pages/Calendar";
import TaskBoard from "../pages/TaskBoard";
import ProductAnalytics from "../pages/ProductAnalytics";
import CreateInvoice from "../pages/CreateInvoice";
import YearCalendar from "../pages/YearCalendar";
import DaySchedule from "../pages/DaySchedule";
import Settings from "../pages/Settings";
import Messages from "../pages/Messages";
import Confirm from "../pages/Confirm";
import Notification from "../pages/Notification";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Route>

        {/* Dashboard Pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<TaskBoard />} />
          <Route path="/products" element={<ProductAnalytics />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
          <Route path="/year-calendar" element={<YearCalendar />} />
          <Route path="/day-schedule" element={<DaySchedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/notifications" element={<Notification />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;