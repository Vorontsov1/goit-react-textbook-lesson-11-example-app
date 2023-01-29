import {nanoid} from 'nanoid';

 export const addTask = text => { 
    return {
    type: 'tasks/addTask',
    payload: {
        id: nanoid(),
        completed: false,
        text,
    },
   };
  };


export const deleteTask = taskId => {
    return {
    type: 'tasks/deleteTask',
    payload: taskId,
 };
};

export const toggleCompleted = taskId => {
    return {
    type: 'task/toggleCompleted',
    payload: taskId,
 };
};

export const setstatusFilter = value => {
    return {
    type: 'filter/setstatusFilter',
    payload: value,
 };
};