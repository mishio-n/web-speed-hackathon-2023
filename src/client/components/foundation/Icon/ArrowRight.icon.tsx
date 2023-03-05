import classNames from 'classnames';
import type { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  color: string;
};

export const ArrowRightIcon: FC<Props> = ({ color, height, width }) => {
  return (
    <span className={classNames('FaArrowRight', styles.container({ color, height, width }))}>
      <FaArrowRight />
    </span>
  );
};
