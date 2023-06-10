import { useState } from 'react';
import axios from 'axios';
import { Modal, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/base';

const Course = ({ courses }) => {
  const [open, setOpen] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({
    id: '',
    courseName: '',
    teacherName: '',
    day: '',
    startTime: '',
    endTime: '',
  });

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const updateCourse = (
    id,
    courseName,
    teacherName,
    day,
    startTime,
    endTime
  ) => {
    setUpdatedCourse((prev) => {
      return {
        ...prev,
        id: id,
        courseName: courseName,
        teacherName: teacherName,
        day: day,
        startTime: startTime,
        endTime: endTime,
      };
    });
    handleModalOpen();
  };

  const deleteCourse = (id) => {
    axios.delete(`http://localhost:8800/course/${id}`);
    window.location.reload();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.put(
        `http://localhost:8800/course/${updatedCourse.id}`,
        updatedCourse
      );
      alert('A course has been updated!');
      handleModalClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
    <div className="course">
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={{ width: 400, bgcolor: 'background.paper', p: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Course Name"
              value={updatedCourse.courseName}
              onChange={handleChange}
              name="courseName"
            />
            <TextField
              label="Teacher Name"
              value={updatedCourse.teacherName}
              onChange={handleChange}
              name="teacherName"
            />
            <TextField
              label="Day"
              value={updatedCourse.day}
              onChange={handleChange}
              name="day"
            />
            <TextField
              label="Start Time"
              onChange={handleChange}
              type="time"
              value={updatedCourse.startTime}
              name="startTime"
            />
            <TextField
              label="End Time"
              onChange={handleChange}
              type="time"
              value={updatedCourse.endTime}
              name="endTime"
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </form>
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Course Name</StyledTableCell>
              <StyledTableCell align="right">Teacher Name</StyledTableCell>
              <StyledTableCell align="right">Day</StyledTableCell>
              <StyledTableCell align="right">Start Time</StyledTableCell>
              <StyledTableCell align="right">End Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <StyledTableRow key={course._id}>
                <StyledTableCell component="th" scope="row">
                  {course.courseName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {course.teacherName}
                </StyledTableCell>
                <StyledTableCell align="right">{course.day}</StyledTableCell>
                <StyledTableCell align="right">
                  {course.startTime}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {course.endTime}
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={() =>
                      updateCourse(
                        course._id,
                        course.courseName,
                        course.teacherName,
                        course.day,
                        course.startTime,
                        course.endTime
                      )
                    }
                  >
                    Update
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button onClick={() => deleteCourse(course._id)}>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Course;
