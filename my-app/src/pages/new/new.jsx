import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss"

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("")
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="photo of me"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">image : <DriveFolderUploadOutlinedIcon className="icon" /></label>
                <input type="file" id="file" onChange={e => (setFile(e.target.files[0]))} style={{ display: "none" }} />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.lable}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New; 