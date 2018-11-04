import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import AddTask from './components/AddTask/AddTask';
import Task from './components/Task/Task';
import TasksCompleted from './components/TasksCompleted/TasksCompleted';

class App extends Component {
  state = {
    tasks: [],
    tasksCompleted: []
  }

  addTask = (e) => {
    let input = document.querySelector("form input");
    const form = document.querySelector("form");
    const tasksCopy = [...this.state.tasks];

    //Prevent 'sending' the form
    if (e.target === form) {
      e.preventDefault();
    }
    //Get the input value and create the new task
    const value = input.value;
    const newTask = {"value": value, "key": value + Math.random().toFixed(4)};
    //Add task to state array
    tasksCopy.push(newTask);

    this.setState(() => {
      return {
        tasks: tasksCopy
      }
    });

    //Reset the input value to an empty string
    document.querySelector("form input").value = "";
  }

  onTaskChecked = (e) => {
    const elem = e.target.parentElement.dataset.key;

    setTimeout(() => {
      //Get the index of the task in the State's array
      const i = this.state.tasks.findIndex(el => {
        return el.key === elem;
      });
      const tasksCopy = this.state.tasks.map(t => {
        return {...t};
      });
      const tasksCompCopy = this.state.tasksCompleted.map(t => {
        return {...t};
      });

      //Eliminate the desired task from the State's array copy and add it to the TasksCompleted copy
      const taskDone = tasksCopy.splice(i, 1);
      tasksCompCopy.push(...taskDone);

      this.setState(() => {
        return {
          tasks: tasksCopy,
          tasksCompleted: tasksCompCopy
        };
      });
    }, 100);
  }

  deleteTask = (e) => {
    //Select the key of the target task
    const elem = e.target.parentElement.dataset.key;

    //Get the index of that task in the state
    const i = this.state.tasks.findIndex(el => {
      return el.key === elem;
    });

    //Make a deep copy of the tasks in state
    const tasksCopy = this.state.tasks.map(t => {
      return {...t};
    });

    //Remove the target task of the tasks copy
    tasksCopy.splice(i, 1);

    //Set the new state
    this.setState(() => {
      return{
        tasks: tasksCopy
      }
    });
  }

  deleteCompleted = () => {
    this.setState(() => {
      return {
        tasksCompleted: []
      }
    })
  }

  render() {
    let tasks = [];

    tasks = this.state.tasks.map((t, i) => {
      return (
        <Task
        key={t.key + i}
        itemId={t.key}
        task={t.value}
        checked={(e) => this.onTaskChecked(e)}
        deleteTask={(e) => this.deleteTask(e)}/>
      );
    });
    return (
      <div className="App">
        <Header />
        <AddTask onAddTask={(e) => this.addTask(e)}/>
        {tasks}
        <TasksCompleted
        tasksCompleted={this.state.tasksCompleted}
        deleteTasksCompleted={this.deleteCompleted}/>
      </div>
    );
  }
}

export default App;
