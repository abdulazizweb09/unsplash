import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remuv, setloading } from "./hooks/setUser";
import Like from "./components/Like";
import NotFound from "./components/NotFound";

function App() {
  const { user, loading } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let auth = getAuth();

  useEffect(() => {
    dispatch(setloading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(add(user));
        // navigate("/");
      } else {
        dispatch(remuv());
        toast.error("User Already Sign Out");
        navigate("/login");
      }
      dispatch(setloading(false));
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/like" element={<Like />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
