import Dispatcher from '../Dispatcher';
import StoreEventBus from '../StoreEventBus';
import * as actionTypes from './actionTypes';
let store = {
  items: [],
  itemsFiltered: []
}

const getState = () => {
  return store;
}

Dispatcher.register(payload => {
  switch (payload.type) {

    case actionTypes.ADD_TODO:
      const { items: itemArray } = store;
      let stateObj = {
        text: payload.value,
        key: Date.now(),
        completed : false
      };

      store.items = [...itemArray,stateObj];
      store.itemsFiltered = [...itemArray,stateObj];
    
    break;

    case actionTypes.REMOVE_TODO:
      let filteredItems =  store.items.filter(item => item.key !== payload.key);

      store.items = filteredItems;
      store.itemsFiltered = filteredItems;
    break;

    case actionTypes.TOGGLE_TODO_ITEM:
        const { items } = store;
        var complete = items.map(item => {
            const { key } = item;
         
           if (key !== payload.key_id) {
              return { ...item };
          } else {
             return { ...item, completed: !item.completed }
          }
         });
    
        store.items = complete;
        store.itemsFiltered = complete;
    break;

    case actionTypes.REMOVE_ALL_ITEM:
      let filteredItemsRemove  = store.items.filter(todo => todo.completed===false);
        
      store.items = filteredItemsRemove;
      store.itemsFiltered = filteredItemsRemove;
    break;

    case actionTypes.ALL_VIEW_ITEM:
            store.itemsFiltered = store.items.slice(0);
    break;

    case actionTypes.ACTIVE_VIEW_ITEM:
      let filteredItemsActive  = store.items.filter((itt) => {
            return itt.completed === false
      });

      store.itemsFiltered = filteredItemsActive;
    break;

    case actionTypes.COMPLETED_VIEW_ITEM:
      let filteredItemsCompleted  = store.items.filter((itt) => {
          return itt.completed === true
        });

      store.itemsFiltered = filteredItemsCompleted;
    break; 

    case actionTypes.EDIT_ITEM:
      const updeatedItems = store.items.map((value) =>{
      if (value.key === payload.key) value.text = payload.textIn;
          return value;
      });
    
      store.items = updeatedItems;  
      store.itemsFiltered = updeatedItems;    
    break; 

    default:
      return false;
  }
  StoreEventBus.dispatch({
    event: 'change'
  });

})

export default getState;
