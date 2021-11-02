import React from 'react';
import ManageWordsTable from "./ManageWordsTable";
import AddWordsForm from './AddWordsForm';

class ManageWordsPage extends React.Component {

    render() { 
        return (
            <div className="manage-words-page"> 
                <AddWordsForm />
                <ManageWordsTable />
            </div>
        );
    }
}
 
export default ManageWordsPage;