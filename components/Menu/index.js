import { Box, Paper } from '@mui/material';
import MenuButton from './MenuButton';

export default function Menu() {
  return (
    <Paper elevation={5} className='w-[50px] h-[100vh] bg-[#FF0066] '>
      <MenuButton />
    </Paper>
  );
}
