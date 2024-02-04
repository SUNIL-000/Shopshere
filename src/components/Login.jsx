import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
  return (
    <button
    onClick={()=>navigate('/login')}

      type="button"
      className="flex items-center gap-1 bg-[#000000df] transition-all hover:bg-[#000000a1] 
        rounded-[20px] text-[white] px-3 py-1 font-semibold uppercase "
    >
      <IoMdLogIn /> 
      Login
    </button>
  );
};

export default Login;
