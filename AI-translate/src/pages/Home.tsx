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
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header/>
      <MainScreen/>
    </Box>
  )
}

export default Home
