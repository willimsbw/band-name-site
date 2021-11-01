import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutline"
import "./ManageWordsTable.css";
import React from 'react';

const gridRowsProp = [
  {id: 1, word: "Test1", firstAble: false, secondAble: true, categories: "metal, indie"},
  {id: 2, word: "Test2", firstAble: false, secondAble: true, categories: "metal, indie"},
  {id: 3, word: "Test3", firstAble: false, secondAble: true, categories: "metal, indie"},
  {id: 4, word: "Test4", firstAble: false, secondAble: true, categories: "metal, indie"},
  {id: 5, word: "Test5", firstAble: true, secondAble: true, categories: "metal, indie"},
]

export default function Table() {
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const [rows, setRows] = React.useState(gridRowsProp)


  const handleDelete = React.useCallback(
    (id) => () => {
      console.log("Deleted row with id " + id);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }, 
    [],
  );

  const columns = React.useMemo(
    () => [
    {field: 'word', headerName: 'Word', flex: 0.2, type: 'string', editable: true},
    {field: 'categories', headerName: 'Categories', flex: 0.4, type: 'string', editable: true},
    {field: 'firstAble', headerName: 'Can be first', flex: 0.2, type: 'boolean', editable: true},
    {field: 'secondAble', headerName: 'Can be second', flex: 0.2, type: 'boolean', editable: true},
    {field: 'actions', type: 'actions', width: 80, getActions: (params) => [
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