import React, { Fragment, useState } from "react";

import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "./Contexts/budgetContext";
import Header from "./Components/Header/Header";
import Card from "./Components/UI/CardComponents/Card";
import UserComponent from "./Components/DashboardComponents/UserComponent";
// CARDS
import BudgetCard from "./Components/Cards/BudgetCard";
import UncategorizedCard from "./Components/Cards/UncategorizedCard";
import TotalBudgetCard from "./Components/Cards/TotalBudgetCard";
import AddBudgetModal from "./Components/Modals/AddBudgetModal";
// MODALS
import AddExpenseModal from "./Components/Modals/AddExpenseModal";
import ViewExpensesModal from "./Components/Modals/ViewExpensesModal";


function App() {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showExpensesModalBudgetID, setShowExpenseModalBudgetID] = useState();
  const [viewExpenseModalBudgetID, setViewExpenseModalBudgetID] = useState();
  const { userBudgets, getBudgetExpenses, userExpenses } = useBudgets();

  function openAddExpenseModal (budgetID) {
    setShowExpenseModal(true);
    setShowExpenseModalBudgetID(budgetID);
  }


  return (
      <Fragment>
          <Header setShowBudgetModal={setShowBudgetModal} setShowExpenseModal={setShowExpenseModal} />

          {/* DASHBOARD */}
          <Card>
              <UserComponent />

              {/* Budgets */}
              <div className='budgets'>
                  {userBudgets.map((budget) => {
                    // TOTAL EXPENSES AMOUNT
                    const amount = getBudgetExpenses(budget.id).reduce((acc, value) => acc + value.amount, 0);

                    return (<BudgetCard 
                      key={budget.id} 
                      name={budget.name} 
                      max={budget.max}
                      amount={amount}  
                      onAddExpenseClick={openAddExpenseModal}
                      onViewExpenseClick={() => setViewExpenseModalBudgetID(budget.id)} />)
                    })}
                    
                    {/* UNCATEGORIZED CARD */}
                    <UncategorizedCard 
                    onAddExpenseClick={openAddExpenseModal} 
                    onViewExpenseClick={() => setViewExpenseModalBudgetID(UNCATEGORIZED_BUDGET_ID)}  />

                    {/* TOTAL EXPENSES CARD */}
                    <TotalBudgetCard />
              </div>
          </Card>
        
        {/* MODALS */}
        
        <AddBudgetModal show={showBudgetModal} handlerClose={() => setShowBudgetModal(false)} />

        <AddExpenseModal show={showExpenseModal} defaultBudgetID={showExpensesModalBudgetID} handlerClose={() => setShowExpenseModal(false)}  />

        <ViewExpensesModal budgetID={viewExpenseModalBudgetID} defaultBudgetID={showExpensesModalBudgetID} handlerClose={() => setViewExpenseModalBudgetID()}  />
          
      </Fragment>
  );
}

export default App;
