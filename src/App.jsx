import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remuv, setloading } from "./hooks/setUser";

function App() {
  const { user, loading } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let auth = getAuth();
const [checking, setChecking] = useState(true);
  // console.log(useUser);

  useEffect(function () {
    dispatch(setloading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(add(user));
        console.log(user);
        navigate("/");
      } else {
        toast.error("User Already sign Out");
        navigate("/login");
      }
      setChecking(false); 

    });

  }, []);
  if (checking) return null;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/category/:categoryName" element={<CategoryPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
