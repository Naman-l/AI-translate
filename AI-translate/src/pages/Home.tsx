import { Box } from '@mui/material';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';

const Home = () => {
  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        minHeight:'100vh'
    }}>
      <Header/>
      <MainScreen/>
    </Box>
  )
}

export default Home
