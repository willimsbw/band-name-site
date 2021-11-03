import React, { useEffect }from 'react';
import ManageWordsTable from "./ManageWordsTable";
import AddWordsForm from './AddWordsForm';
import axios from "axios";


export default function ManageWordsPage() {
    const [rows, setRows] = React.useState(null);
    const [editRowsModel, setEditRowsModel] = React.useState({});
    const [submitting, setSubmitting] = React.useState(false);
    const [newWord, setNewWord] = React.useState("");
    const [newFirst, setNewFirst] = React.useState(true);
    const [newSecond, setNewSecond] = React.useState(true);
    const [wordFieldError, setWordFieldError] = React.useState(false);
    const [wordFieldHelperText, setWordFieldHelperText] = React.useState("");

    async function loadTableRows() {
        const response = await axios.post(`http://0.0.0.0:5000/getAllWords`);
        const wordMaps = response.data;
        const rowList = [];
        Object.entries(wordMaps).forEach((entry) => {
            const [key, wordObject] = entry;
            rowList.push({id: wordObject["id"], word: wordObject["word"], firstAble: wordObject["first"], secondAble: wordObject["second"]});
        });
        setRows(rowList);
    }

    useEffect(() => {
        loadTableRows();
      }, []);    

    const handleDelete = React.useCallback(
    (id) => () => {
        axios.post(`http://0.0.0.0:5000/removeWord`, {
                id: id
            }).then((response) => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            }).catch(e => {
                alert("Failed to delete word.")
            })
    }, []);   
    
    const handleEditRowsModelChange = React.useCallback((model) => {
        setEditRowsModel(model);
    }, []);

    const handleEditRowsModelCommit = React.useCallback((id, e) => {        
        axios.post(`http://0.0.0.0:5000/updateWord`, {
            id: id,
            word: editRowsModel[id]["word"]["value"],
            first: editRowsModel[id]["firstAble"]["value"],
            second: editRowsModel[id]["secondAble"]["value"]
        }).catch(e => {
            alert("Failed to edit word.")
        })
    }, [editRowsModel]);

    const handleWordFieldChange = React.useCallback((e) => {
        setNewWord(e.target.value);
    }, []);

    const handleFirstFieldChange = React.useCallback((e) => {
        setNewFirst(e.target.checked);
    }, []);

    const handleSecondFieldChange = React.useCallback((e) => {
        setNewSecond(e.target.checked);
    }, []);

    const handleFormSubmit = (e) => {       
        e.preventDefault();
        setSubmitting(true);

        if(newWord === "") {
            setWordFieldError(true);
            setWordFieldHelperText("This field is required");
            setSubmitting(false);
        } else {
            axios.post(`http://0.0.0.0:5000/addWord`, {
                word: newWord,
                first: newFirst,
                second: newSecond
            }).then((response) => {
                setSubmitting(false);
        
                const addedWord = response.data;
                const newRow = {
                    id: addedWord["addedId"], 
                    word: addedWord["addedWord"], 
                    firstAble: addedWord["addedFirst"], 
                    secondAble: addedWord["addedSecond"] 
                };
                let newRows = [...rows];
                newRows.push(newRow);
                setRows(newRows);
                setNewWord("");
                setNewFirst(true);
                setNewSecond(true);
                setWordFieldError(false);
                setWordFieldHelperText(true);
            }).catch(e =>{
                setSubmitting(false);
                alert("Failed to submit word.")
            });
        }
    }


    return (
        <div className="manage-words-page"> 
            <AddWordsForm 
                word={newWord}
                first={newFirst}
                second={newSecond}
                submitting={submitting}
                onWordChange={handleWordFieldChange}
                onFirstchange={handleFirstFieldChange}
                onSecondChange={handleSecondFieldChange}
                onSubmit={handleFormSubmit}
                wordFieldError={wordFieldError}
                wordFieldHelperText={wordFieldHelperText}
            />
            <ManageWordsTable 
                rows={rows} 
                onDelete={handleDelete} 
                editRolesModel={editRowsModel} 
                onChange={handleEditRowsModelChange} 
                onChangeSubmit={handleEditRowsModelCommit}
            />
        </div>
    );
}
 