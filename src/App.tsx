import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LoginComponent = lazy(() => import("./pages/auth/Login"));
const SignUpComponent = lazy(() => import("./pages/auth/Signup"));
const AdminDashboard = lazy(() => import("./pages/dashboard"));
const HomePage = lazy(() => import("./pages/Home"));
import Loader from "./components/class/Loader";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/dashboard" element={<AdminDashboard />}></Route>
            </Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/register" element={<SignUpComponent />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
