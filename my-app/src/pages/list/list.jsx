import React from "react";
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import DataTable from "../../components/datatable/datatable"
import "./list.scss"
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="titleNewUser">
          add new user
          <Link to="/users/new" style={{textDecoration: "none"}}>
            new user
          </Link>
        </div>
        <DataTable />
      </div>
    </div>
  )
}

export default List 