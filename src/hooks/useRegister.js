import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./setUser";
export let useRegister = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user.user);

  let registerWithGoogle = () => {
    let provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;

        toast.success(`welcome ${user.displayName}`);
        dispatch(add(user));
        navigate("/");
      })
      .catch((error) => {
        let errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const registerWithEmail = async (name, email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: `https://api.dicebear.com/9.x/initials/svg?seed=${name}`,
      });

      let user = result.user;
      toast.success(`Welcome ${user.displayName}`);

      dispatch(add(user));
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { registerWithGoogle, registerWithEmail };
};
