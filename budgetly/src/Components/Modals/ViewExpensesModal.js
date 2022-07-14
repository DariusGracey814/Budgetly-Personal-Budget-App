import React from "react";
import { Modal, Stack, Button } from "react-bootstrap";

import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../Contexts/budgetContext";
import { currencyFormatter } from "../../Utils/Utils";

function ViewExpensesModal({ budgetID, handlerClose }) {
    const {userBudgets, getBudgetExpenses, deleteBudget, deleteExpense } = useBudgets();

    const expenses = getBudgetExpenses(budgetID);

    const budget = UNCATEGORIZED_BUDGET_ID === budgetID ? { name: 'Uncategorized', id: UNCATEGORIZED_BUDGET_ID} : userBudgets.find((budget) => budget.id === budgetID);

    return (
        <Modal show={budgetID != null} onHide={handlerClose} className="modal-no--scroll">
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap={3}>
                        <div className="viewHeading">Expense - Item</div>

                        {/* BUTTON TO DELETE ENTIRE BUDGET */}
                        {budgetID !== UNCATEGORIZED_BUDGET_ID && (<Button className="view_delete_budget" variant="outline-danger" onClick={() => {
                            deleteBudget(budget);
                            handlerClose();
                        }} >Delete</Button>)}
                    </Stack>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Stack>
                    {expenses.map((expense) => {
                        return <Stack direction="horizontal" gap={3} className="mb-3" key={expense.id}>
                    
                                    <div className="me-4 viewName"><div>{expense.name}</div></div>

                                    {/* PRICE AND BUTTONS */}
                                    <Stack direction="horizontal" gap={3} className="ms-auto">
                                    <div className="viewAmount">{currencyFormatter.format(expense.amount)}</div>
                                    <Button
                                    className="view_delete_expense" 
                                    variant="outline-danger" onClick={() => deleteExpense(expense)}>&times;</Button> 
                                    </Stack> 
                               </Stack>
                    })}
                </Stack>
            </Modal.Body>
        </Modal>
    );
};


export default React.memo(ViewExpensesModal);