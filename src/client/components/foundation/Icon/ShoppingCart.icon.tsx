import classNames from 'classnames';
import type { FC } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  color: string;
};

export const ShoppingCartIcon: FC<Props> = ({ color, height, width }) => {
  return (
    <span className={classNames('FaShoppingCart', styles.container({ color, height, width }))}>
      <FaShoppingCart />
    </span>
  );
};
