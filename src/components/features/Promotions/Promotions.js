import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/promotionsRedux';
import styles from './Promotions.module.scss';
import { clsx } from 'clsx';
import SalesPanel from '../../common/SalesPanel/SalesPanel';

const Promotions = () => {
  const panelType = {
    left: 'left-panel',
    rightUpper: 'right-upper-panel',
    rightBottom: 'right-bottom-panel',
  };
  const promotions = useSelector(getAll);

  const leftPanel = promotions.find(item => item.type === panelType.left);
  const rightUpperPanel = promotions.find(item => item.type === panelType.rightUpper);
  const rightBottomPanel = promotions.find(item => item.type === panelType.rightBottom);

  const getContent = panel => {
    return (
      <div className={styles.content}>
        <p>
          <span>{panel.title.split('#')[0]}</span> {panel.title.split('#')[1]}
        </p>
        <p>{panel.subtitle}</p>
        <p>{panel.discount}</p>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={clsx('d-flex row', styles.panel)}>
          <div className={clsx('col-sm-6')}>
            <div className={clsx(styles.leftPanel)}>
              <SalesPanel className={clsx('p-4')} sales={leftPanel}>
                <div className={clsx('d-flex align-items-end', styles.bkg)}>
                  {getContent(leftPanel)}
                </div>
              </SalesPanel>
            </div>
          </div>
          <div className={clsx('col-sm-6')}>
            <div className={clsx('d-flex flex-column', styles.rightPanel)}>
              <div className={clsx('', styles.rightUpper)}>
                <SalesPanel
                  className={clsx('d-flex justify-content-end')}
                  sales={rightUpperPanel}
                >
                  {getContent(rightUpperPanel)}
                </SalesPanel>
              </div>
              <div className={clsx('', styles.rightBottom)}>
                <SalesPanel
                  className={clsx('d-flex justify-content-end')}
                  sales={rightBottomPanel}
                >
                  {getContent(rightBottomPanel)}
                </SalesPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
