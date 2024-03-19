import React from "react";
import "./home.scss"
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/widget"
import Featured from "../../components/featured/featured";
import Chart from "../../components/chart/chart";
import Table from "../../components/table/table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect= {2 / 1}  title="last 6 months (revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">latest transaction</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home 

