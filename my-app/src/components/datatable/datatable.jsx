import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource"
import "./datatable.scss"



const DataTable = () => {
  const actionColumn = {
    field: "action",
    headerName: "ACTION",
    width: 230,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">view</div>
          <div className=" ">delete</div>
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