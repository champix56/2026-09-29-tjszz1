import { useCallback, useEffect, useState, type FC } from 'react';
import styles from './MemeForm.module.css';

interface IMemeFormProps { }

const MemeForm: FC<IMemeFormProps> = ({ }) => {
  const [state, setState] = useState('')
  useEffect(() => {
    //montage
    return () => {
      //demontage
    }
  }, [])

  
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  );
}

export default MemeForm;
