import React, { useState, useEffect } from "react";
import PostService from "../services/PostService";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Alert } from "bootstrap";
import Alert from "antd/es/alert/Alert";

const Home = () => {
  const [privatePosts, setPrivatePosts] = useState([]);
  // console.log(privatePosts);
  const user = AuthService.getCurrentUser();
  const logOut = () => {
    AuthService.logout();
  };

  const navigate = useNavigate();

  useEffect(() => {
    PostService.getAllPrivatePosts().then(
      (response) => {
        // console.log(response.data);
        setPrivatePosts(response.data.protectedpage);
      },
      async (error) => {
        // Invalid token
        if (error.response == null) {
          //refresh token
          if (user != null) {
            await AuthService.loginWithRefreshToken(user.refreshToken).then(
              () => {
                // navigate("/private");
              },
              () => {
                AuthService.logout();
                navigate("/");

              }
            );
          } else {
            AuthService.logout();
            navigate("/");

          }
        }
      }
    );
  }, [user, navigate]);

  return (
    <div>

      <div className="bg-primary">sucesss</div>

      
        {/* {privatePosts} */}
        {privatePosts.map((value, index) => (
          <ul key={index}>
           <li>{privatePosts}</li>
          </ul>
        ))};
      



      <div className="d-grid gap-2 mt-3">
        <Link to="/" onClick={logOut}>

          <button type="submit" className="btn btn-primary">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;