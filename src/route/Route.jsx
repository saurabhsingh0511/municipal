import React from 'react'
import { createBrowserRouter, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard';
import MunicipalDetailsList from '../pages/MunicipalMaster/MunicipalDetailsList/MunicipalDetailsList';
import MasterPage from '../pages/MunicipalMaster/MasterPage/MasterPage';
import RoadTypeName from '../pages/PropertyMasterSetup/RoadTypeName/RoadTypeName';

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
    {
        path: "/road-type-name",
        element: <RoadTypeName />,
    },
])

export default Route;