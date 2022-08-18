import styles from "./UserPicture.module.css";
import { useState, useEffect } from "react";
import userDefault from "./../../assets/user.svg";
const UserPicture = () => {
  const [isEditClicked, setisEditClicked] = useState(false);
  const inputStyle = isEditClicked ? styles.show : styles.hidden;
  const [newUserImage, setNewUserImage] = useState(null);
  const [userImage, setUserImage] = useState(userDefault);
  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMCIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY2MDgxODgxOSwiZXhwIjoxNjYwODIyNDE5LCJqdGkiOiJjMDExNTAyNC0yNjg2LTRlYWUtODNhOC0wZWJjNDgzZWJmYmYifQ.A1EMb21nBZoE4ujC1-oiCku1ckiE8eBLy1z8ap7poO4";

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
    if (response.status == 200) setUserImage(URL.createObjectURL(newUserImage));
    event.target.value = "";
    setisEditClicked(false);
  };
  const handleChange = (event) => {
    setNewUserImage(event.target.files[0]);
  };
  const fetchImage = async () => {
    const response = await fetch("http://127.0.0.1:3000/users/sign_in", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    if (response.status == 200 && data.image) setUserImage(data.image);
  };
  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div className="row m-5 justify-content-center">
      <div className={`col-sm-6  shadow p-3 ${styles["profile-banner"]}`}>
        <div className="content p-1">
          <div className="pic my-3 text-center">
            {userImage && (
              <img
                src={userImage}
                className="img p-2 shadow-lg rounded"
                width="100px"
                height="150px"
              />
            )}
            {!userImage && <h1>Loading.....</h1>}
          </div>
          <div className="text-center p-3">
            <form action="#" onSubmit={formHandler}>
              <div className="my-2 d-flex justify-content-center">
                <input
                  type="file"
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
