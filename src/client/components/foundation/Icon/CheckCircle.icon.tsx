import classNames from 'classnames';
import type { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  color: string;
};

export const CheckCircleIcon: FC<Props> = ({ color, height, width }) => {
  return (
    <span className={classNames('FaCheckCircle', styles.container({ color, height, width }))}>
      <FaCheckCircle />
    </span>
  );
};
