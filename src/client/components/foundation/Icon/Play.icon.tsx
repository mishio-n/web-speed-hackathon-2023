import classNames from 'classnames';
import type { FC } from 'react';
import { FaPlay } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  color: string;
};

export const PlayIcon: FC<Props> = ({ color, height, width }) => {
  return (
    <span className={classNames('FaPlay', styles.container({ color, height, width }))}>
      <FaPlay />
    </span>
  );
};
