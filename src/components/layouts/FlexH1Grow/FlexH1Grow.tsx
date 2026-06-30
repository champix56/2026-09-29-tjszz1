import React, { type FC } from 'react';
import styles from './FlexH1Grow.module.css';

interface IFlexH1GrowProps {
  children: React.ReactElement | React.ReactNode[]
}

const FlexH1Grow: FC<IFlexH1GrowProps> = ({ children }) => {
  return (
    <div className={styles.FlexH1Grow} data-testid="FlexH1Grow">
      {children}
    </div>
  );
}

export default FlexH1Grow;
