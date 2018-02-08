import React, { Component } from "react";
import TodoTextInput from "../TodoTextInput";
import "./style.css";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            textInputEdit : '',
            keyInputEdit : 0
          }
          
        this.createTasks = this.createTasks.bind(this);
    }

    handleLabelDoubleClick = (text, key ) => {
        
        this.setState({
          isEditing: true,
          textInputEdit : text,
          keyInputEdit : key
        });
      }

    handleInputCancel = () => {
        this.setState({
          isEditing: false
        });
    }

    handleInputDelete = () => {
        this.setState({
          isEditing: false
        });
      }

    handleInputSave = (text) => {
        if (text !=='') { 
         this.props.editItem(text, this.state.keyInputEdit);

         this.setState({
          isEditing: false
         });
      }
    }

    makeInput(item) {
   
        if (this.state.isEditing && item.key === this.state.keyInputEdit ){

          return (
          
          <TodoTextInput className="edit"
              saveOnBlur={true}
              placeholder={this.state.textInputEdit}
              initialValue={this.state.textInputEdit}
              onSave={this.handleInputSave}
              onCancel={this.handleInputCancel}
              onDelete={this.handleInputDelete} 
           />
          );
        }
        return null;
      }
    
    createTasks(item) {
      return (
        <li className = 'completed' key={ item.key } >    
              <div className = 'view' >
                  <input className = 'toggle' 
                      checked = { item.completed }   
                      onChange={ () => this.props.completedTask(item.key)}  
                      type = 'checkbox' />
                  <label  onDoubleClick={() => this.handleLabelDoubleClick(item.text, item.key)}> {item.text} </label> 
                  <button className = "destroy" onClick={() => this.delete(item.key)} > X </button>  
              </div>  
              {this.makeInput(item)}
        </li>
      );
    };

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
        return ( <ul className = "theList" >
                    { listItems }
                </ul>
        );
    }
};