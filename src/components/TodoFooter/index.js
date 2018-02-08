import React  from "react";

export default function TodoFooter (props) {        
        return(
               <div className="footer"> 
                    <span className = 'todo_count'>
                        <strong>{props.count}</strong> 
                    </span>
                    <ul className = 'filters'>
                       <li>
                           <a className = 'selected' onClick = { () => props.allViewItems()}>All</a>
                           <span> </span>
                       </li>
                       <li>
                           <a className = 'selected' onClick = { () => props.activeViewItems()}>Active</a>
                           <span> </span>
                       </li>
                       <li>
                           <a className = 'selected'  onClick = { () => props.completedViewItems()}>Completed</a>
                           <span> </span>
                       </li>

                    </ul>
                    <button className = 'clear-completed' onClick = { () => props.clearCompleted()}  > Clear completed </button>
                </div>
        );
 
   // }      

};    