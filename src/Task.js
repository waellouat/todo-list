import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch} from 'react-redux' ;
import {delet,edittodo,togueltodo} from './reducer/Todo' ;
function Task({todo}) {
    const Dispatch=useDispatch('')
    const handeldelet = (id) => {
        Dispatch (delet(id))
    }
        const handeledit = (id) => {
            Dispatch (edittodo(id))
        }
        const handeltogueltodo = (id) => {
            Dispatch (togueltodo(id))
        }
  return (
    
    <>
       <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Text  onClick={()=> handeltogueltodo(todo.id)  } Checkbox = {todo.isDone} >{todo.descreption}</Form.Text>
        
      
        <Button  variant="outline-secondary" onClick={()=> handeldelet(todo.id) } >delete</Button>
        <Button variant="outline-secondary" onClick={()=> handeledit (todo.id)} >renome </Button>
        <button onClick={()=>handeltogueltodo(todo.id)}>{ todo.isDone ? "not yet":"done" } </button>
      </InputGroup>
      
       
      
    </>
  );
}

export default Task ;