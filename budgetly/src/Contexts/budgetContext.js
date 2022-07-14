import React, { createContext, useState, useContext } from "react";

// CUSTOM ID LIBRARY
import { v4 as createID } from "uuid";
// CUSTOM LOCAL STORAGE HOOK
import useLocalStorage from "../Hooks/useLocalStorage";

const BudgetContext = createContext({});

export function useBudgets() {
    return useContext(BudgetContext);
}

// default budget ID
export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized';

export const BudgetsProvider = ({ children }) => {
    const [userBudgets, setUserBudgets] = useLocalStorage("userBudgets", []);
    const [userExpenses, setUserExpenses] = useLocalStorage("userExpenses", []);

    // GET BUDGETS AND EXPENSES MATCH BUDGET ID (FILTER)
    function getBudgetExpenses(budgetID) {
        return userExpenses.filter((expense) => expense.budgetID === budgetID);
    }

    // ADD BUDGETS AND EXPENSES
    function addBudgets({ name, max }) {
        setUserBudgets((prevBudgets) => {
            // IF USER CREATED BUDGET THAT EXISTS ALREADY RETURN IT
            if (prevBudgets.find((budget) => budget.name === name)) {
                return prevBudgets;
            }
            // RETURN ARRAY WITH NEW BUDGET AND PREVIOUS BUDGETS
            return [{id: createID(), name, max}, ...prevBudgets];
        });
    };


    function addExpense ({ name, amount, budgetID}) {
        // RETURN NEW AND EXISTING EXPENSES
        setUserExpenses((prevExpenses) => {
            return [{id: createID(), name, amount, budgetID}, ...prevExpenses];
        });
    };


    // DELETE BUDGETS AND EXPENSES (FILTER)
    function deleteBudget({ id }){
        setUserExpenses((prevExpenses) => {
            return prevExpenses.map((expense) => {
                if (expense.budgetID !== id) return expense;
                return {...expense, budgetID: UNCATEGORIZED_BUDGET_ID}
            })
        })


        setUserBudgets((prevBudgets) => {
            return prevBudgets.filter((budget) => budget.id !== id);
        })
    }

    function deleteExpense({ id }) {
        setUserExpenses((prevExpenses) => {
            return prevExpenses.filter((expense) => expense.id !== id);
        })
    }

    return <BudgetContext.Provider value={{ userBudgets, userExpenses, addBudgets, addExpense, deleteBudget, deleteExpense, getBudgetExpenses}}>{children}</BudgetContext.Provider>
}


