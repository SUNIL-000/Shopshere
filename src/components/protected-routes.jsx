import { Navigate, useNavigate } from "react-router-dom"


const ProtectedRoutes = ({children,isAuthenticate}) => {
  // const navigate= useNavigate();

  if(isAuthenticate){
     return <Navigate  to={"/"}/>
  }
  return children
  
}

export default ProtectedRoutes