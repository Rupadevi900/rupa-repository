export const AUTHENTICATION_ROUTES=[
    {path:'',loadchildren:()=>import("../authentication/authentication.module").then(x=>x.AuthenticationModule)}
];
