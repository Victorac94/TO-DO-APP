import React from 'react';

import * as classes from './TasksCompleted.module.css';

const tasksCompleted = (props) => {
  let tasksCompleted = [];

  tasksCompleted = props.tasksCompleted.map(t => {
    return (
      <li className={classes.taskCompleted} key={t.key} data-key={t.key}>
        {t.value}
      </li>
    )
  });

  return (
    <div className={classes.TasksCompleted}>
      <p>
        Completed
        <span onClick={props.deleteTasksCompleted} className="icon-trash-o"></span>
      </p>
      <ul className={classes.TasksCompletedList}>
        {tasksCompleted}
      </ul>
    </div>
  )
};

export default tasksCompleted;
