


import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AppLayout } from "@/components/layout/AppLayout";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { SignupPage } from "@/features/auth/pages/SignupPage";
import { TenantsPage } from "@/features/admin/pages/TenantsPage";
import { DashBoardAdmin } from "@/features/admin/pages/DashBoardAdmin";
import { UserManagementPage } from "@/features/admin/pages/UserManagementPage";
import { RequireAuth } from "../guards/RequireAuth";
import { RequireRole } from "../guards/RequireRole";
import { SubscriptionPlansPage } from "@/features/admin/pages/SubscriptionPlansPage";
import { ChatSupport } from "@/features/admin/pages/ChatSupport";
import { SettingsPage } from "@/features/admin/pages/SettingsPage";
import { RoleAccessPage } from "@/features/admin/pages/RoleAccessPage";

const router = createBrowserRouter([
  {
    // تحويل تلقائي لصفحة الأدمن أول ما يفتح الموقع
    path: "/",
    element: <Navigate to="/admin" replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },
  {
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/admin",
        children: [
          { index: true, element: <DashBoardAdmin /> },
          { path: "brands", element: <TenantsPage /> },
          { path: "plans", element: <SubscriptionPlansPage /> },
          { path: "chat", element: <ChatSupport /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "roles", element: <RoleAccessPage /> },
          { path: "users", element: <UserManagementPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <Navigate to="/admin" replace /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;