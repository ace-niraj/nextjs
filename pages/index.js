import { Box, Button, Paper } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import styles from '../styles/index.module.css';

export default function HomePage() {
  const particlesInit = main => {
    console.log(main);
  };

  const particlesLoaded = container => {
    console.log(container);
  };
  return (
    <Layout>
      <Particles
        style={{ marginLeft: '50px' }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#FF0066',
            },
            links: {
              color: '#111',
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 7,
            },
          },
          detectRetina: true,
        }}
      />

      <Box
        sx={{
          background: `url('/images/wave.svg') `,
        }}
        className='flex justify-evenly bg-bottom bg-no-repeat  items-center min-h-[100vh] w-[calc(100vw-50px)]'
      >
        <Box className='space-y-6'>
          <h1
            data-text='I am'
            className={`${styles.main_text} font-bold text-6xl uppercase`}
          >
            I am
          </h1>
          <h1
            data-text='Niraj Khatri'
            className={`${styles.main_text} font-bold text-6xl uppercase`}
          >
            Niraj Khatri
          </h1>
          <h1
            data-text='A Web Developer'
            className={`${styles.main_text} font-bold text-6xl uppercase`}
          >
            A Web Developer
          </h1>
          <button className={styles.contact_me}>Contact Me</button>
        </Box>
        <Paper
          elevation={5}
          className='flex justify-center items-center rounded-full w-[410px] h-[410px]'
          sx={{
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '150px',
              height: '100%',
              background: 'linear-gradient(#00ccff,#d400d4)',
              animation: 'animate 4s linear infinite',
            },
            '@keyframes animate': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(350deg)',
              },
            },
          }}
        >
          <Image
            className='rounded-full'
            width={400}
            height={400}
            alt='my picture'
            src='/images/my_image.jpg'
          />
        </Paper>
      </Box>
    </Layout>
  );
}
