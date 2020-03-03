import React from "react";
import "./profile-module.css"

const Profile = props => (
  <h1>Soy el perfil y tal :3, {props.loggedInUser.username}</h1>
);

export default Profile;
