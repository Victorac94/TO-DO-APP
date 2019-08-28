import React from 'react';

import * as classes from './Task.module.css';

const task = (props) => {
  let isSelected = false;
  let taskPressed = null;
  // const span = document.querySelector(".delete-post");

  const handleTaskPress = (e) => {
    //We use 'currentTarget' instead of 'target' because we want to select the parent Div
    const target = e.currentTarget;
    const span = target.querySelector(".delete-post");
    taskPressed = setTimeout(() => {
      if (isSelected) {
        target.classList.remove(classes.TaskSelected);
        span.classList.remove(classes.deletePostShow);
        isSelected = false;
      } else {
        target.classList.add(classes.TaskSelected);
        span.classList.add(classes.deletePostShow);
        isSelected = true;
      }
    }, 200) //300 milliseconds
  }

  const handleTaskRelease = () => {
    clearTimeout(taskPressed);
  }

  return (
    <div
    className={classes.TaskWrapper}
    onTouchStart={(e) => handleTaskPress(e)}
    onTouchEnd={handleTaskRelease}
    onMouseDown={(e) => handleTaskPress(e)}
    onMouseUp={handleTaskRelease}
    data-key={props.itemId}
    >
      <input type="checkbox" onClick={props.checked} className={classes.checkbox}/>
      <p className={classes.Task}>
        {props.task}
      </p>
      <span onClick={props.deleteTask} className="icon-trash-o delete-post"></span>
    </div>
  )
}

export default task;
