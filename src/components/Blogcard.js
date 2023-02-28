import React, { useState,useContext } from "react";
import context  from "../contextAPI/context";
import UserIcon from "../sources/user.png";

export default function Blogcard(props) {
  const { topic, description, src, _id } = props.blog;
  const alertContext = useContext(context)
  const {deleteEndPoint} = alertContext
  
  const { name } = props.user;
  const [like, setLike] = useState("regular");
  const [dislike, setDisLike] = useState("fa-heart");
  const [clickLike, setClickLike] = useState(0);
  const [clickDisLike, setClickDisLike] = useState(0);

  const handleLike = () => {
    if (clickLike === 1) {
      setLike("regular");
      setClickLike(0);
    } else if (clickLike === 0 && clickDisLike === 0) {
      setLike("solid");
      setDisLike("fa-heart");
      setClickDisLike(0);
      setClickLike(1);
    } else {
      setLike("solid");
      setDisLike("fa-heart");
      setClickLike(1);
      setClickDisLike(0);
    }
  };
  const handleDisLike = () => {
    if (clickDisLike === 1) {
      setDisLike("fa-heart");
      setClickDisLike(0);
    } else if (clickLike === 0 && clickDisLike === 0) {
      setDisLike("fa-heart-crack");
      setClickDisLike(1);
      setLike("regular");
      setClickLike(0);
    } else {
      setDisLike("fa-heart-crack");
      setClickDisLike(1);
      setLike("regular");
      setClickLike(0);
    }
  };

  const handleDelete = async () => {
    deleteEndPoint(_id)
  };

  const handleEdit = async()=>{
    props.handleEditClick(props.blog)
    console.log("edit")
  }

  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="d-flex justify-content-left align-items-center mx-3 my-1">
        <img src={UserIcon} className="" alt="" width="25" />
        <p className="text-muted p-2 m-0">{name}</p>
        <div className="drodown ms-auto">
          <i
            className="fa-solid fa-ellipsis p-2 btn "
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button
                className="dropdown-item fw-bold fs-6 text-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item fw-bold fs-6 text-success" onClick={handleEdit}>
                Edit
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-body p-0">
        <img
          src={src}
          className="card-img-top"
          alt="..."
          style={{ width: "inharite", height: "20rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{topic}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="mx-2 d-flex justify-content-left align-items-center ">
          <div className=" p-2">
            <i
              className={`fa-${like} fa-heart text-danger fs-3`}
              onClick={handleLike}
            ></i>
            <label className="fw-bold mx-2 ">0{clickLike}</label>
          </div>
          <div className=" mx-2">
            <i
              className={`fa-solid ${dislike} fs-3 text-black`}
              onClick={handleDisLike}
            ></i>
            <label className="fw-bold mx-2">0{clickDisLike}</label>
          </div>
        </div>
        <hr className="my-0 mx-3" />
        <div className="mx-2">
          <div className="input-group input-group-sm mb-3 mt-3 mx-2">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Comment
            </span>
            <input
              type="text"
              className="form-control w-25"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <i className="fa-regular fa-paper-plane fs-4 text-muted mx-2 p-2 my-auto  "></i>
          </div>
        </div>
        {/* {!comment
          ? ""
          : comment.map(() => {
              return <div>
                <input type="text" disabled/>
              </div>;
            })} */}
      </div>
    </div>
  );
}
