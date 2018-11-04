import React from 'react';

import * as classes from './AddTask.module.css';

const addTask = (props) => {
  return (
    <div className={classes.AddTask}>
      <form onSubmit={props.onAddTask} className={classes.AddTask__form}>
        <input type="text" placeholder="Add task" />
      </form>
      <button onClick={props.onAddTask} className={classes.AddTask__button}>
        <div className={classes.AddTask__button__vertical}></div>
        <div className={classes.AddTask__button__horizontal}></div>
      </button>
    </div>
  )
}

export default addTask;
