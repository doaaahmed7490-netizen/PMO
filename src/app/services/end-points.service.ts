import { environment } from "../../environments/environment";

export const EndPointsService = {
  baseUrl: environment.apiUrl,
  fileUrl: environment.filesBaseUrl,

  StrategicGoals: {
    list: "StrategicGoals/GetAllStrategicGoals",
    add: "StrategicGoals/CreateStrategicGoal",
    edit:  "StrategicGoals/UpdateStrategicGoal",
    delete: "StrategicGoals/DeleteStrategicGoal",
    getById:  "StrategicGoals/GetStrategicGoal"
  },
  Milestone: {
    list: "Milestone/GetAllMilestoneGoals",
    add: "Milestone/CreateMilestoneGoal",
    edit:  "Milestone/UpdateMilestoneGoal",
    delete: "Milestone/DeleteMilestoneGoal",
    getById:  "Milestone/GetMilestoneGoal"
  },
  DirectiveGoals: {
    list: "DirectiveGoals/GetAllDirectiveGoals",
    add: "DirectiveGoals/CreateDirectiveGoal",
    edit:  "DirectiveGoals/UpdateDirectiveGoal",
    delete: "DirectiveGoals/DeleteDirectiveGoal",
    getById:  "DirectiveGoals/GetDirectiveGoal"
  },
  Department: {
    list: "Department/GetAllDepartments",
    add: "Department/CreateDepartment",
    edit:  "Department/UpdateDepartmentInfo",
    delete: "Department/DeleteDepartment",
    getById:  "Department/GetDepartmentInfo"
  },
  Job: {
    list: "Job/GetAllJobs",
    add: "Job/CreateJob",
    edit:  "Job/UpdateJobInfo",
    delete: "Job/DeleteJob",
    getById:  "Job/GetJobInfo"
  },
  Employee: {
    list: "Employee/GetAllEmployees",
    add: "Employee/CreateEmployee",
    edit:  "Employee/UpdateEmployeeInfo",
    delete: "Employee/DeleteEmployee",
    getById:  "Employee/GetEmployeeInfo"
  },
  Service: {
    list: "Service/GetAllServices",
    add: "Service/CreateService",
    edit:  "Service/UpdateServiceInfo",
    delete: "Service/DeleteService",
    getById:  "Service/GetServiceInfo"
  },
  Questions: {
    list: "Questions/GetAllQuestions",
    add: "Questions/CreateQuestion",
    edit:  "Questions/UpdateQuestInfo",
    delete: "Questions/DeleteQuestion",
    getById:  "Questions/GetQuestInfo",
    listQstInSurvey: "Questions/GetAllQuestionsInSurvey",

    listQstforService: "Questions/GetAllQuestionsForService",

  },
  Survey: {
    list: "Survey/GetAll",
    add: "Survey/CreateSurvey",
    edit:  "Survey/UpdateSurveyInfo",
    delete: "Survey/DeleteSurvey",
    getById:  "Survey/GetSurveyInfo",
    getByIdForUser:  "Survey/GetSurveyInfoForUser",

    listQstBySurvey: "Survey/GetAllQuestionsBySurvey",


  },
  SurveyResponse: {
    SubmitSurvey: "SurveyResponse/AddSurveyResponse",
  },
  GrantsSteps: {
    list: "GrantsSteps/GetAllGrantsSteps",
    add: "GrantsSteps/CreateGrantStep",
    edit:  "GrantsSteps/UpdateGrantStepInfo",
    delete: "GrantsSteps/DeleteGrantStep",
    getById:  "GrantsSteps/GetGrantStepInfo"
  },
  LandCaseTypes: {
    list: "LandCasesTypes/GetAllLandCasesTypes",
    add: "LandCasesTypes/CreateLandCaseType",
    edit:  "LandCasesTypes/UpdateLandCaseType",
    delete: "LandCasesTypes/DeleteLandCaseType",
    getById:  "LandCasesTypes/GetLandCaseTypeInfo"
  },
  GrantLandStatus: {
    list: "GrantLandStatus/GetAllGrantLandStatus",
    add: "GrantLandStatus/CreateGrantLandStatus",
    edit:  "GrantLandStatus/UpdateGrantLandStatus",
    delete: "GrantLandStatus/DeleteGrantLandStatus",
    getbyId:  "GrantLandStatus/GetGrantLandStatusInfo",
  },
  Owners: {
    list: "Owners/GetAllOwners",
    listOwnersAndOwnersInGrants: "Owners/GetAllOwnersAndOwnersInGrant",

    add: "Owners/CreateOwner",
    edit:  "Owners/UpdateOwnerInfo",
    delete: "Owners/DeleteOwner",
    getbyId:  "Owners/GetOwnerInfo",
    deleteFile: "Owners/DeleteOwnerFile",

  },
  Parcels: {
    list: "Parcels/GetAllParcels",
    add: "Parcels/CreateParcel",
    edit:  "Parcels/UpdateParcelInfo",
    delete: "Parcels/DeleteParcel",
    getbyId:  "Parcels/GetParcelInfo",
    deleteFile: "Parcels/DeleteParcelFile",

  },
  Stats: {
    totalUsers: "admin/statistics/UsersCount",
    totalActiveUsers: "admin/statistics/ActiveUsersCount",
    totalInactiveUsers: "admin/statistics/InactiveUsersCount",
    totalPosts: "admin/statistics/PostsCount",
    totalEvents: "admin/statistics/EventsCount",
    totalChats: "admin/statistics/ChatConversationsCount",
    totalKnowledgeCenterDocuments: "admin/statistics/KnowledgeCenterDocumentsCount",
    attendedEvents: "admin/statistics/TopAttendedEvents",
    commentedPosts: "admin/statistics/TopCommentedPosts",
    likedPosts: "admin/statistics/TopLikedPosts",
    postOwners: "admin/statistics/TopPostOwners",
    sharedPosts: "admin/statistics/TopSharedPosts",
    likedKnowledgeCenterDocuments: "admin/statistics/TopLikedKnowledgeCenterDocuments",
    sharedKnowledgeCenterDocuments: "admin/statistics/TopSharedKnowledgeCenterDocuments",
  },
  District: {
    list: "District/GetAllDistricts",
    add: "District/CreateDistrict",
    edit: "District/UpdateDistrictInfo",
    delete: "District/DeleteDistrict",
    getById: "District/GetDistrict",
   
  },
  Plans: {
    add: "Plans/CreatePlan",
    update: "Plans/UpdatePlanInfo",
    delete: "Plans/DeletePlan",
    getById: "Plans/GetPlanInfo",
    list: "Plans/GetAllPlans",
    deleteFile: "Plans/DeletePlanFile",

  },
  Parts: {
    list: "Parts/GetAllParts",
    archive: "Parts/DeletePart",
    add: "Parts/CreatePart",
    getById: "Parts/GetPart",
    update: "Parts/UpdatePartInfo"
    },
    Blocks: {
      list: "Blocks/GetAllBlocks",
      archive: "Blocks/DeleteBlock",
      add: "Blocks/CreateBlock",
      getById: "Blocks/GetBlock",
      update: "Blocks/UpdateBlockInfo"
      },
  Notification: {
    list: "admin/Notification/Get",
    send: "admin/Notification/SendNotificationToAllUsers"
  },
  User: {
    Login:"User/Login",
    list: "User/GetAllUsers",
    add: "User/CreateUser",
    edit: "User/UpdateUserInfo",
    activate: "User/ActivateUser",
    getById: "User/GetUserInfo",

    deactivate: "User/DeActivateUser",
    editProfile: "Auth/EditProfile",
    archive: "User/DeleteUser",
    verifyPhone: "Auth/VerfiyPhone",
    verifyEmail: "Auth/VerfiyEmail",
    
    Profile: "Account/GetUserProfile",
    autoComplete: "Account/AutoCompleteUsers",
  },
  PlanParts: {
    list: "PlanParts/GetAllPlanParts",
    GetBtPlanId: "PlanParts/GetAllPlanParts",

    add: "PlanParts/AssignPartToPlan",
    edit: "PlanParts/UpdateAssignPartToPlan",
    delete: "PlanParts/DeleteAssignPartToPlan",
    getById: "PlanParts/GetPlanParts",
  },
  PartBlocks: {
    list: "PartBlocks/GetAllPartBlocks",
    add: "PartBlocks/AssignBlockToPart",
    edit: "PartBlocks/UpdateAssignBlockToPart",
    delete: "PartBlocks/DeleteAssignBlockToPart",
    getById: "PartBlocks/GetPartBlocks",
  },
  LettersTypes: {
    list: "LettersTypes/GetAllLettersTypes",
    add: "LettersTypes/CreateLetterType",
    edit: "LettersTypes/UpdateLetterTypeInfo",
    delete: "LettersTypes/DeleteLetterType",
    getById: "LettersTypes/GetLetterTypeInfo",
  },
  EngineeringOffice: {
    list: "EngineeringOffice/GetAllEngineeringOffices",
    add: "EngineeringOffice/CreateEngineeringOffice",
    edit: "EngineeringOffice/UpdateEngineeringOfficeInfo",
    delete: "EngineeringOffice/DeleteEngineeringOffice",
    getById: "EngineeringOffice/GetEngineeringOfficeInfo",
  },
  RoyalGrant: {
    list: "RoyalGrant/GetAllRoyalGrants",
    add: "RoyalGrant/AddNewRoyalGrant",
    edit: "RoyalGrant/UpdateRoyalGrantInfo",
    delete: "RoyalGrant/DeleteRoyalGrant",
    getById: "RoyalGrant/GetRoyalGrantInfo",
    deleteFile: "RoyalGrant/DeleteRoyalGrantFile",

  },
  Grants: {
    list: "Grants/GetAllGrants",
    add: "Grants/AddNewGrant",
    edit: "Grants/UpdateGrantInfo",
    delete: "Grants/DeleteGrant",
    getById: "Grants/GetGrantInfo",
    deleteFile: "Grants/DeleteGrantFile",

  },
  GrantWorkFlow: {
    list: "GrantWorkFlow/GetAllGrantsWorkFlow",
    add: "GrantWorkFlow/AddNewGrantWorkFlow",
    edit: "GrantWorkFlow/UpdateGrantWorkInfo",
    delete: "GrantWorkFlow/DeleteGrantWorkFlow",
    getById: "GrantWorkFlow/GetGrantWorkFlowInfo",
    deleteFile: "GrantWorkFlow/DeleteGrantWorkFile",

  },
  GrantLand: {
    list: "GrantLand/GetAllGrantLands",
    add: "GrantLand/AssignLandToGrant",
    AssignLandFromMap: "GrantLand/AssignLandToGrantFromMap",

    edit: "GrantLand/UpdateAssignLandToGrantInfo",
    delete: "GrantLand/DeleteAssignLandToGrant",
    getById: "GrantLand/GetGrantLandInfo",
    deleteFile: "GrantLand/DeleteGrantLandFile",

  }, 
  Lookups: {
    role: "admin/User/GetRolesList",
    city: "City/GellAll",
    file: "Documents/GetAttachmentById/",
    filesList: "Documents/GetAttachmentListByIds/",
  },
  Role: {
    list: "Role/GetAllRoles",
   // GetBtPlanId: "Role/GetAllPlanParts",

    add: "Role/AddRole",
    edit: "Role/EditRole",
    //delete: "Role/DeleteAssignPartToPlan",
    getById: "Role/GetRoleInfo",
    ListPrivilages:"Role/GetAllPrivilages",
    ListPrivilagesByRoleId:"Role/GetAllPrivilagesByRoleId",
    ListPrivilagesFilterByRoleId:"Role/GetAllPrivilagesFilterByRoleId",

    ListCustomPrivilagesActionsByRoleId:"Role/GetAllPrivilagesAllPrivilageActionByRoleId",
    getPrivilageActiobByRoleId: "Role/GetRoleActionInfoForSpecificPage",
  GetLettersOrReports:"Role/GetLettersOrReportsBasedOnRole"


  },
  Attachment: {
    //list: "LettersTypes/GetAllLettersTypes",
    add: "Attachment/CreateAttachment",
    edit: "Attachment/UpdateAttachment",

   // upload:"Attachment/UploadFiles"
   /* edit: "LettersTypes/UpdateLetterTypeInfo",
    delete: "LettersTypes/DeleteLetterType",
    getById: "LettersTypes/GetLetterTypeInfo",*/
  },
  EverUpload:{
    upload:"EverUpload/UploadAppGis"
  }
  
};
