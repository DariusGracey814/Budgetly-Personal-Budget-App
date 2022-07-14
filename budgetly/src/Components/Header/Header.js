import React from 'react'

import { Container, Button, Stack } from 'react-bootstrap';
import logo from '../../Assets/budgetly192.png';

import classes from './Header.module.css';

function Header({ setShowBudgetModal, setShowExpenseModal }) {
  
  return (
    <header className={classes.header}>
        <Container fluid>
           <div className={classes['header-content']}>
               {/* LOGO */}
              <Stack> 
                    <div className={`d-flex justify-content-baseline ${classes['logo-wrapper']}`}>
                      <img className={`me-1 ${classes.logo}`} src={logo}  alt="budgetly logo"  />
                      <h1 className={`mb-0 ${classes['logo-heading']}`}>Budgetly</h1>
                    </div>
            
                    <p className={`${classes['logo-text']}`}>Budget and Expense Tracker</p>
              </Stack>

              <Stack direction="horizontal" gap={3} className={classes.buttons}>
                  <Button className={`focus ${classes['btn-small']}`} variant='primary' onClick={() => setShowBudgetModal(true)}>Add Budget</Button>
                  <Button className={`focus ${classes['btn-small']}`} variant="outline-primary" onClick={() => setShowExpenseModal(true)}>Add Expense</Button>
              </Stack>
           </div>
        </Container>
    </header>
  );
}

export default Header;
