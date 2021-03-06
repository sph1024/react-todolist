import React, { Component } from 'react';
import './TodoList.css'
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }

  handleDelete(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }

  getTodoItems(){
    return (
      this.state.list.map((item,index)=>{
        return (
          <TodoItem
          delete={this.handleDelete} 
          key={index} 
          content={item} 
          index={index}
          />
        )
      })
    )
  }

  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递的参数
  render() {
    // jsx 语法
    return (
      <div className="TodoList" >
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          { this.getTodoItems() }
          {/* {
            this.state.list.map((item,index)=>{      
              return (
                <TodoItem
                delete={this.handleDelete} 
                key={index} 
                content={item} 
                index={index}
                />
              )
              // return <TodoItem delete={this.handleDelete} key={index} content={item} index={index}/>
              // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
            })
          } */}
        </ul>
      </div>     
    );
  }
}

export default TodoList;
