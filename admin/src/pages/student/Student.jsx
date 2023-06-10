import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Student = ({ courses }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      const response = await axios.get('http://localhost:8800/users');
      setStudents(response.data);
      console.log(response.data);
    };
    getStudent();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Course Name</StyledTableCell>
              <StyledTableCell align="right">Day</StyledTableCell>
              <StyledTableCell align="right">Start Time</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student._id}>
                <StyledTableCell align="right">
                  {student.courseName}
                </StyledTableCell>
                <StyledTableCell align="right">{student.day}</StyledTableCell>
                <StyledTableCell align="right">
                  {student.startTime}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {student.firstName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {student.lastName}
                </StyledTableCell>
                <StyledTableCell align="right">{student.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {student.phoneNumber}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Student;
