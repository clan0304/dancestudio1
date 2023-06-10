import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { shades } from '../theme';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
  const navigate = useNavigate();

  return (
    <Box width="100%" display="flex" justifyContent="center" marginTop="10px">
      <Box
        width="60%"
        height="150px"
        border={`1px solid`}
        borderRadius="5px"
        justifyContent="space-around"
        display="flex"
        alignItems="center"
        marginTop="50px"
      >
        <Box width="300px">
          <Box color={shades.secondary[700]}>
            {course.startTime} - {course.endTime}
          </Box>
          <Typography variant="h1">{course.courseName}</Typography>
          <Typography variant="h2">{course.teacherName}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            onClick={() =>
              navigate(`/courses/${course._id}`, {
                state: {
                  courseName: course.courseName,
                  day: course.day,
                  startTime: course.startTime,
                },
              })
            }
          >
            Book
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Course;
