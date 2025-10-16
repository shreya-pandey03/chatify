import {create} from "zustand";

export const useAuthStore = create((set) => ({
    authUser :{name:"Shreya Pandey",_id:"0324",age:19},
    isLoading:false,
    isLoggedIn:false,


    login:()=>{
        console.log("login");
        set({isLoggedIn:true,isLoading:true});
    },
}));