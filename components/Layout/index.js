import { Box } from '@mui/system';
import Head from 'next/head';
import Menu from '../Menu';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});
export default function Layout({ title, children }) {
  const dark = '0,0,0';
  const light = '255,255,0';
  return (
    <Box className='min-h-[100vh]'>
      <Head>
        <title>{title}</title>
      </Head>

      <Box className='flex min-h-[100vh]'>
        <Box sx={{ zIndex: '20001' }}>
          <AnimatedCursor
            innerSize={10}
            outerSize={30}
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            color='34,139,34'
          />
        </Box>
        <Menu />

        <Box>{children}</Box>
      </Box>
    </Box>
  );
}

Layout.defaultProps = {
  title: 'Niraj Khatri - Home',
};
