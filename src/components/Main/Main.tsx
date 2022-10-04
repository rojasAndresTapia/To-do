import React from 'react';
import { TasksTable } from '../TasksTable/TasksTable';
import { getTitleStyles } from './MainStyles';

export const Main: React.FC = () => {
  return (
    <>
      <h1 css={getTitleStyles}>TO DO LIST</h1>
      <TasksTable></TasksTable>
    </>
  );
};
