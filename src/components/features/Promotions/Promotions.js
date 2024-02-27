import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/promotionsRedux';
import styles from './Promotions.module.scss';
import { clsx } from 'clsx';

const Promotions = () => {
  const srcDir = process.env.PUBLIC_URL;
  const panelType = {
    left: 'left-panel',
    rightUpper: 'right-upper-panel',
    rightBottom: 'right-bottom-panel',
  };
  const promotions = useSelector(getAll);

  const leftPanelImageProps = {
    alt: panelType.left,
    filePath: `${srcDir}${
      promotions.find(item => item.type === panelType.left).filePath
    }`,
  };
  const rightUpperPanelImageProps = {
    alt: panelType.rightUpper,
    filePath: '', //`${srcDir}${promotions.find(item => item.type === panelType.rightUpper).filePath}`,
  };
  const rightBottomPanelImageProps = {
    alt: panelType.rightBottom,
    filePath: '', //`${srcDir}${promotions.find((item => item.type === panelType.rightBottom)).filePath}`,
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={clsx('d-flex row', styles.panel)}>
          <div className={clsx('col-sm-6')}>
            <div className={styles.leftPanel}>
              <div
                className={clsx('d-flex align-items-end', styles.bkgImage)}
                style={{ backgroundImage: `url(${leftPanelImageProps.filePath})` }}
              >
                <div className={styles.content}>
                  <p>Guest room</p>
                  <p>Sofa</p>
                  <p>-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx('col-sm-6')}>
            <div className={clsx('d-flex flex-column', styles.rightPanel)}>
              <div className={clsx('', styles.rightUpper)}>
                <div
                  className={clsx('d-flex justify-content-end', styles.bkgImage)}
                  style={{
                    backgroundImage: `url(${rightUpperPanelImageProps.filePath})`,
                  }}
                >
                  <div className={styles.content}>
                    <p>Office chair</p>
                    <p>Collection</p>
                    <p>$200.00</p>
                  </div>
                </div>
              </div>
              <div className={clsx('', styles.rightBottom)}>
                <div
                  className={clsx('d-flex justify-content-end', styles.bkgImage)}
                  style={{
                    backgroundImage: `url(${rightBottomPanelImageProps.filePath})`,
                  }}
                >
                  <div className={styles.content}>
                    <p>Special collection</p>
                    <p>Save up 45% of furniture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
