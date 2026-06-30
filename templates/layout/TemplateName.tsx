import React, { type FC } from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {
  children: React.ReactElement | React.ReactNode[]
}

const TemplateName: FC<ITemplateNameProps> = ({ children }) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {children}
    </div>
  );
}

export default TemplateName;
