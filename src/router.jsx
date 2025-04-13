import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Overview from "./pages/dashboard/Overview";
import Messages from "./pages/dashboard/Messages";
import Contacts from "./pages/dashboard/Contacts";
import DeliveryReport from "./pages/dashboard/DeliveryReport";
import Payment from "./pages/dashboard/Payment";
import RechargesBills from "./pages/dashboard/RechargesBills";
import Settings from "./pages/dashboard/Settings";
import EnterOTP from "./pages/EnterOTP";
import ResetNewPasswordScreen from "./pages/ResetNewPasswordScreen";
import PaymentHistory from "./pages/dashboard/PaymentHistory";
import RechargeBillPaymentHistory from "./pages/dashboard/RechargeBillPaymentHistory";
import AdminLayout from "./components/Layout/AdminLayout";
import MessagesHistory from "./pages/dashboard/MessagesHistory";

// Dummy authentication
const isAuthenticated = () => !!localStorage.getItem("token");

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/otdcode" element={<EnterOTP />} />
    <Route path="/resetnewpassword" element={<ResetNewPasswordScreen />} />

    <Route
      path="/dashboard/*"
      element={
        isAuthenticated() ? <AdminLayout /> : <Navigate to="/signin" replace />
      }
    >
      <Route path="" element={<Overview />} />
      <Route path="messages" element={<Messages />} />
      <Route path="contacts" element={<Contacts />} />
      <Route
        path="rehargepayenbillhistory"
        element={<RechargeBillPaymentHistory />}
      />
      <Route path="paymenthistory" element={<PaymentHistory />} />
      <Route path="messagehistory" element={<MessagesHistory />} />
      <Route path="delivery-report" element={<DeliveryReport />} />
      <Route path="payment" element={<Payment />} />
      <Route path="recharges-bills" element={<RechargesBills />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
);

export default AppRouter;
