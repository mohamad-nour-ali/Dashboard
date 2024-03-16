import React from "react";
import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import "./single.scss"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">edit</div>
            <h1 className="title">information</h1>
            <div className="item">
              <img
                className="itemImg"
                src="https://i.pinimg.com/736x/7e/ce/c4/7ecec434137d1fcbe023db38e06c1260.jpg"
                alt="profile image"
              />
              <div className="details">
                <h1 className="itemTitle">eren yeager</h1>
                <div className="detailItem">
                  <span className="itemKey">email :</span>
                  <span className="itemValue">yeager@example.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">phone :</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">adress :</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">country :</span>
                  <span className="itemValue">Shiganshina district of Wall Maria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">right</div>
        </div>
        <div className="bottom">bottom</div>
      </div>
    </div>

  )
}

export default Single; 