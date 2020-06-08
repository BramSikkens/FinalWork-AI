import React, { useEffect, useState } from "react";
import S3Service from "../../services/S3Service";
import { connect } from "react-redux";
import { updateUser } from "../../services/UserService";

import { refreshUser } from "../../redux/actions/authentication";

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    RefreshUser: (id) => {
      dispatch(refreshUser(id));
    },
  };
};
const EditProfileSection = (props) => {
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [editProfileImage, setEditProfileImage] = useState(false);

  useEffect(() => {
    const url = S3Service.ReceiveImageUrlFromBucket(
      props.auth.user.profileImage,
      {
        resize: {
          width: 192,
          height: 192,
          fit: "cover",
        },
      }
    );
    setProfileImageUrl(url);
  }, []);

  return (
    <div class="col-md-9">
      <div class="dashboard-title   fl-wrap">
        <h3>Edit Profile</h3>
      </div>
      <div className="profile-edit-container fl-wrap block_box">
        <div className="custom-form">
          <div className="row">
            <div className="col-sm-6">
              <label>
                First Name <i className="fal fa-user" />
              </label>
              <input type="text" value={props.auth.user.FirstName} />
            </div>
            <div className="col-sm-6">
              <label>
                Second Name <i className="fal fa-user" />
              </label>
              <input type="text" value={props.auth.user.LastName} />
            </div>
            <div className="col-sm-6">
              <label>
                Email Address
                <i className="far fa-envelope" />
              </label>
              <input type="text" value={props.auth.user.email} />
            </div>
          </div>

          <label>Avatar</label>

          {profileImageUrl !== "" && editProfileImage === false ? (
            <img src={profileImageUrl} />
          ) : (
            <div className="photoUpload">
              <span>
                <i className="fal fa-image" /> <strong>Add Photos</strong>
              </span>
              <input
                type="file"
                className="upload"
                onChange={async (e) => {
                  const imageName =
                    Math.random().toString(36).substring(2, 15) +
                    Math.random().toString(36).substring(2, 15) +
                    ".jpg";

                  const S3Response = await S3Service.uploadImage(
                    e.target.files[0],
                    imageName
                  );
                  if (S3Response) {
                    const updateUserResult = updateUser(props.auth.user.id, {
                      profileImage: S3Response.key,
                    });

                    props.RefreshUser("aed4bdcb-586e-474a-b4d0-dbe3762d57f8");

                    const url = S3Service.ReceiveImageUrlFromBucket(imageName, {
                      resize: {
                        width: 200,
                        height: 200,
                        fit: "contain",
                      },
                    });

                    setEditProfileImage(false);
                    setProfileImageUrl(url);
                  }
                }}
              />
            </div>
          )}
          <button
            onClick={() => {
              setEditProfileImage(true);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileSection);
