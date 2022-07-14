import React from 'react'

import BudgetCard from './BudgetCard';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../Contexts/budgetContext';

function TotalBudgetCard(props) {
    // GET TOTAL AMOUNT OF UNCATEGORIZED BUDGETS
    const { userBudgets, userExpenses } = useBudgets();

    const amount = userExpenses.reduce((acc, value) => acc + value.amount, 0);

    const max = userBudgets.reduce((acc, value) => acc + value.max, 0);

    // IF AMOUNT EQUALS 0 RETURN NULL
    if (max === 0) return null;

    return (
        <div>   
            <BudgetCard name="Total" amount={amount} gray {...props} max={max} hideButtons />
        </div>
    );
};

export default TotalBudgetCard;