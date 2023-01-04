import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LoginComponent = lazy(() => import("./pages/auth/Login"));
const SignUpComponent = lazy(() => import("./pages/auth/Signup"));
const AdminDashboard = lazy(() => import("./pages/dashboard"));
const HomePage = lazy(() => import("./pages/Home"));
const UnsupportedPage = lazy(() => import("./pages/unsupported"));
const MagicLogin = lazy(() => import("./pages/auth/magicLogin"));
import Loader from "./components/class/Loader";
import ProtectedRoute from "./LoggedoutProtectedRoute";
import NewProtectedRoute from "./LoggedinProtectedRoute";
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
            <Route element={<NewProtectedRoute />}>
              <Route path="/login" element={<LoginComponent />}></Route>
              <Route path="/register" element={<SignUpComponent />}></Route>
              <Route path="/magic-login" element={<MagicLogin />}></Route>
            </Route>
            <Route path="/unsupported" element={<UnsupportedPage />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
