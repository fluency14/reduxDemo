import React, { Component } from 'react'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange)
  }
  componentDidMount(){
    const action = getTodoList();
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
  changeInputValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action);
  }
  addItem(){
    const action = addItemAction()
    store.dispatch(action);
  }
  deleteItem(index){
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return(
      <TodoListUI
        changeInputValue = {this.changeInputValue}
        inputValue = { this.state.inputValue }
        addItem = {this.addItem}
        list = {this.state.list}
        deleteItem = {this.deleteItem}
      />
    )
  }
}

export default TodoList;