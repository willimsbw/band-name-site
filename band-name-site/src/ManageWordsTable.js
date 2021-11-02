import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutline"
import "./ManageWordsTable.css";
import React from 'react';
import axios from "axios";

export default function Table() {
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const [rows, setRows] = React.useState(loadTable);
  const [loading, setLoading] = React.useState(true);

  // Todo: fetches data but doesn't load anything
  async function loadTable() {
    const response = await axios.post(`http://0.0.0.0:5000/getAllWords`);
    const wordMaps = response.data
    const rowList = wordMaps.map(word => {
      return {id: word.id, field: word.word, firstAble: word.first, secondAble: word.second};
    })
    setRows(rowList);
    setLoading(false)
  }

  const handleDelete = React.useCallback(
    (id) => () => {
      console.log("Deleted row with id " + id);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }, 
    [],
  );

  const columns = React.useMemo(
    () => [
    {field: 'word', headerName: 'Word', flex: 0.3, type: 'string', editable: true},
    {field: 'firstAble', headerName: 'Can be first', flex: 0.3, type: 'boolean', editable: true},
    {field: 'secondAble', headerName: 'Can be second', flex: 0.3, type: 'boolean', editable: true},
    {field: 'actions', type: 'actions', flex: .1, getActions: (params) => [
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDelete(params.id)} />
    ]}
  ], [handleDelete]) 

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

  const handleEditRowsModelCommit = React.useCallback((id, e) => {
    console.log("Change to row " + id + " was committed.")
    console.log("Submitted state is " + JSON.stringify(editRowsModel));
  }, [editRowsModel]);

  return (
    <div className="table-holder">
      <div className="table">
        <DataGrid 
          rows={rows} 
          columns={columns} 
          autoHeight 
          components={{
            Toolbar: GridToolbar,
          }}
          editRowsModel={editRowsModel}
          editMode="row"
          onEditRowsModelChange={handleEditRowsModelChange}
          onRowEditCommit={handleEditRowsModelCommit}
        />
      </div>
    </div>
  );
}