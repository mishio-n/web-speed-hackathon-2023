import classNames from 'classnames';
import type { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  color: string;
};

export const ArrowLeftIcon: FC<Props> = ({ color, height, width }) => {
  return (
    <span className={classNames('FaArrowLeft', styles.container({ color, height, width }))}>
      <FaArrowLeft />
    </span>
  );
};
