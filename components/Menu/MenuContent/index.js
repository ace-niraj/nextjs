import { Box, Divider, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuContent({ handleMenuButton, toggleOpen }) {
  const router = useRouter();
  const handlePageTransition = ({ route }) => {
    toggleOpen();
    handleMenuButton();
    setTimeout(() => {
      router.push(route);
    }, 1500);
  };
  return (
    <Box
      key='menu'
      component={motion.div}
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={{
        hidden: {
          opacity: 0.5,
          x: '-100vw',
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5,
          },
        },
        exit: {
          opacity: 0.5,
          x: '-100vw',
          transition: {
            duration: 2,
          },
        },
      }}
      sx={{
        backgroundColor: 'white',
        width: 'calc(100% - 50px)',
        height: '100vh',
        position: 'absolute',
        ml: '50px',
        zIndex: 'tooltip',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          component='button'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            height: '24vh',
            padding: '40px 40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => handlePageTransition({ route: '/' })}
        >
          <Typography className='font-bold uppercase tracking-widest text-2xl'>
            Home
          </Typography>
        </Box>

        <Divider sx={{ height: '1vh' }} />

        <Box
          component='button'
          onClick={() => handlePageTransition({ route: '/portfolio' })}
          sx={{
            height: '24vh',
            backgroundColor: 'black',
            color: 'white',
            padding: '40px 40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography className='font-bold uppercase text-center tracking-widest text-2xl'>
            Portfolio
          </Typography>
        </Box>

        <Divider sx={{ height: '1vh' }} />
        <Box
          component='button'
          onClick={() => handlePageTransition({ route: '/about' })}
          sx={{
            height: '24vh',
            backgroundColor: 'black',
            color: 'white',
            padding: '40px 40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography className='font-bold uppercase text-center tracking-widest text-2xl'>
            About
          </Typography>
        </Box>
        <Divider sx={{ height: '1vh' }} />
        <Box
          component='button'
          onClick={() => handlePageTransition({ route: '/contact' })}
          sx={{
            height: '25vh',
            backgroundColor: 'black',
            color: 'white',
            padding: '40px 40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography className='font-bold uppercase text-center tracking-widest text-2xl'>
            Contact
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
