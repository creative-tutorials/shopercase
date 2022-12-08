import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LoginComponent = lazy(() => import("./components/auth/Login"));
const SignUpComponent = lazy(() => import("./components/auth/Signup"));
const UploadPage = lazy(() => import("./components/admin/upload"));
const HomePage = lazy(() => import("./pages/Home"));
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/upload" element={<UploadPage />}></Route>
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
