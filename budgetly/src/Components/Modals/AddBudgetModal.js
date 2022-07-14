import React, { useRef } from 'react'
import { Modal, Button, Form} from 'react-bootstrap';
import { useBudgets } from '../../Contexts/budgetContext';


function AddBudgetModal({ show, handlerClose, defaultBudgetID }) {
        const description = useRef();
        const amount = useRef();
        const category = useRef();

        const { addBudgets } = useBudgets();

        const submitHandler = (evt) => {
            evt.preventDefault();

            //  ADD BUDGET
            addBudgets(
                {
                    name: description.current.value,
                    max: parseFloat(amount.current.value)
                }
            );

            console.log('Submitted');

            //  CLOSE ADD BUDGET MODAL WHEN FORM IS SUBMITTED
            handlerClose();
        };


        return (
            //ADD BUDGET MODAL
            <Modal show={show} onHide={handlerClose}>
                <Modal.Header>
                    <div className='d-flex between'>
                        <Modal.Title>Add New Budget</Modal.Title>
                        <Button variant="primary" onClick={() => handlerClose(false)}>&#10006;</Button>
                    </div>
                        
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label for="name">Budget Name</Form.Label>
                            <Form.Control type="text" name="budgetName" id="name" ref={description} />
                        </Form.Group>

                        <Form.Group className="mt-3 . -
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ">
                            <Form.Label for="amount">Budget Maximum Amount</Form.Label>
                            <Form.Control type="number" name="amount" id="amount" min={0} step={0.01} ref={amount} />
                        </Form.Group>

                        <div className="d-flex justify-content-end mt-4">
                            <Button type='submit' variant="primary">Add</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        );
}

export default AddBudgetModal;