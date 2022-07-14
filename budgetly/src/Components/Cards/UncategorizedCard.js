import React from 'react'

import BudgetCard from './BudgetCard';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../Contexts/budgetContext';

function UncategorizedCard(props) {
    // GET TOTAL AMOUNT OF UNCATEGORIZED BUDGETS
    const { getBudgetExpenses } = useBudgets();

    const amount = getBudgetExpenses((UNCATEGORIZED_BUDGET_ID)).reduce((acc, value) => acc + value.amount, 0);

    // IF AMOUNT EQUALS 0 RETURN NULL
    if (amount === 0) return null;

    return (
        <div>   
            <BudgetCard name="Uncategorized" amount={amount} gray {...props} />
        </div>
    );
};

export default UncategorizedCard;