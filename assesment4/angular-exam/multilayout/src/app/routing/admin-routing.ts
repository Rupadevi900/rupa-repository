export const ADMIN_Routes=[
    {path:'',loadchildren:()=>import("../admin/admin.module").then(x=>x.AdminModule)}
];