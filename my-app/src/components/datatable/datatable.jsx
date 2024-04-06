import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource"
import { Link } from "react-router-dom"
import "./datatable.scss"



const DataTable = () => {
  const [data, setData] = useState(userRows)

  const handleDelet = (id)=> {
    setData(data.filter((item)=> item.id !== id))
  }
  const actionColumn = {
    field: "action",
    headerName: "ACTION",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration: "none"}}>
            <div className="viewButton">view</div>
          </Link>
          <div className="deleteButton" onClick={()=>handleDelet(params.row.id)}>delete</div>
        </div>
      )
    }
  }
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable