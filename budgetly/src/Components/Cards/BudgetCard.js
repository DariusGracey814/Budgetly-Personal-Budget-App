import React from 'react';

import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';
import { currencyFormatter } from '../../Utils/Utils';
import classes from './BudgetCard.module.css';

function BudgetCard({ name, amount, max, hideButtons, onAddExpenseClick, onViewExpenseClick }) {
    const now = amount;

    // CARD BACKGROUND
    const classNames = [];

    if (amount > max) {
      classNames.push('bg-danger', 'bg-opacity-10');
    }
    else {
      classNames.push('bg-light');
    }

    // PROGRESS BAR COLORS
    function progressBarVariant(amount, max) {
      const ratio = amount / max;
      
      if(ratio < .5) return 'primary';
      if (ratio < 0.75) return 'warning';
      else return 'danger';
    }

  return (
      <Card className={classNames.join(' ')}>
          <Card.Body>

            {/* TITLE */}
              <Card.Title className={`d-flex justify-content-between align-items-baseline fw-normal mb-3 ${classes['budget-content']}`}>

              <div className={`me-2 ${classes.name}`}>{name}</div>
              {/* BUDGET AMOUNT AND TOTAL */}
              <div className={`${classes.firstNum}`}>{currencyFormatter.format(amount)}{max && (<span className="text-muted fs-6 ms-1">/ {currencyFormatter.format(max)}</span>)}</div>

              </Card.Title>
            {/* CONTEXT */}
              <Card.Text>
                {/* Budget Progress Bar */}
                {max && (<ProgressBar 
                className="rounded-pill text-align-center"
                variant={progressBarVariant(amount, max)} 
                min={0} 
                max={max} 
                now={amount} 
                label={`${Math.floor((now / max) * 100)}%`} />)}

                {/* Buttons */}
                {!hideButtons && <Stack direction="horizontal" gap={2} className='btn-margin'>
                  <Button variant="primary" className={`ms-auto ${classes['btn-size']}`} onClick={onAddExpenseClick}>Add Expense</Button>
                  <Button variant="outline-primary" className={classes['btn-size']} onClick={onViewExpenseClick}>View Expense</Button>
                </Stack>}
              </Card.Text>

          </Card.Body>
      </Card>
  );
};

export default BudgetCard;
