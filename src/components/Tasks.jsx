import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { AddTask } from './AddTask'
import { useSearchContextValue } from '../context/search-context';

export const Tasks = () => {

  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  const { search } = useSearchContextValue();
  // let projectName = '';

  // if (collatedTasksExist(selectedProject) && selectedProject) {
  //   projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  // }

  // else if (
  //   projects &&
  //   projects.length > 0 &&
  //   selectedProject &&
  //   !collatedTasksExist(selectedProject)
  // ) {
  //   projectName = getTitle(projects, selectedProject).name;
  // }

  console.log(search)
  useEffect(() => {
    let projectName = getCollatedTitle(collatedTasks, selectedProject) ? getCollatedTitle(collatedTasks, selectedProject).name : getTitle(projects, selectedProject).name
    document.title = `${projectName}: Todoist`;
  }, [selectedProject]);

  return (
    <div className="tasks" data-testid="tasks">
      {/* <h2 data-testid="project-name">{projectName}</h2> */}

      <ul className="tasks__list">
        {search ? tasks.filter((task) => (task.task.includes(search))).map((task) => (<li key={`${task.id}`}><Checkbox id={task.id} taskDesc={task.task} /><span>{task.task}</span></li>))
        : tasks.map((task) => (<li key={`${task.id}`}><Checkbox id={task.id} taskDesc={task.task} /><span>{task.task}</span></li>))}
      </ul>
      <AddTask />
    </div>
  );

};