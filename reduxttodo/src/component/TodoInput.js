import React, { useState } from 'react';
import { addTodo ,openmodal,closemodal} from '../redux/action';
import { v1 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function TodoInput() {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  let modal = useSelector(state =>  state.modaltask );
console.log("modal",modal);

  
  return (
    <div>
      <div
        className="row m-2 control-form"
        style={{ justifyContent: 'center' }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="m-2"
          placeholder="Enter name"
        />

        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: v1(),
                name: name,
              })
            );
            setName('');
          }}
          className="btn btn-dark m-2"
        >
          Add
        </button>
      </div>
      <br />
      <br />
      <Button variant="primary" onClick={()=>{dispatch( openmodal(true))}}>
    Launch demo modal</Button>

      <Modal show={modal}  onHide={()=>{dispatch( openmodal(false))}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{dispatch( openmodal(false))}}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  
    </div>
  );
}

export default TodoInput;
