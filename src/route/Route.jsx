import React from 'react'
import { createBrowserRouter, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard';
import MunicipalDetailsList from '../pages/MunicipalMaster/MunicipalDetailsList/MunicipalDetailsList';
import MasterPage from '../pages/MunicipalMaster/MasterPage/MasterPage';
import RoadTypeName from '../pages/PropertyMasterSetup/RoadTypeName';
import ZoneData from '../pages/PropertyMasterSetup/ZoneData';
import PropertyTaxComponentList from '../pages/PropertyMasterSetup/PropertyTaxComponentList';
import PropertyTaxComponent from '../pages/PropertyMasterSetup/PropertyTaxComponent';
import PropertyTaxCessRateList from '../pages/PropertyMasterSetup/MasterPropertyTaxCessRateList';
import CreatePropertyTaxCess from '../pages/PropertyMasterSetup/CreatePropertyTaxCess';

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
    {
        path: "/zone-data",
        element: <ZoneData />,
    },
    {
        path: "/property-tax-component-list",
        element: <PropertyTaxComponentList />,
    },
    {
        path: "/create-property-tax-component",
        element: <PropertyTaxComponent />,
    },
    {
        path: "/property-tax-cess-rate-list",
        element: <PropertyTaxCessRateList />,
    },
    {
        path: "/create-property-tax-cess-rate",
        element: <CreatePropertyTaxCess />,
    },
])

export default Route;