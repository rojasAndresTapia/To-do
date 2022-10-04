import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface AddTaskModal {
  open: boolean;
  onClickAddTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickOpenModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleInputChange: (event:  React.FormEvent<HTMLInputElement>) => void;
}

export const AddTaskModal = ({
  open,
  onClickAddTask,
  handleClickOpenModal,
  handleCloseModal,
  handleInputChange,
}: AddTaskModal): JSX.Element => {
  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpenModal}>
        Add a new task
      </Button>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>New task info</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Description'
            type='email'
            fullWidth
            variant='standard'
            onChange={() => handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={onClickAddTask}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
