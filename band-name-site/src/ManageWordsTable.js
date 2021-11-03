import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutline"
import "./ManageWordsTable.css";
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function Table(props) {

  const columns = React.useMemo(
    () => [
    {field: 'word', headerName: 'Word', flex: 0.3, type: 'string', editable: true},
    {field: 'firstAble', headerName: 'Can be first', flex: 0.3, type: 'boolean', editable: true},
    {field: 'secondAble', headerName: 'Can be second', flex: 0.3, type: 'boolean', editable: true},
    {field: 'actions', type: 'actions', flex: .1, getActions: (params) => [
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={props.onDelete(params.id)} />
    ]}
  ], [props]) 



  let body = null;
  if(props.rows === null) {
    body = <CircularProgress />;
  } else {
    body = (
      <DataGrid 
        rows={props.rows} 
        columns={columns}
        autoHeight
        components={{
          Toolbar: GridToolbar,
        }}
        editRowsModel={props.editRowsModel}
        editMode="row"
        onEditRowsModelChange={props.onChange}
        onRowEditCommit={props.onChangeSubmit}
      />
    );
  }

  return (
    <div className="table-holder">
      <div className="table">
        {body}
      </div>
    </div>
  );
}