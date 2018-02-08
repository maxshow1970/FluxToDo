import React, { Component } from "react";
import TodoList from "../TodoList";
import "./style.css";
import TodoForm from "../TodoForm";
import TodoHeader from "../TodoHeader";
import TodoFooter from "../TodoFooter";
import StoreEventBus from '../../modules/StoreEventBus';
import Dispatcher from '../../modules/Dispatcher';
import getTodoState from '../../modules/todo/store';
import {
  addItem,
  deleteItem,
  completedTask,
  clearCompleted,
  allViewItems,
  activeViewItems,
  completedViewItems,
  editItem

 } from '../../modules/todo/actions';

export default class TodoApp extends Component {
    constructor(props, context) {
        super(props);
    }

    state = getTodoState();
    
    componentDidMount() {
        StoreEventBus.register(payload => {
          if (payload.event) {
            this.setState(getTodoState());
          }
        })
      }


     render() {
        const ToDoListProps = {
            entries: this.state.itemsFiltered,
            state : this.state.items,
            deleteItem : deleteItem,
            completedTask : completedTask, 
            editItem : editItem
        }

        const TodoFooterProps = {
            clearCompleted : clearCompleted,
            allViewItems : allViewItems,
            activeViewItems : activeViewItems,
            completedViewItems : completedViewItems,
            count :  this.state.items.length  
        }

        const TodoFormProps = {
            textInput : this.state.items.text,
            addItem : addItem

        }

        return (
            <div className="todoListMain">
                 <TodoHeader />
                
               <div className="main">  
                    <TodoForm
                      {...TodoFormProps}
                    /> 
                </div>
                <TodoList
                    { ...ToDoListProps }
                />
                <TodoFooter 
                  { ...TodoFooterProps }
                /> 
                
            </div>
        );
    }
}
