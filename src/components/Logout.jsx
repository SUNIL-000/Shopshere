import { signOut } from "firebase/auth";
import { IoMdLogOut } from "react-icons/io";
import { auth } from "../Firebase";
import { useDispatch } from "react-redux";
import { userNotExist } from "../redux/reducer/userReducer";
const Logout = () => {
  const dispatch =useDispatch()
  const logoutHandler = async () => {
    try {
      await signOut(auth);
      // Optionally dispatch an action to clear user state
      dispatch(userNotExist());
    } catch (error) {
      // Handle logout error
      console.log(error)
    }
  };

  return (
    <button
      type="button"
      onClick={logoutHandler}
      className="flex items-center gap-1 bg-[#000000df] hover:bg-[#0000008c] 
        rounded-[20px] text-[white] px-3 py-1 font-semibold uppercase "
    >
      <IoMdLogOut />{" "}
    </button>
  );
};

export default Logout;
