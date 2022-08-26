import styles from "./UserPicture.module.css";
import { useState, useContext } from "react";
import AuthContext from "./../../store/auth-context";
const UserPicture = () => {
  const authCtx = useContext(AuthContext);
  const [isEditClicked, setisEditClicked] = useState(false);
  const inputStyle = isEditClicked ? styles.show : styles.hidden;
  const [newUserImage, setNewUserImage] = useState(null);
  const [userImage, setUserImage] = useState(authCtx.userImage);
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
  };
  return (
    <div className="row m-5 justify-content-center">
      <div className={`col-sm-6  shadow p-3 ${styles["profile-banner"]}`}>
        <div className="content p-1">
          <div className="pic my-3 text-center">
            {userImage && (
              <img
                src={userImage}
                className="img img-thumbnail  shadow-lg rounded"
                width="160px"
                height="150px"
              />
            )}
          </div>
          <div className="text-center p-3">
            <form action="#" onSubmit={formHandler}>
              <div className="my-2 d-flex justify-content-center">
                <label htmlFor="image" hidden>
                  Select image
                </label>
                <input
                  accept="image/*"
                  type="file"
                  typeof="image"
                  className={`  form-control w-75 ${inputStyle}`}
                  onChange={handleChange}
                />
              </div>

              {isEditClicked && (
                <button type="submit" className="btn btn-dark">
                  Change
                </button>
              )}
              {!isEditClicked && (
                <button
                  type="button"
                  onClick={() => setisEditClicked(true)}
                  className="btn btn-dark"
                >
                  Edit
                </button>
              )}
            </form>
            {isEditClicked && (
              <button
                className="btn btn-danger my-2"
                onClick={() => {
                  setisEditClicked(false);
                  setNewUserImage(false);
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPicture;
