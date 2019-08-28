import React from 'react';

import * as classes from './TasksList.module.css';

const TasksList = props => {
  return (
    <div className={classes.TasksList}>
      {props.tasks}
    </div>
  )
}

export default TasksList;
