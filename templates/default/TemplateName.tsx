import { useCallback, useEffect, useState, type FC } from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps { }

const TemplateName: FC<ITemplateNameProps> = ({ }) => {
  const [state, setState] = useState('')
  useEffect(() => {
    //montage
    return () => {
      //demontage
    }
  }, [])

  
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}

export default TemplateName;
