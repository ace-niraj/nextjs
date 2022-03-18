import { Box, Divider } from '@mui/material';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useState } from 'react';
import MenuContent from './../MenuContent/index';

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);
export default function MenuButton() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isOpenMenu, setIsOpen] = useState(false);
  const handleMenuButton = () => {
    setIsOpen(!isOpenMenu);
  };
  return (
    <Box>
      <Box
        sx={{
          cursor: 'pointer',
          width: '48px',
          height: '48px',
          display: 'flex',
          justifyContent: 'center',
          top: '100px',
          position: 'absolute',
          zIndex: '20000',
        }}
        onClick={handleMenuButton}
      >
        <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
          <button onClick={() => toggleOpen()}>
            <svg width='23' height='23' viewBox='0 0 23 23'>
              <Path
                variants={{
                  closed: { d: 'M 2 2.5 L 20 2.5' },
                  open: { d: 'M 3 16.5 L 17 2.5' },
                }}
              />
              <Path
                d='M 2 9.423 L 20 9.423'
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: 'M 2 16.346 L 20 16.346' },
                  open: { d: 'M 3 2.5 L 17 16.346' },
                }}
              />
            </svg>
          </button>
        </motion.nav>
      </Box>

      <AnimatePresence>
        {isOpenMenu && <MenuContent handleMenuButton={handleMenuButton} toggleOpen={toggleOpen} />}
      </AnimatePresence>
    </Box>
  );
}
