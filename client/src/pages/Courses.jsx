import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import { useState } from 'react';

import axios from 'axios';
import { useEffect } from 'react';
import Course from '../components/Course';

const Courses = () => {
  const [value, setValue] = useState('Monday');
  const [courses, setCourses] = useState([]);

  courses.sort((a, b) => {
    const timeA = new Date(`2000-01-01T${a.startTime}`);
    const timeB = new Date(`2000-01-01T${b.startTime}`);

    if (timeA < timeB) {
      return -1;
    } else if (timeA > timeB) {
      return 1;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const getData = async (req, res) => {
      try {
        const response = await axios.get('http://localhost:8800/course');
        setCourses(response.data);
      } catch (err) {
        res.json(err);
      }
    };
    getData();
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const monday = courses.filter((course) => course.day === 'Monday');

  const tuesday = courses.filter((course) => course.day === 'Tuesday');
  const wednesday = courses.filter((course) => course.day === 'Wednesday');
  const thursday = courses.filter((course) => course.day === 'Thursday');
  const friday = courses.filter((course) => course.day === 'Friday');
  const saturday = courses.filter((course) => course.day === 'Saturday');
  const sunday = courses.filter((course) => course.day === 'Sunday');

  return (
    <Box sx={{ gap: 30 }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Mon" value="Monday" />
          <Tab label="Tue" value="Tuesday" />
          <Tab label="Wed" value="Wednesday" />
          <Tab label="Thu" value="Thursday" />
          <Tab label="Fri" value="Friday" />
          <Tab label="Sat" value="Saturday" />
          <Tab label="Sun" value="Sunday" />
        </Tabs>
        <Box>
          {value === 'Monday' &&
            monday.map((course) => <Course course={course} key={course._id} />)}
          {value === 'Tuesday' &&
            tuesday.map((course) => (
              <Course course={course} key={course._id} />
            ))}
          {value === 'Wednesday' &&
            wednesday.map((course) => (
              <Course course={course} key={course._id} />
            ))}
          {value === 'Thursday' &&
            thursday.map((course) => (
              <Course course={course} key={course._id} />
            ))}
          {value === 'Friday' &&
            friday.map((course) => <Course course={course} key={course._id} />)}
          {value === 'Saturday' &&
            saturday.map((course) => (
              <Course course={course} key={course._id} />
            ))}
          {value === 'Sunday' &&
            sunday.map((course) => <Course course={course} key={course._id} />)}
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
