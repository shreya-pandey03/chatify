import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const { authUser, login, isLoggedIn } = useAuthStore();
  console.log("authUser", authUser);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]" />

      <button
        onClick={login}
        className="z-50 absolute top-4 right-4 bg-slate-600 text-white px-4 py-2 rounded"
      >
        login
      </button>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
