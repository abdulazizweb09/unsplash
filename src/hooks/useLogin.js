import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { add } from "./setUser";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export function useLogin() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let loginWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        let users = user.user;
        dispatch(add(users));
        toast.success(`Welcome ${users.displayName}`);
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Email or Password is incorrect !`);
      });
  };
  return { loginWithEmail };
}

export default useLogin;
