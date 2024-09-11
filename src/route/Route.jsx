import React from 'react'
import { createBrowserRouter, Route } from 'react-router-dom'
import MunicipalDetailsList from '../components/master/MunicipalDetailsList'

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MunicipalDetailsList />,
    },
])

export default Route;