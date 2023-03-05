import classNames from 'classnames';
import type { FC } from 'react';
import { FaUser } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  color: string;
};

export const UserIcon: FC<Props> = ({ color, height, width }) => {
  return (
    <span className={classNames('FaUser', styles.container({ color, height, width }))}>
      <FaUser />
    </span>
  );
};
