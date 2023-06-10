import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, MenuItem } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialValues = {
  courseName: '',
  teacherName: '',
  day: '',
  startTime: '',
  endTime: '',
};

const validationSchema = yup.object().shape({
  courseName: yup.string().required('required!'),
  teacherName: yup.string().required('required!'),
  day: yup.string().required('required!'),
  startTime: yup.string().required('required!'),
  endTime: yup.string().required('required!'),
});

const CreateCourse = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      await axios.post('http://localhost:8800/course', values);
      alert('A course has been created!');
      navigate('/course');
   
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width="100%" marginTop="3rem" display="flex">
      <Box
        width="80%"
        display="grid"
        gap="15px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        alignItems="center"
        sx={{
          '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleSubmit,
            handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type="text"
                label="Course Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="courseName"
                value={values.courseName}
                error={
                  Boolean(touched.courseName) && Boolean(errors.courseName)
                }
                helperText={touched.courseName && errors.courseName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                type="text"
                label="Teacher Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="teacherName"
                value={values.teacherName}
                error={
                  Boolean(touched.teacherName) && Boolean(errors.teacherName)
                }
                helperText={touched.teacherName && errors.teacherName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                select
                label="Day"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.day}
                name="day"
                error={Boolean(touched.day) && Boolean(errors.day)}
                helperText={touched.day && errors.day}
                sx={{ gridColumn: 'span 2' }}
              >
                <MenuItem value="Monday">Monday</MenuItem>
                <MenuItem value="Tuesday">Tueday</MenuItem>
                <MenuItem value="Wednesday">Wednesday</MenuItem>
                <MenuItem value="Thursday">Thursday</MenuItem>
                <MenuItem value="Friday">Friday</MenuItem>
                <MenuItem value="Saturday">Saturday</MenuItem>
                <MenuItem value="Sunday">Sunday</MenuItem>
              </TextField>
              <TextField
                fullWidth
                type="time"
                label="Start Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startTime}
                name="startTime"
                error={Boolean(touched.startTime) && Boolean(errors.startTime)}
                helperText={touched.startTime && errors.startTime}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                type="time"
                label="End Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endTime}
                name="endTime"
                error={Boolean(touched.endTime) && Boolean(errors.endTime)}
                helperText={touched.endTime && errors.endTime}
                sx={{ gridColumn: 'span 2' }}
              />

              <Box>
                <Button type="submit" variant="contained">
                  Create
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateCourse;
