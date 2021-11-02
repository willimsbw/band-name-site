import React from 'react';
import ManageWordsTable from "./ManageWordsTable";
import AddWordsForm from './AddWordsForm';

const words = [
    {id: 1, word: "Test1", firstAble: false, secondAble: true},
    {id: 2, word: "Test2", firstAble: false, secondAble: true},
    {id: 3, word: "Test3", firstAble: false, secondAble: true},
    {id: 4, word: "Test4", firstAble: false, secondAble: true},
    {id: 5, word: "Test5", firstAble: true, secondAble: true},
];

class ManageWordsPage extends React.Component {

    render() { 
        return (
            <div className="manage-words-page"> 
                <AddWordsForm />
                <ManageWordsTable words={words} />
            </div>
        );
    }
}
 
export default ManageWordsPage;