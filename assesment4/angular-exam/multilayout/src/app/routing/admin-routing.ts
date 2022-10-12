export const ADMIN_ROUTES=[
    {
       // path:'', loadChildren:()=>import("../admin/admin.module").then(x=>x.AdminModule)
       path:'dashboard',loadChildren:()=>import("../admin/admin-dashboard/admin-dashboard.module").then(x=>x.AdminDashboardModule)
    },
    {path:'employee',loadChildren:()=>import("../admin/admin-employee/admin-employee.module").then(x=>x.AdminEmployeeModule)},
    {path:'department',loadChildren:()=>import("../admin/admin-department/admin-department.module").then(x=>x.AdminDepartmentModule)}
];