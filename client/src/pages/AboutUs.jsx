import { Box, Divider, Typography } from '@mui/material';
import danceImage from '../assets/dance3.jpg';

const AboutUs = () => {
  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="200px"
          justifyContent="center"
        >
          <img src={danceImage} alt="dance" height="400px" width="700px" />
          <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
            location : 500 hiphop st, Richmond, 3121
          </p>
        </Box>
        <Box
          width="40%"
          height="auto"
          display="flex"
          alignItems="center"
          marginLeft="10px"
        >
          <Typography variant="h3">
            OJ Dance is a custom built trmaining and performance hub space
            located in Richmond, Melbourne. Designed to be a creative workspace
            and a development platform, OJ Dance is a dance and performing arts
            venue where artists of all ages can find a space that they can both
            build their craft and create in.
          </Typography>
        </Box>
        <Box width="30%" height="auto" />
      </Box>

      <Divider />

      <Box marginLeft="200px">
        <p style={{ fontSize: '40px', fontWeight: 'bold' }}>Opening Hours</p>
        <p style={{ fontSize: '30px' }}>Weekdays : 1PM - 9PM</p>
        <p style={{ fontSize: '30px' }}>Weekends : 10AM - 6PM</p>
      </Box>
    </Box>
  );
};

export default AboutUs;
