import React, { type FC } from 'react';
import styles from './FlexV3Grow.module.css';

interface IFlexV3GrowProps {
  children: React.ReactElement | React.ReactNode[]
}

const FlexV3Grow: FC<IFlexV3GrowProps> = ({ children }) => {
  return (
    <div className={styles.FlexV3Grow} data-testid="FlexV3Grow">
      {children}
    </div>
  );
}

export default FlexV3Grow;
