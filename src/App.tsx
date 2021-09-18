import React from 'react';
import { Button } from '@mui/material';

import { useCounter , Dispatch , State } from './context';

const App: React.FC = () => {
  const { state , dispatch } = useCounter()
  
  return(
    <div style={{
                  width: '200px', 
                  position: 'absolute', 
                  top: '50%',
                  left: '50%', 
                  transform: 'translate(-50% , -50%)',
                  textAlign: 'center',
                }}>
      <h1>{state.count}</h1>
      <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '25px'
      }}>
        <Button variant='outlined' onClick={() => dispatch('decrement')}>-1</Button>
        <Button variant='contained' onClick={() => dispatch('increment')}>+1</Button>
      </div>  
    </div>
  );
}

export default App; 
