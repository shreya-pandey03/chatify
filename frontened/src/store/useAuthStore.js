import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

// import { io } from "socket.io-client";


export const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  // socket: null,
  // onlineUsers: [],

checkAuth: async () => {
  set({ isCheckingAuth: true }); // Start with setting loading state

  try {
    const res = await axiosInstance.get("/auth/check");

    // Assuming `res.data` contains the authenticated user object
    set({ authUser: res.data });

    // Call socket connection if needed
    get().connectSocket();
  } catch (error) {
    console.error("Error in checkAuth:", error);
    set({ authUser: null });
  } finally {
    set({ isCheckingAuth: false });
  }
},


 
  

signup: async () => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup");
      set({ authUser: res.data });

      toast.success("Account created successfully!");
      get().connectSocket();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      set({ isSigningUp: false });
    }
  



// } catch (error) {
//   console.error("Signup error:", error.message);
//   console.error("Full error:", error);
//   toast.error(error?.response?.data?.message || "Signup failed. Check your network.");
// }
//   finally {
//     set({ isSigningUp: false });
//   }
},


 login: async (credentials) => {
  set({ isLoggingIn: true });
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    set({ authUser: res.data });

    toast.success("Logged in successfully");

    get().connectSocket();
  } catch (error) {
    toast.error(error?.response?.data?.message || "Login failed");
  } finally {
    set({ isLoggingIn: false });
  }
},


logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error("Error logging out");
      console.log("Logout error:", error);
    }
  },

}));