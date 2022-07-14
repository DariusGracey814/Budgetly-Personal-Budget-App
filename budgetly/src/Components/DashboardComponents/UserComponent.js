import React, { Fragment } from 'react'

import { Card } from 'react-bootstrap';
import TipsComponent from './TipsComponent';
import classes from './UserComponent.module.css';

function UserComponent( {userName} ) {
  return (
    <div className={classes.wrapper}>
        {/* USER INFO */}
        <Card className={`rounded pop ${classes.user}`}>
            {/* Icon */}
            <div className={classes.userWrapper}>
              <div className={classes['userIcon-wrapper']}>
                <i className={`fa-solid fa-user ${classes.userIcon}`}></i>
              </div>

              <h2>Welcome Darius <span>Better Budgeting for you</span></h2>
            </div>
        </Card>

        {/* USER TIPS */}
        <TipsComponent />
    </div>
  );
};

export default UserComponent;
