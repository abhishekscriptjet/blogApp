import React, { useContext, useEffect } from "react";
import context from "../contextAPI/context";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const contextBlog = useContext(context);
  const { loadBlog, userBlog, user, getUserDetails, userDetails } = contextBlog;

  useEffect(() => {
    if (localStorage.getItem("blogToken")) {
      loadBlog();
      getUserDetails();
    } else {
      navigate("./login");
    }
    //eslint-disable-next-line
  }, []);

  const capitaliz = (string) => {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
  };

  const handleEditProfile = () => {
    navigate("../userdetails");
  };

  return (
    <div>
      <section className="h-100 gradient-custom-2 w-100" style={{}}>
        <div className=" py-0 h-100 w-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-12 col-xl-12">
              <div className="card border-0">
                <div
                  className="rounded-top text-white d-flex"
                  style={{ backgroundColor: "rgb(60 60 60)", height: "200px" }}
                >
                  <div
                    className="ms-4 ms-sm-5 mt-3  mt-sm-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder"
                      className="img-fluid img-thumbnail mt-2 mt-sm-4 mb-2"
                      style={{ width: "150px", zIndex: " 1" }}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary  btn-outline-light"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1" }}
                      onClick={handleEditProfile}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: "110px" }}>
                    <h5>{user.name}</h5>
                    <p className="">
                      {userDetails.length > 0
                        ? `${capitaliz(userDetails[0].city)}, ${capitaliz(
                            userDetails[0].state
                          )}, ${capitaliz(userDetails[0].country)}.`
                        : ""}
                    </p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "rgb(229 230 231)" }}
                >
                  <div className="d-flex justify-content-end justify-content-sm-end flex-column flex-sm-row text-center py-0 px-5 ">
                    <div className="text-center  mx-3 mx-sm-4 mx-md-2 mx-lg-5 px-sm-1 px-md-5 px-lg-5 my-1 my-sm-0">
                      <p className="mb-1 h5">
                        {userBlog.length > 0 ? userBlog.length : 0}
                      </p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    <div className="text-center  mx-5 mx-sm-4 mx-md-2 mx-lg-5 px-sm-0 px-md-5 px-lg-5 my-1 my-sm-0">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div className="text-center  mx-3 mx-sm-4 mx-md-2 mx-lg-5 px-sm-1 px-md-5 px-lg-5 my-1 my-sm-0">
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card-body p-5 text-black"
                  style={{ backgroundColor: "#f7f7f7" }}
                >
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div
                      className="p-4"
                      style={{ backgroundColor: "rgb(229 230 231)" }}
                    >
                      <p className="font-italic mb-1">
                        {userDetails.length > 0
                          ? userDetails[0].profession
                          : ""}
                      </p>
                      <p className="font-italic mb-1">
                        Lives in{" "}
                        {userDetails.length > 0
                          ? capitaliz(userDetails[0].country)
                          : ""}
                      </p>
                      <p className="font-italic mb-0">
                        <strong>Gender </strong>
                        {userDetails.length > 0
                          ? capitaliz(userDetails[0].gender)
                          : ""}
                      </p>
                      <p className="font-italic mb-0">
                        <strong>Birth Date </strong>
                        {userDetails.length > 0
                          ? capitaliz(userDetails[0].dateOfBirth)
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        {userBlog.length > 0 ? "Show all" : ""}
                      </a>
                    </p>
                  </div>
                  <hr />
                  <div className="row g-2">
                    {userBlog.length > 0 ? (
                      userBlog.map((blog) => {
                        return (
                          <div
                            className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 mb-2"
                            key={blog._id}
                          >
                            <img
                              src={blog.src}
                              style={{ height: "13rem" }}
                              alt="1"
                              className="w-100 rounded-3"
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="fs-2 text-center text-muted">
                        Create new Blog...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
