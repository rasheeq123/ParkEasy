import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  padding: '16px',
});

const StyledTable = styled(Table)({
  backgroundColor: '#333',
});

const StyledTableCell = styled(TableCell)({
  color: '#fff',
});

const StyledButton = styled(Button)({
  '&.edit': {
    backgroundColor: '#007bff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  '&.delete': {
    backgroundColor: '#dc3545',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#c82333',
    },
  },
});

const ManageSlots = () => {
  const [userList, setuserList] = useState([]);
  
  const fetchSlots = async () => {
    const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/getall`);
    const data = await res.json();
    setuserList(data);
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const deleteparkings = async (id) => {
    const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/delete/${id}`, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      fetchSlots();
      toast.success('Slot Deleted Successfully');
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Manage Slot
      </Typography>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>S.no</StyledTableCell>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Floor</StyledTableCell>
            <StyledTableCell>Slot</StyledTableCell>
            <StyledTableCell>Vehicle No.</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((parkings, index) => (
            <TableRow key={parkings._id}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell>{parkings._id}</StyledTableCell>
              <StyledTableCell>{parkings.floor}</StyledTableCell>
              <StyledTableCell>{parkings.slot}</StyledTableCell>
              <StyledTableCell>{parkings.vehicle}</StyledTableCell>
              <StyledTableCell>{new Date(parkings.time).toLocaleDateString()}</StyledTableCell>
              <StyledTableCell>{new Date(parkings.time).toLocaleTimeString()}</StyledTableCell>
              <StyledTableCell>
                <Link to={`/bookslot`} style={{ textDecoration: 'none' }}>
                  <StyledButton className="edit" variant="contained">Edit</StyledButton>
                </Link>
              </StyledTableCell>
              <StyledTableCell>
                <StyledButton
                  className="delete"
                  variant="contained"
                  onClick={() => { deleteparkings(parkings._id) }}
                >
                  Delete
                </StyledButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledContainer>
  );
};

export default ManageSlots;
