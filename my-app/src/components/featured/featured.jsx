import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./featured.scss"

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> total revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredCart">
          <CircularProgressbar value={65} text="65%" strokeWidth={5} />
        </div>
        <p className="title">total sales made today</p>
        <p className="amount">470</p>
        <p className="description"> previous transaction last payments may not be included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon  fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured