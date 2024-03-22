import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store'; import React from "react";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom"
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>dashboard</span>
          </li>
          <p className="title">lists</p>
          <li>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <PersonIcon className='icon' />
              <span>users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <StoreIcon className='icon' />
              <span>products</span>
            </Link>
          </li>
          <li>
            <CreditCardIcon className='icon' />
            <span>orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>delivery</span>
          </li>
          <p className="title">useful</p>
          <li>
            <InsertChartIcon className='icon' />
            <span>stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>notification</span>
          </li>
          <p className="title">service</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>system health</span>
          </li>
          <li>
            <PsychologyAltOutlinedIcon className='icon' />
            <span>logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon' />
            <span>setting</span>
          </li>
          <p className="title">user</p>
          <li>
            <PersonSearchIcon className='icon' />
            <span>profile</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar