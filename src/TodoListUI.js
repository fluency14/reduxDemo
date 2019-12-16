import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List} from 'antd'


const TodoListUI = (props) => {
  return ( 
    <div>
      <div style={{margin: '10px',width:'500px'}}>
        <Input
          placeholder = '请输入待办事项'
          style={{width:'270px'}}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button
          type="primary"
          style={{float:'right'}}
          onClick={props.addItem}
        >添加</Button>
        <List
          bordered
          style={{marginTop:'10px'}}
          dataSource={props.list}
          renderItem={(item,index) => (
            <List.Item
              onClick={()=>{props.deleteItem(index)}}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
 
export default TodoListUI;