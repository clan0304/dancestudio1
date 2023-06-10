import { Box, IconButton, Typography } from '@mui/material';
import { shades } from '../theme';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: shades.orange[700],
      }}
      marginTop="20px"
    >
      <Box
        height="180px"
        marginLeft="4rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box color="white">
          <Typography variant="h2" fontWeight="bold" mb="10px">
            OJ Dance Studio
          </Typography>
          <Typography mb="10px">500 HipHop Street</Typography>
          <Typography mb="10px">Richmond VIC 3121</Typography>
          <Typography mb="10px">T:03 3232 3333</Typography>
          <Typography mb="10px">F: OJdance@gmail.com.au</Typography>
        </Box>

        <Box marginRight="2rem">
          <Typography color="white" fontSize="20px">
            OJ Dance ©2019
          </Typography>
          <IconButton sx={{ margin: '2rem 0 0 3rem', fontSize: 'large' }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
