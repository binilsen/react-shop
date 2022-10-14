import styles from "./UserPicture.module.css";
import { useState } from "react";
import { Icons, MComponents } from "../MUIExporter";
import { useSelector } from "react-redux";
const UserPicture = () => {
  const authState = useSelector((state) => state.authReducer);
  const [isEditClicked, setisEditClicked] = useState(false);
  const inputStyle = isEditClicked ? styles.show : styles.hidden;
  const [newUserImage, setNewUserImage] = useState(null);
  const [userImage, setUserImage] = useState(authState.userImage);
  const [tempImg, setTempImg] = useState();
  const token = localStorage.getItem("token");
  const formHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("user[avatar]", newUserImage);
    const response = await fetch("http://127.0.0.1:3000/users", {
      headers: {
        Authorization: token,
      },
      body: formData,
      method: "PUT",
    });
    if (response.ok) {
      authCtx.userImage = URL.createObjectURL(newUserImage);
      setUserImage(URL.createObjectURL(newUserImage));
    }
    event.target.value = "";
    setisEditClicked(false);
  };
  const handleChange = (event) => {
    setNewUserImage(event.target.files[0]);
    setTempImg(URL.createObjectURL(event.target.files[0]));
  };
  const fileHandler = () => {
    setisEditClicked(true);
    document.getElementById("file-exp").click();
  };
  return (
    <MComponents.Stack direction="row">
      <MComponents.Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <MComponents.IconButton
            sx={{ bgcolor: "primary.light" }}
            onClick={fileHandler}
          >
            <Icons.ModeEdit color="default" />
          </MComponents.IconButton>
        }
      >
        <MComponents.IconButton>
          <MComponents.Avatar
            src={tempImg ? tempImg : userImage}
            sx={{ width: 100, height: 90 }}
          />
        </MComponents.IconButton>
      </MComponents.Badge>

      <MComponents.Stack spacing={2} paddingX={3} justifyContent="center">
        <form action="#" onSubmit={formHandler}>
          <input
            accept="image/*"
            type="file"
            typeof="image"
            className={`  form-control w-75 ${inputStyle}`}
            onChange={handleChange}
            id="file-exp"
            hidden
          />
          {isEditClicked && (
            <MComponents.Button variant="contained" size="small" type="submit">
              Change
            </MComponents.Button>
          )}
        </form>
        {isEditClicked && (
          <MComponents.Button
            variant="contained"
            size="small"
            type="reset"
            onClick={() => {
              setisEditClicked(false);
              setTempImg(userImage);
            }}
          >
            Cancel
          </MComponents.Button>
        )}
      </MComponents.Stack>
    </MComponents.Stack>
  );
};

export default UserPicture;
