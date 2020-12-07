import React from 'react';
// import { Navigate } from 'react-router-dom';
import DashboardView from './views/DashboardView';
import InventoryView from './views/InventoryView';
import TransactionsView from './views/TransactionsView';
import CustomersView from './views/CustomersView';
import ReportsView from './views/ReportsView';
import LoginView from './views/LoginView';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'inventory', element: <InventoryView /> },
      { path: 'transactions', element: <TransactionsView /> },
      { path: 'customers', element: <CustomersView /> },
      { path: 'reports', element: <ReportsView /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
    //   { path: 'register', element: <RegisterView /> },
    //   { path: '404', element: <NotFoundView /> },
    //   { path: '/', element: <Navigate to='/login' /> },
    //   { path: '*', element: <Navigate to='/404' /> },
    ],
  },
];
export default routes;