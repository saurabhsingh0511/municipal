import React from 'react'
import { createBrowserRouter, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard';
import MasterPage from '../pages/MunicipalMaster/MasterPage';
import MunicipalDetailsList from '../pages/MunicipalMaster/MunicipalDetailsList';

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/municipal-details-list",
        element: <MunicipalDetailsList />,
    },
    {
        path: "/master-page",
        element: <MasterPage />,
    },
])

export default Route;