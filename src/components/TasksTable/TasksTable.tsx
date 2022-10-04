import React from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { api } from '../../api/api';
import { TasksListService } from '../../api/api-model';
import { getTasksTableStyles } from './TasksTableStyles';
import { AddTaskModal } from '../AddTaskModal/AddTaskModal';

export const TasksTable: React.FC = () => {
  const [tasksListService, setTasksListService] = React.useState<
    TasksListService[]
  >([]);
  const [isChecked, setIsChecked] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [newTitleTask, setNewTitleTask] = React.useState('');

  const handleClickOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleModalInput = (event) => {
    setNewTitleTask(event.target.value);
  };

  const handleAddTask = (e) => {
    const newTask: TasksListService = {
      id: tasksListService[tasksListService.length -1].id + 1,
      title: newTitleTask,
      completed: false,
    };
    setOpen(false);
    tasksListService.push(newTask);
  };

  React.useEffect(() => {
    api.then((res) => {
      setTasksListService(res.data.slice(0, 10));
    });
  }, []);

  const handleInputChange = ({ target: { checked, dataset } }) => {
    setIsChecked({
      ...isChecked,
      [dataset.id]: checked,
    });
  };

  const handleDelete = (item) => {
    let filteredArr = tasksListService.filter(
      (element) => element.id !== item.id
    );
    setTasksListService(filteredArr);
  };

  return (
    <Box css={getTasksTableStyles}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h3>State</h3></TableCell>
              <TableCell align='left'><h3>ID</h3></TableCell>
              <TableCell align='left'><h3>Description</h3></TableCell>
              <TableCell align='center'>
                <AddTaskModal
                  open={open}
                  onClickAddTask={handleAddTask}
                  handleClickOpenModal={handleClickOpenModal}
                  handleCloseModal={handleCloseModal}
                  handleInputChange={handleModalInput}
                ></AddTaskModal>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasksListService.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <input
                    type='checkbox'
                    data-id={task.id}
                    checked={
                      isChecked[task.id] === undefined
                        ? task.completed
                        : isChecked[task.id]
                    }
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell component='th' scope='row'>
                  {task.id}
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    textDecorationLine:
                      (isChecked[task.id] === undefined && task.completed) ||
                      isChecked[task.id]
                        ? 'line-through'
                        : 'none',
                  }}
                >
                  {task.title}
                </TableCell>
                <TableCell align='right'>
                  <DeleteIcon onClick={() => handleDelete(task)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
