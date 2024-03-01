import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/promotionsRedux';
import styles from './Promotions.module.scss';
import { clsx } from 'clsx';
import SalesPanel from '../../common/SalesPanel/SalesPanel';

const Promotions = () => {
  const promotions = useSelector(getAll);

  const leftPanel = promotions.find(item => item.type === 'left-panel');
  const rightUpperPanel = promotions.find(item => item.type === 'right-upper-panel');
  const rightBottomPanel = promotions.find(item => item.type === 'right-bottom-panel');

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
          <div className={clsx('col-sm-6', styles.leftPanel)}>
            <SalesPanel className='p-4' sales={leftPanel}>
              <div className={clsx('d-flex align-items-end', styles.bkg)}>
                {getContent(leftPanel)}
              </div>
            </SalesPanel>
          </div>
          <div className={clsx('col-sm-6 d-flex flex-column', styles.rightPanel)}>
            <div className={styles.rightUpper}>
              <SalesPanel
                className='d-flex justify-content-end'
                sales={rightUpperPanel}
              >
                {getContent(rightUpperPanel)}
              </SalesPanel>
            </div>
            <div className={styles.rightBottom}>
              <SalesPanel
                className='d-flex justify-content-end'
                sales={rightBottomPanel}
              >
                {getContent(rightBottomPanel)}
              </SalesPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
