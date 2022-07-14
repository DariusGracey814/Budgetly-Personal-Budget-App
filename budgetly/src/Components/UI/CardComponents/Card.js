import React from 'react'

import classes from './Card.module.css';

function Card(props) {
  return (
   <section className={classes.section}>
     <div className={classes.card}>{props.children}</div>
   </section>
  );
};

export default Card;
