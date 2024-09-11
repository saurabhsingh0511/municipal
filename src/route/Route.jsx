import React from 'react'
import { createBrowserRouter, Route } from 'react-router-dom'
import MunicipalDetailsList from '../pages/master/MunicipalDetailsList'
import MasterPage from '../pages/master/MasterPage';

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MunicipalDetailsList />,
    },
    {
        path: "master-page",
        element: <MasterPage />,
    },
])

export default Route;