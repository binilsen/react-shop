import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import UserPicture from "./UserPicture";
const Profile = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <h1>Welcome {authCtx.username} </h1>
      <UserPicture />
    </>
  );
};

export default Profile;
