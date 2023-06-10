import { Formik } from 'formik';
import * as yup from 'yup';
import { Box, TextField, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      await axios.post('http://localhost:8800/users', values);
      onSubmitProps.resetForm();
      navigate(`/courses/${id}/confirmation`, {
        state: { email: values.email },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const initialValues = {
    courseName: location.state.courseName,
    day: location.state.day,
    startTime: location.state.startTime,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  const validationSchema = yup.object().shape({
    courseName: yup.string(),
    day: yup.string(),
    startTime: yup.string(),
    firstName: yup.string().required('Required!'),
    lastName: yup.string().required('Required!'),
    email: yup.string().email().required('Required!'),
    phoneNumber: yup.string().required('Required!'),
  });

  return (
    <Box
      marginLeft="30px"
      display="grid"
      gap="30px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
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
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Box>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <TextField
                fullWidth
                type="text"
                label="Course Name"
                name="courseName"
                value={location.state.courseName}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                type="text"
                label="Day"
                name="day"
                value={location.state.day}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                type="text"
                label="Start Time"
                name="startTime"
                value={location.state.startTime}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="firstName"
                value={values.firstName}
                error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="lastName"
                value={values.lastName}
                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                value={values.email}
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                name="phoneNumber"
                value={values.phoneNumber}
                error={
                  Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)
                }
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: 'span 4' }}
              />
              <Box marginTop="20px">
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default Booking;
