import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remuv } from "./hooks/setUser";

function App() {
  const { user } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let auth = getAuth();

  const [authReady, setAuthReady] = useState(false); // Auth tayyorligini tekshirish

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(add(user));
        console.log(user);
        navigate("/");
      } else {
        dispatch(remuv());
        toast.error("User Already Sign Out");
        navigate("/login");
      }
      setAuthReady(true); // Auth tekshiruvi tugadi
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  if (!authReady) return null; // Ma’lumot yuklanmaguncha hech narsa chiqmasin

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
