import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  console.log(auth);
  // const {isStaff} = useSelector((state) => state.isStaff);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //functin for logout
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <nav className=" navbar navbar-expand bg-light">
      <div className="container-fluid">
        <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          {auth !== null && (
            <ul className="nav">
              {!auth.user.isTeacher && (
                <li className="nav-item">
                <Link className="nav-link active" to="/student-profile">
                  Student Profile
                </Link>
              </li>
              )}
            </ul>
          )}

          {auth !== null && (
            <ul className="nav">
              {auth.user.isTeacher && (
                <li className="nav-item">
                  <Link className="nav-link active" to={`/update-teacher/${auth.user._id}`}>
                    My Account
                  </Link>
                </li>
              )}
            </ul>
          )}
          {auth !== null && (
            <ul className="nav">
              {auth.user.isTeacher && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/teacher-page">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          )}
        </ul>

        {auth !== null && (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link pointer active" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        )}

        {auth === null && (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
