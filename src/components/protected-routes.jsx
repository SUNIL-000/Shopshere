import { Navigate, Outlet, useNavigate } from "react-router-dom"


const ProtectedRoutes = ({children,isAuthenticate,adminOnly}) => {
  // const navigate= useNavigate();

  // if(isAuthenticate){
  //    return <Navigate  to={"/"}/>
  // }
//   if(adminOnly){
//     return <Navigate  to={"/"}/>
//  }
  return children ? children : <Outlet />
  
}

export default ProtectedRoutes