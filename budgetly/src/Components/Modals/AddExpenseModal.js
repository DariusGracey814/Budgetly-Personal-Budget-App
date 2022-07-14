import React, { useRef } from 'react'
import { Modal, Button, Form} from 'react-bootstrap';

import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../../Contexts/budgetContext';

function AddExpenseModal({ show, handlerClose, defaultBudgetID}) {
        const description = useRef();
        const amount = useRef();
        const category = useRef();

        const { userBudgets, addExpense } = useBudgets();


        const submitHandler = (evt) => {
            evt.preventDefault();

            console.log('submitted');

            addExpense({
                name: description.current.value,
                amount: parseFloat(amount.current.value),
                budgetID: category.current.value
            });

            //  CLOSE ADD BUDGET MODAL WHEN FORM IS SUBMITTED
            handlerClose();
        };


        return (
            //ADD BUDGET MODAL
            <Modal show={show} onHide={handlerClose}>
                <Modal.Header>
                    <div className='d-flex between'>
                        <Modal.Title>Add New Expense</Modal.Title>
                        <Button variant="primary" onClick={() => handlerClose(false)}>&#10006;</Button>
                    </div>
                        
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label for="exname">Expense Name</Form.Label>
                            <Form.Control type="text" name="budgetName" id="name" ref={description} />
                        </Form.Group>

                        <Form.Group className='mt-3'>
                            <Form.Label for="amount">Expense Amount</Form.Label>
                            <Form.Control type="number" name="amount" id="amount" min={0} step={0.01} ref={amount} />
                        </Form.Group>

                        <Form.Group className="mt-4">
                        <Form.Label for="amount">Expense Category</Form.Label>
                            <Form.Select defaultValue={UNCATEGORIZED_BUDGET_ID} ref={category}>
                                {/* DEFAULT SELECT OPTION */}
                                {<option key={UNCATEGORIZED_BUDGET_ID}>{UNCATEGORIZED_BUDGET_ID}</option>}
                                
                                {/* CREATE SELECT OPTIONS BASED ON BUDGET NAMES */}
                                {userBudgets.map((budget) => {
                                    return <option key={budget.id} value={budget.id}>{budget.name}</option>
                                })}

                            </Form.Select>
                        </Form.Group>


                        <div className="d-flex justify-content-end mt-4">
                            <Button type='submit' variant="primary">Add</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        );
}

export default React.memo(AddExpenseModal);