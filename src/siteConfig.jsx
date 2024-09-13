const municipalId = 15;

// src/api/siteConfig.js
const siteConfig = {
  BASE_URL: "http://192.168.29.245:8085/municipal/api",
  API_BASE_URL: "http://192.168.29.245:8085/municipal",
  // RATE_BASE_URL: "http://192.168.29.113:8080",

  // Master Form
  CREATE_MASTER_FORM: "createMunicipalMaster",
  FETCH_MASTER_FORM: "getAllMunicipalMaster",
  FETCH_BY_MUNI_NAME: "getByMuniName",
  FETCH_BY_COMMIS_NAME: "getByCommisName", 
  UPDATE_SUSPENDED_STATUS: "municipalMaster/suspendedStatus",
  UPDATE_RECORD: "municipalMaster/update",
  IMAGE_SRC: "logo",

  //Property Tax
  GET_ALL_PROPERTY_TAX_COMPONENT: 'getAllPropertyTaxComponent',
  CREATE_PROPERTY_TAX_COMPONENT: 'createPropertyTaxComponent',
  UPDATE_PROPERTY_TAX_COMPONENT: 'propertyTaxComponent/update',
  GET_PROPERTY_TAX_COMPONENT_BY_ID: 'propertyTaxComponent',
  DELETE_PROPERTY_TAX_COMPONENT: 'propertyTaxComponent',
  SUSPEND_PROPERTY_TAX_COMPONENT: 'propertyTaxComponent/suspendedStatus',

  //Property Tax Rate
  GET_ALL_ZONES: 'zone/active',
  GET_ALL_PROPERTY_CATEGORY_USES_TYPES_MUNICIPAL_ID: 'propertycategoryusestype/active',
  GET_ALL_PROPERTY_CONSTRUCTION_TYPES_MUNICIPAL_ID: 'getPropertyConstructionTypeByMunicipalId?municipalId=15',
  GET_ALL_PROPERTY_CONSTRUCTION_AGES_MUNICIPAL_ID: 'constructionAge/active',
  GET_ALL_ROAD_TYPES_MUNICIPAL_ID: 'roadtypes/active',

  GET_ALL_TAX_RATES: 'taxrates/all',
  CREATE_TAX_RATE: 'taxrates/create',
  DELETE_TAX_RATE: 'taxrates/delete',
  DELETE_TAX_RATE_ID: 'taxrates/delete/taxrate',
  GET_TAX_RATE_BY_ID: 'taxrates',
  GET_TAX_ACTIVE: 'taxrates/active/status',
  GET_TAX_RATE_ACTIVE: 'taxrates/active/taxrate',
  GET_TAX_RATE_BYMUNICIPALID: 'taxrates/municipal',
  UPDATE_TAX_RATE_ID: 'taxrates',
  PUT_UPDATE_TAX_RATE_ID: 'taxrates',
  GET_ALL_TAX_RATES_BY_MUNICIPAL_ID:- 'taxrates/municipal',

  //Property tax Component
  GET_ALL_PROPERTY_TAX_COMPONENT_MASTER: 'getAllPropertyTaxComponent',
  PUT_UPDATE_PROPERTY_TAX_COMPONENT_MASTER_ID: 'propertyTaxComponent/update',
  POST_CREATE_PROPERTY_TAX_COMPONENT_MASTER: 'createPropertyTaxComponent',
  PATCH_SUSPENDED_PROPERTY_TAX_COMPONENT_MASTER_ID: 'propertyTaxComponent/suspendedStatus',
  GET_SEARCH_PROPERTY_TAX_COMPONENT_MASTER_ID: 'propertyTaxComponent',
  GET_YEAR_PROPERTY_TAX_COMPONENT_MASTER: 'getByFyYear',
  GET_MUNICIPAL_ID_PROPERTY_TAX_COMPONENT_MASTER: 'gePropertyTaxComponentByMunicipalId', // DO IT BY SESSION QUERY

  //Property Area Range
  GET_ALL_PROPERTY_AREA_RANGE_MASTER: 'getAllPropertyAreaRangeMaster',
  CREATE_PROPERTY_AREA_RANGE_MASTER: 'createPropertyAreaRangeMaster',
  GET_SEARCH_PROPERTY_AREA_RANGE_MASTER_ID: 'getPropertyAreaRangeMaster',
  GET_PROPERTY_AREA_RANGE_MASTER_BY_FYYEAR: 'getPropertyAreaRangeMasterByFyYear',
  UPDATE_PROPERTY_AREA_RANGE_MASTER_ID: 'updatePropertyAreaRangeMaster',
  SUSPENDED_STATUS_PROPERTY_AREA_RANGE_MASTER_ID: 'propertyAreaRangeMaster/suspendedStatus',
  GET_YEAR_MASTER_PROPERTY_AREA_RANGE_MASTER: 'getAllFinancialYearMaster',

  //Property tax rate master
  GET_ALL_PROPERTY_TAX_RATE_MASTER: 'getAllPropertyTaxCessRateMaster',
  CREATE_PROPERTY_TAX_RATE_MASTER: 'createPropertyTaxCessRateMaster',
  GET_ALL_PROPERTY_TYPE_ACTIVE:'propertytype/active',
  PUT_UUPDATE_PROPERTY_TAX_RATE_MASTER: 'updatePropertyTaxCessRateMaster',
  //GET_ALL_PROPERTY_AREA_RANGE_MASTER: 'getAllPropertyAreaRangeMaster',
  //GET_ALL_PROPERTY_TAX_COMPONENT: 'getAllPropertyTaxComponent',

  //Property tax component name
  PUT_UPDATE_PROPERTY_TAX_COMPONENT_NAME_MASTER_ID: 'updatePropertyTaxComponentNameMaster',
  POST_CREATE_PROPERTY_TAX_COMPONENT_NAME_MASTER: 'createPropertyTaxComponentNameMaster',
  SEARCH_PROPERTY_TAX_COMPONENT_NAME_MASTER_BY_COMPONENT_NAME: 'getPropertyTaxComponentNameMasterByComponentName',
  GET_SEARCH_PROPERTY_COMPONENT_NAME_MASTER_ID: 'getPropertyTaxComponentNameMaster',
  GET_ALL_PROPERTY_TAX_COMPONENT_NAME_MASTER: `getAllPropertyTaxComponentNameMaster/${municipalId}`,

  //Property cess rate
  GET_PROPERTY_TAX_CESS_RATE_BY_MUNICIPAL_ID: `getPropertyTaxCessRateMasterByMunicipalId/${municipalId}`,
  
  //PropertyType
  GET_ALL_PROPERTY_TYPE: "/propertytype/alls",
  CREATE_PROPERTY_TYPE: "/propertytype/create",
  UPDATE_PROPERTY_TYPE: "/propertytype/updated/",
  DELETE_PROPERTY_TYPE: "/propertytype/delete/",
  GET_PROPERTY_TYPE_BY_ID: "/propertytype/{id}",
  GET_PROPERTY_TYPE_BY_MUNIID: `propertytype/municipal/${municipalId}`,
  GET_ACTIVE_PROPERTY_TYPE: "/propertytype/active",

  //PropertyUseType
  GET_ALL_PROPERTY_USE_TYPE: "/propertycategoryusestype/allusers",
  CREATE_PROPERTY_USE_TYPE: "/propertycategoryusestype/create",
  UPDATE_PROPERTY_USE_TYPE: "/propertycategoryusestype/updated/",
  DELETE_PROPERTY_USE_TYPE: "/propertycategoryusestype/delete/",
  GET_PROPERTY_USE_TYPE_BY_ID: "/propertycategoryusestype/1",
  GET_ACTIVE_PROPERTY_USE_TYPE: "/propertycategoryusestype/active",
  PROPERTY_USE_TYPE_BY_MUNIID: `propertycategoryusestype/municipal/${municipalId}`,

  //PropertyAssessmentType
  FETCH_PROPERTY_ASSESSMENT_TYPE: "/propertyassismenttype/allusers",
  CREATE_PROPERTY_ASSESSMENT_TYPE: "/propertyassismenttype/create",
  UPDATE_PROPERTY_ASSESSMENT_TYPE: "/propertyassismenttype/updated/",
  DELETE_PROPERTY_ASSESSMENT_TYPE: "/propertyassismenttype/delete/",
  GET_PROPERTY_ASSESSMENT_TYPE_BY_ID: "/propertyassismenttype/{id}",
  GET_PROPERTY_ASSESSMENT_TYPE_BY_MUNIID: "/propertyassismenttype/municipal/{municipalId}",
  GET_ACTIVE_PROPERTY_ASSESSMENT_TYPE: "propertyassismenttype/active",

  //ConstructionType
  CREATE_CONSTRUCTION_TYPE: "/createPropertyConstructionType",
  GETALL_CONSTRUCTION_TYPE: "/getAllPropertyConstructionType",
  SEARCH_BY_CONSTRUCTION_ID: "/propertyConstructionType/1", // For searching by ID
  DELETE_CONSTRUCTION_TYPE: "/propertyConstructionType/suspendedStatus/",
  UPDATE_CONSTRUCTION_TYPE: "/propertyConstructionType/update/",
  CONSTRUCTION_TYPE_BY_MUNIID: "/getPropertyConstructionTypeByMunicipalId?municipalId=15",

  //ConstructionAge
  CREATE_CONSTRUCTION_AGE: "/constructionAge/create?createdBy=1",
  GET_ALL_CONSTRUCTION_AGE: "/constructionAge/all",
  SEARCH_BY_CONSTRUCTION_AGE_ID: "/constructionAge/{id}", // For searching by ID
  DELETE_CONSTRUCTION_AGE: "/constructionAge/delete/",
  UPDATE_CONSTRUCTION_AGE: "/constructionAge/",
  GET_ACTIVE_CONSTRUCTION_AGE: "/constructionAge/active",
  CONSTRUCTION_AGE_BY_MUNIID: "/constructionAge/municipal/15",

  //OwnershipType
  FETCH_OWNERSHIP_TYPE: "/ownership/allusers",
  CREATE_OWNERSHIP_TYPE: "/ownership/create",
  UPDATE_OWNERSHIP_TYPE: "/ownership/updated/",
  DELETE_OWNERSHIP_TYPE: "/ownership/delete/",
  GET_OWNERSHIP_TYPE_BY_ID: "/ownership/{id}",
  GET_OWNERSHIP_TYPE_BY_MUNIID: `ownership/municipal/${municipalId}`,
  GET_ACTIVE_OWNERSHIP_TYPE: "/ownership/active?status=0",

  //WardMaster
  FETCH_WARD: "/getAllWards",
  CREATE_WARD: "/zoneWard",
  UPDATE_WARD: "/update/",
  DELETE_WARD: "/ward/suspendedStatus/",
  GET_ACTIVE_WARD: "",
  GET_WARD_BY_MUNICIPALID: `geZoneWardByMunicipalId?municipalId=${municipalId}`,

  //Water Setups
  CREATE_APPLICATION: "water/createWaterApplication",
  FETCH_ALL_APPLICATIONS: "water/getAllWaterApplication",
  FETCH_BY_CATEGORY_NAME: "water/getByApplicationCategoryName",
  UPDATE_SUSPENDEDAPPLICATION_STATUS: "water/waterApplication/suspendedStatus",
  UPDATE_APPLICATION: "water/waterApplication/update",

  //Application Type
  CREATE_APPLICATION_TYPE: "applicationtype/create",
  FETCH_ALL_APPLICATIONS_TYPE: "applicationtype/allusers",
  SEARCH_BY_APPLICATION_ID: "applicationtype", // For searching by ID
  UPDATE_SUSPENDEDAPP_TYPE_STATUS: "applicationtype/delete",
  UPDATE_APPLICATION_TYPE: "applicationtype/updated",
  ACTIVE_APPLICATION_TYPE: "applicationtype/active",

  //water Property Type
  CREATE_WATER_PROPERTY_TYPE: "/water/propertyType/create?createdBy=1",
  GET_WATER_PROPERTY_TYPE: "/water/propertyType/all",
  UPDATE_WATER_PROPERTY_TYPE: "/water/propertyType/update?updatedBy=1",
  DELETE_WATER_PROPERTY_TYPE: "/water/propertyType/delete/",
  WATER_PROPERTY_TYPE_BY_MUNIID: `water/propertyType/municipal/${municipalId}`,
   
  //Unit Master Water
  CREATE_UNIT_MASTER: "/water/createUnitMaster",
  GET_UNIT_MASTER: "/water/getAllUnitMaster",
  UPDATE_UNIT_MASTER: "/water/unitMaster/update/",
  DELETE_UNIT_MASTER: "/water/unitMaster/suspendedStatus/",
  UNIT_MASTER_BY_MUNIID: `water/getUnitMasterByMunicipalId?municipalId=${municipalId}`,
  
  //Unit Rate Master
  CREATE_UNIT_RATE_MASTER: "/water/unitRate/create?createdBy=1",
  GET_UNIT_RATE_MASTER: "/water/unitRate/all",
  UPDATE_UNIT_RATE_MASTER: "/water/unitRate/update/",
  DELETE_UNIT_RATE_MASTER: "/water/unitRate/delete/",
  UNIT_RATE_BY_MUNIID: "/water/unitRate/municipal/15",

  //Road type name
    GET_ACTIVE_ROAD_TYPES: 'roadtypes/active',
    CREATE_ROAD_TYPE: 'roadtypes',
    DELETE_ROAD_TYPE: 'roadtypes/delete',
    GET_ALL_ROAD_TYPE: 'roadtypes/all',
    SEARCH_ROAD_TYPE_ID: 'roadtypes',
    SEARCH_ROAD_MUNICIPAL_ID: 'roadtypes/municipal',
    PUT_UPDATE_ROAD_TYPE_ID: 'roadtypes/update',

  //Zone Data
  GET_ACTIVE_ZONES: 'zone/active',
    CREATE_ZONE: 'zone/create',
    UPDATE_ZONE_ID: 'zone',
    DELETE_ZONE_ID: 'zone/delete',
    GET_ALL_ZONE_DATA: 'zone/all',
	  GET_ALL_ZONE_DATA_MUNICIPAL_ID:'zone/municipal',
    SEARCH_ZONE_MUNICIPAL_ID: 'zone/municipal',
    SEARCH_ZONE_ID: 'zone',

    //Water Setups
    CREATE_APPLICATION: "water/createWaterApplication",
    FETCH_ALL_APPLICATIONS: "water/getAllWaterApplication",
    FETCH_BY_CATEGORY_NAME: "water/getByApplicationCategoryName",
    UPDATE_SUSPENDEDAPPLICATION_STATUS: "water/waterApplication/suspendedStatus",
    UPDATE_APPLICATION: "water/waterApplication/update",

    //Application Type
    CREATE_APPLICATION_TYPE: "water/applicationtype/create",
    FETCH_ALL_APPLICATIONS_TYPE: "water/applicationtype/municipal/15",
    SEARCH_BY_APPLICATION_ID: "water/applicationtype", // For searching by ID
    UPDATE_SUSPENDEDAPP_TYPE_STATUS: "water/applicationtype/delete",
    UPDATE_APPLICATION_TYPE: "water/applicationtype/updated",
    ACTIVE_APPLICATION_TYPE: "water/applicationtype/active",

    //Document Type Name
    CREATE_DOCUMENT_TYPE: "water/createDocumentTypeMaster",
    FETCH_ALL_DOCUMENT_TYPE: "water/getDocumentTypeMasterByMunicipalId?municipalId=15",
    SEARCH_BY_ALLDOCUMENT_NAME: "water/getByDocumentTypeName",
    UPDATE_SUSPENDED_DOC_STATUS: "water/documentTypeMaster/suspendedStatus",
    UPDATE_DOCUMENT_TYPE: "water/documentTypeMaster/update",
	  SEARCHID_DOCUMENT_TYPE: "water/getDocumentTypeMaster",
    GET_DOCUMENT_TYPE_BY_MUNIID: "/water/getDocumentTypeMasterByMunicipalId?municipalId=15",

    //Pipeline Type name
    CREATE_PIPELINE_TYPE: "water/pipelinetype/create",
    FETCH_ALL_PIPELINE_TYPE: "water/pipelinetype/allusers",
    SEARCH_BY_PIPELINE_NAME: "water/pipelinetype",
    UPDATE_SUSPENDED_PIPE_STATUS: "water/pipelinetype/delete",
    UPDATE_PIPELINE_TYPE: "water/pipelinetype/updated",
	  ACTIVE_PIPELINE_TYPE: "water/pipelinetype/active",
    PIPELINE_TYPE_BY_MUNIID: "water/pipelinetype/municipal/15",

    //Calculation Type
    CREATE_CALCULATION_TYPE: "water/calculationtype/create",
    FETCH_ALL_CALCULATION_TYPE: "water/calculationtype/allusers",
    SEARCH_BY_CALCULATION_NAME: "water/calculationtype",
    UPDATE_SUSPENDED_CALCULATION_STATUS: "water/calculationtype/delete",
    UPDATE_CALCULATION_TYPE: "water/calculationtype/updated",
	  ACTIVE_CALCULATION_TYPE: "water/pipelinetype/active",
	  SEARCH_BY_CALCULATION_MUNIID: "water/calculationtype/municipal",

    //Connection type
    CREATE_CONNECTION_TYPE: "api/waterconnection/create",
    FETCH_ALL_CONNECTION_TYPE: "api/waterconnection/allusers",
    SEARCH_BY_CONNECTION_ID: "api/waterconnection",
    UPDATE_SUSPENDED_CONNECTION_STATUS: "api/waterconnection/delete",
    UPDATE_CONNECTION_TYPE: "api/waterconnection/updated",
	  ACTIVE_CONNECTION_TYPE: "api/waterconnection/active",
	  SEARCH_BY_MUNICIPALID: "api/waterconnection/municipal",
    
    //Trade Application Type Master
    PUT_UPDATE_TRADE_APPLICATION_TYPE_ID: 'tradeLicence/updatedTradeApplicationType',
    POST_CREATE_TRADE_APPLICATION_TYPE: 'tradeLicence/createTradeApplicationType',
    PATCH_DELETE_TRADE_APPLICATION_TYPE_ID: 'tradeLicence/deleteTradeApplicationType',
    GET_SEARCH_TRADE_APPLICATION_TYPE_BY_ID: 'tradeLicence/getTradeApplicationTypeById',
    GET_ALL_TRADE_APPLICATION_TYPE_BY_MUNICIPAL_ID: 'tradeLicence/getAllTradeApplicationTypeByMunicipalId',
    GET_ALL_TRADE_APPLICATION_TYPES: 'tradeLicence/allTradeApplicationTypes',
    GET_ACTIVE_TRADE_APPLICATION_TYPES: 'tradeLicence/activeTradeApplicationTypes',

    //ml trade type controller
    PUT_UPDATE_TRADE_ALLMl_TRADE_TYPE_ID: 'tradeLicence/updatedMlTradeType',
    POST_CREATE_TRADE_ALLMl_TRADE_TYPE: 'tradeLicence/createMlTradeType',
    PATCH_DELETE_TRADE_ALLMl_TRADE_TYPE_ID: 'tradeLicence/deleteMlTradeType',
    GET_SEARCH_TRADE_ALLMl_TRADE_TYPE_BY_ID: 'tradeLicence/getMlTradeTypeById',
    GET_ALL_TRADE_ALLMl_TRADE_TYPE_BY_MUNICIPAL_ID: 'tradeLicence/getAllMlTradeTypeByMunicipalId',
    GET_ALL_TRADE_ALLMl_TRADE_TYPE: 'tradeLicence/allMlTradeTypes',
    GET_ACTIVE_TRADE_ALLMl_TRADE_TYPE: 'tradeLicence/activeMlTradeTypes',

    //ml Firm Type
    PUT_UPDATE_TRADE_AllMlFIRM_TYPE_ID: 'tradeLicence/updatedMlFirmType',
    POST_CREATE_TRADE_AllMlFIRM_TYPE: 'tradeLicence/createMlFirmType',
    PATCH_DELETE_TRADE_AllMlFIRM_TYPE_ID: 'tradeLicence/deleteMlFirmType',
    GET_SEARCH_TRADE_AllMlFIRM_TYPE_BY_ID: 'tradeLicence/getMlFirmTypeById',
    GET_ALL_TRADE_AllMlFIRM_TYPE_BY_MUNICIPAL_ID: 'tradeLicence/getAllMlFirmTypeByMunicipalId',
    GET_ALL_TRADE_AllMlFIRM_TYPE: 'tradeLicence/allMlFirmType',
    GET_ACTIVE_TRADE_AllMlFIRM_TYPE: 'tradeLicence/activeMlFirmType',

    //Ml Business Nature
    PUT_UPDATE_TRADE_AllMlBUSINESS_NATURE_ID: 'tradeLicence/updatedMlBusinessNature',
    POST_CREATE_TRADE_AllMlBUSINESS_NATURE: 'tradeLicence/createMlBusinessNature',
    PATCH_DELETE_TRADE_AllMlBUSINESS_NATURE_ID: 'tradeLicence/deleteMlBusinessNature',
    GET_SEARCH_TRADE_AllMlBUSINESS_NATURE_BY_ID: 'tradeLicence/getMlBusinessNatureById',
    GET_ALL_TRADE_AllMlBUSINESS_NATURE_BY_MUNICIPAL_ID: 'tradeLicence/getAllMlBusinessNatureByMunicipalId',
    GET_ALL_TRADE_AllMlBUSINESS_NATURE: 'tradeLicence/allMlBusinessNature',
    GET_ACTIVE_TRADE_AllMlBUSINESS_NATURE: 'tradeLicence/activeMlBusinessNature',
    
    //consumerCategoryMasterController
    GET_ALL_CONSUMER_CATEGORY: "/water/getAllWaterApplication",
    GET_CONSUMER_CATEGORY_BY_MUNIID: "/water/getWaterApplicationNameByMunicipalId",
    GET_BY_CONSUMER_CATEGORY_NAME: "/water/getByApplicationCategoryName",
    GET_CONSUMER_CATEGORY_BY_ID: "/water/waterApplication/",
    CREATE_CONSUMER_CATEGORY: "/water/createWaterApplication",
    UPDATE_CONSUMER_CATEGORY: "/water/waterApplication/update/",
    DELETE_CONSUMER_CATEGORY: "/water/waterApplication/suspendedStatus/",

    //BuildupAreaMasters
    GET_BUILDUP_AREA_BY_MUNIID: "/water/buildupArea/municipal/1",
    CREATE_BUILDUP_AREA: "/water/buildupArea/create",
    UPDATE_BUILDUP_AREA: "/water/buildupArea/update/",
    DELETE_BUILDUP_AREA: "/water/buildupArea/delete/",

    //FeeMaster
    GET_FEE_BY_MUNIID: "/water/fee/municipal/15",
    CREATE_FEE: "/water/fee/create?createdBy=1",
    UPDATE_FEE: "/water/fee/update/",
    DELETE_FEE: "/water/fee/delete/",

    //AdditionalFeeMaster
    GET_ADDITIONAL_FEE_BY_MUNIID: "/water/additionalfee/municipal/15",
    CREATE_ADDITIONAL_FEE: "/water/additionalfee/create",
    UPDATE_ADDITIONAL_FEE: "/water/additionalfee/update/",
    DELETE_ADDITIONAL_FEE: "/water/additionalfee/delete/",

    //Ml Business Premises
    PUT_UPDATE_TRADE_AllMlBUSINESS_PREMISES_ID: 'tradeLicence/updatedMlBusinessPremises',
    POST_CREATE_TRADE_AllMlBUSINESS_PREMISES: 'tradeLicence/createMlBusinessPremises',
    PATCH_DELETE_TRADE_AllMlBUSINESS_PREMISES_ID: 'tradeLicence/deleteMlBusinessPremises',
    GET_SEARCH_TRADE_AllMlBUSINESS_PREMISES_BY_ID: 'tradeLicence/getMlBusinessPremisesById',
    GET_ALL_TRADE_AllMlBUSINESS_PREMISES_BY_MUNICIPAL_ID: 'tradeLicence/getAllMlBusinessPremisesByMunicipalId',
    GET_ALL_TRADE_AllMlBUSINESS_PREMISES: 'tradeLicence/allMlBusinessPremises',
    GET_ACTIVE_TRADE_AllMlBUSINESS_PREMISES: 'tradeLicence/activeMlBusinessPremises',

    //Ml Rate master
    PUT_UPDATE_TRADE_AllMlRATE_MASTER_ID: 'tradeLicence/updatedMlRateMaster',
    POST_CREATE_TRADE_AllMlRATE_MASTER: 'tradeLicence/createMlRateMaster',
    PATCH_DELETE_TRADE_AllMlRATE_MASTER_ID: 'tradeLicence/deletedMlRateMaster',
    GET_SEARCH_TRADE_AllMlRATE_MASTER_BY_ID: 'tradeLicence/getMlRateMasterById',
    GET_ALL_TRADE_AllMlRATE_MASTER_BY_MUNICIPAL_ID: 'tradeLicence/getAllMlRateMasterByMunicipalId',
    GET_ALL_TRADE_AllMlRATE_MASTER: 'tradeLicence/allMlRateMasters',
    GET_ACTIVE_TRADE_AllMlRATE_MASTER: 'tradeLicence/activeMlRateMasters',
    GET_ALL_LICENCE_FINANCIAL_YEAR_MASTER: 'ml/licenseFinancialYearMaster/getAll',

    //WaterFyYear
    GET_WATER_FY_YEAR: "/water/financialYear/get",

    //DocumentGroupMaster
    DOCUMENT_GROUP_BY_MUNIID: "/documentGroupMasters/municipal/15",
    CREATE_DOCUMENT_GROUP: "/documentGroupMasters/create?createdBy=1",
    UPDATE_DOCUMENT_GROUP: "/documentGroupMasters/update/",
    DELETE_DOCUMENT_GROUP: "/documentGroupMasters/delete/",

    //ML_Documents_master_controller
    PUT_UPDATED_ML_DOCUMENT_MASTER_BY_ID: "tradeLicence/updatedMlDocumentMasterById",
    POST_CREATE_ML_DOCUMENT_MASTER: "tradeLicence/createMlDocumentMaster",
    PATCH_SUSPENDED_STATUS_ML_DOCUMENT_MASTER_BY_ID: "tradeLicence/deleteMlDocumentMasterById",
    GET_SEARCH_ML_DOCUMENT_MASTER_BY_ID: "tradeLicence/getMlDocumentMasterById",
    GET_FETCH_ML_DOCUMENT_MASTER_BY_MUNI_ID: "tradeLicence/getAllMlDocumentMasterMunicipal/15",
    GET_FETCH_ALL_ML_DOCUMENT_MASTER: "tradeLicence/allMlDocumentMaster",
    GET_ACTIVE_ML_DOCUMENT_MASTER: "tradeLicence/activeMlDocumentMaster",
    GET_DROPDOWN_ML_APPLICATION_TYPE_BY_ID: "tradeLicence/getAllTradeApplicationTypeByMunicipalId/15",

    //Document_Group_Master
    PUT_UPDATE_DOCUMENT_GROUP_MASTER:"updatePropertyDocumentGroupMaster",
    POST_CREATE_DOCUMENT_GROUP_MASTER:"createPropertyDocumentGroupMaster",
    PATCH_SUSPENDEDSTATUS_DOCUMENT_GROUP_MASTER:"/propertyDocumentGroupMaster/suspendedStatus/{id}",
    GET_DOCUMENT_GROUP_MASTER: "/propertyDocumentGroupMaster",
    GET_DOCUMENT_GROUP_MASTER:"/getAllPropertyDocumentGroupMaster",
    GET_DOCUMENT_GROUP_MASTER:"/getAllPropertyDocumentGroupMaster/15",

    //Document_Upload_Master
    PUT_BY_ID_UPDATE_DOCUMENT_UPLOAD_MASTER:"/updatePropertyUploadDocumentMaster",
    POST_CREATE_DOCUMENT_UPLOAD_MASTER:"/createPropertyUploadDocumentMaster",
    PATCH_BY_ID_SUSPENDEDSTATUS_DOCUMENT_UPLOAD_MASTER:"/propertyUploadDocumentMaster/suspendedStatus",
    GET_SEARCH_BY_ID_DOCUMENT_UPLOAD_MASTER:"/propertyUploadDocumentMaster",
    GET_DOCUMENT_UPLOAD_MASTER:"/getAllPropertyUploadDocumentMaster",
    GET_ALL_DOCUMENT_GROUP_MASTER:"/getAllPropertyUploadDocumentMaster/15",
};




export default siteConfig;