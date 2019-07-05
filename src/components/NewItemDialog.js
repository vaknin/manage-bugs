import React, {Component} from 'react';

export class NewItemDialog extends Component {

    // Store form data here
    state = {};
    
    createInput = (type, name, display, placeholder, required) => {
        
        return (
            <div className="form-group">
              <label htmlFor={name} className="col-form-label">{display}</label>
              <input type={type} className="form-control" id={name} onInput={e => this.setState({ [name]: e.target.value })} placeholder={placeholder} required={required}/>
          </div>
        );
    }

    clearState = () => {
        this.setState({
            title: undefined,
            description: undefined,
            supplier: undefined,
            client: undefined,
            tfs: undefined,
            ticket: undefined,
        });
    }
    
    render() {
        
        return (
            <div>
                  <div>
                    <div className="modal fade" id="newItemDialog" tabIndex="-1" role="dialog" aria-labelledby="newItemDialogLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">

                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h5 className="modal-title" id="newItemDialogLabel">New Item</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                {/* Modal Body */}
                                <div className="modal-body">
                                    <form id="newItemForm" 
                                        onSubmit={e => {
                                        this.props.newItem(e, this.state); // Create the item
                                        this.clearState(); // Clear the state
                                    }}>

                                        {/* Inputs */}
                                        {this.createInput('text', 'title', 'Title', 'A descriptive title for the bug', /*true*/null)}
                                        {this.createInput('text', 'description', 'Description', 'A short description of the bug', null)}
                                        {this.createInput('text', 'supplier', 'Supplier', 'The supplier causing the bug or affected by it', /*true*/null)}
                                        {this.createInput('text', 'client', 'Impcated Client', 'Who is suffering from this bug?', null)}
                                        {this.createInput('number', 'tfs', 'TFS #', 'The TFS number, e.g. 23580', /*true*/null)}
                                        {this.createInput('number', 'ticket', 'Ticket #', 'The Ticket\'s number, if exists, e.g. 23580', null)}
                                        
                                        {/* Buttons */}
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary">Add Item</button>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        </div>

                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        )
    }
}

export default NewItemDialog;