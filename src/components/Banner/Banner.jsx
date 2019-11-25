import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const Banner = () => {
  return (
    <div className={cx('banner-container')}>
      <div className={cx('banner-inner')}>
        <h1 className={cx('repo-search-title')}>Seach repo on github</h1>
        <input className={cx('repo-search-input')} />
      </div>
    </div>
  )
}

export default Banner;