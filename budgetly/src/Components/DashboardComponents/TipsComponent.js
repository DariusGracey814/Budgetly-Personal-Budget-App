import React  from 'react'

import { Card } from 'react-bootstrap';
import classes from './TipsComponent.module.css';

function TipsComponent() {
  return (
    <div className={classes.dNone}>
      <h2 className={classes['tips-main']}>Tips For Budgeting <span><i className={`fa-solid fa-hand-holding-dollar ${classes.savingsIcon}`}></i></span></h2>
      <div className={classes['tips-cards']}>

          <Card className={`rounded pop ${classes.card} ${classes.card}`}>
              <Card.Title className={classes.title}>Cut out Fast Food <span><i className={`fa-solid fa-burger ${classes.icon}`}></i></span></Card.Title>
              <Card.Text className={classes.text}>Did you now fast food accounts for 30% of extra money spent in your budget?</Card.Text>
          </Card>

          <Card className={`rounded pop ${classes.card}`}>
              <Card.Title className={classes.title}>Less Fun nights at the bar <span><i className={`fa-solid fa-beer-mug-empty ${classes.icon}`}></i></span></Card.Title>
              <Card.Text className={classes.text}>We're all guilty of wanting to release and grab a drink or two, but can you afford it on your budget?</Card.Text>
          </Card>

          <Card className={`rounded pop ${classes.card}`}>
              <Card.Title className={classes.title}>Limit Driving <span><i className={`fa-solid fa-car ${classes.icon}`}></i></span></Card.Title>
              <Card.Text className={classes.text}>Don't let gas prices put a dent in your budget. Drive wisely save gas.</Card.Text>
          </Card>

          <Card className={`rounded pop ${classes.card} ${classes.card}`}>
              <Card.Title className={classes.title}>Enjoy Nature <span><i className={`fa-solid fa-leaf ${classes.icon}`}></i></span></Card.Title>
              <Card.Text className={classes.text}>Get out engage in more kayaking, trail walking, and hiking send less money being outdoors.</Card.Text>
          </Card>

          <Card className={`rounded pop ${classes.card}`}>
              <Card.Title className={classes.title}>Watch Movies at Home <span><i className={`fa-solid fa-tv ${classes.icon}`}></i></span></Card.Title>
              <Card.Text className={classes.text}>Who needs the movie theaters when you have Netflix, Hulu etc. Binge watch your favorite shows while saving your money</Card.Text>
          </Card>

          <Card className={`rounded pop ${classes.card}`}>
              <Card.Title className={classes.title}>Enjoy Family Time <span><i className={`fa-solid fa-people-group ${classes.icon}`}></i></span></Card.Title>
              <Card.Text className={classes.text}>Enjoy more time with your love ones. Having their company around should be enough to resist senseless spending.</Card.Text>
          </Card>
      </div>

    </div>
  )
}

export default TipsComponent;
