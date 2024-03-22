import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource"
import { Link } from "react-router-dom"
import "./datatable.scss"



const DataTable = () => {
  const actionColumn = {
    field: "action",
    headerName: "ACTION",
    width: 230,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration: "none"}}>
            <div className="viewButton">view</div>
          </Link>
          <div className="deleteButton">delete</div>
        </div>
      )
    }
  }
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable