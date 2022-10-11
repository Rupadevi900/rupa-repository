export const AUTHENTICATION_Routes=[
    {path:'',loadchildren:()=>import("../authentication/authentication.module").then(x=>x.AuthenticationModule)}
];