import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux' ;
import { add } from './Todo';


function AddTask() {
    const Dispatch=useDispatch('')
    const [input,setInput]=useState('')
    const handelAdd = () => {
        Dispatch (add(input))

    }
    // 

    //
  return (
    <div className='container'>
    <Form>
      

      <Form.Group  >
        <Form.Label>add your new todo here </Form.Label>
        <Form.Control type="text" placeholder=""  onChange={(e)=>setInput(e.target.value)} />
      </Form.Group>
     
      <Button className="mb-3" variant="primary" type="submit" onClick={handelAdd}>
        add todo
      </Button>
    </Form>
    </div>
  );
}

export default AddTask ;