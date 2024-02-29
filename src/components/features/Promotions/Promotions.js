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

  const leftPanel = promotions.find(item => item.type === panelType.left);
  const rightUpperPanel = promotions.find(item => item.type === panelType.rightUpper);
  const rightBottomPanel = promotions.find(item => item.type === panelType.rightBottom);

  const leftPanelImageProps = {
    alt: panelType.left,
    filePath: `${srcDir}${leftPanel.filePath}`,
  };
  const rightUpperPanelImageProps = {
    alt: panelType.rightUpper,
    filePath: '', //`${srcDir}${rightUpperPanel.filePath}`,
  };
  const rightBottomPanelImageProps = {
    alt: panelType.rightBottom,
    filePath: '', //`${srcDir}${rightBottomPanel.filePath}`,
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={clsx('d-flex row', styles.panel)}>
          <div className={clsx('col-sm-6')}>
            <div
              className={clsx(styles.leftPanel, styles.bkgImage)}
              style={{ backgroundImage: `url(${leftPanelImageProps.filePath})` }}
            >
              <div className={clsx('d-flex align-items-end', styles.bkg)}>
                <div className={styles.content}>
                  <p>{leftPanel.title}</p>
                  <p>{leftPanel.subtitle}</p>
                  <p>{leftPanel.discount}</p>
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
                    <p>
                      <span>{rightUpperPanel.title.split(' ')[0]}</span>{' '}
                      {rightUpperPanel.title.split(' ')[1]}
                    </p>
                    <p>{rightUpperPanel.subtitle}</p>
                    <p>{rightUpperPanel.discount}</p>
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
                    <p>
                      <span>{rightBottomPanel.title.split(' ')[0]}</span>{' '}
                      {rightBottomPanel.title.split(' ')[1]}
                    </p>
                    <p>{rightBottomPanel.subtitle}</p>
                    <p>{rightBottomPanel.discount}</p>
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
