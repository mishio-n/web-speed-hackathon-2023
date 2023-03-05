import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { Anchor } from '../../foundation/Anchor';
import { AspectRatio } from '../../foundation/AspectRatio';
import { WidthRestriction } from '../../foundation/WidthRestriction';

import styles from './ProductHeroImage.module.scss';

type Props = {
  product: ProductFragmentResponse;
  title: string;
};

export const ProductHeroImage: FC<Props> = memo(({ product, title }) => {
  const thumbnailFile = product.media.find((productMedia) => productMedia.isThumbnail)?.file;

  const [imagePath, setImagePath] = useState<string>();

  useEffect(() => {
    if (thumbnailFile == null) {
      return;
    }
    setImagePath(thumbnailFile.filename);
  }, [thumbnailFile]);

  if (imagePath === undefined) {
    return null;
  }

  return (
    <WidthRestriction>
      <Anchor href={`/product/${product.id}`}>
        <div className={styles.container}>
          <AspectRatio ratioHeight={9} ratioWidth={16}>
            <img className={styles.image} height="576px" src={imagePath} width={"1024px"}  />
          </AspectRatio>

          <div className={styles.overlay}>
            <p
              className={styles.title}
            >
              {title}
            </p>
            <p
              className={styles.description}
            >
              {product.name}
            </p>
          </div>
        </div>
      </Anchor>
    </WidthRestriction>
  );
});

ProductHeroImage.displayName = 'ProductHeroImage';
