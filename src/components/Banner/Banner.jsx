import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';
import bannerImg from 'assets/img/banner_git.jpg';

const cx = classNames.bind(style);

const Banner = () => {
  return (
    <div className={cx('banner-container')}>
      <div className={cx('banner-inner')}>
        <p className={cx('repo-search-title')}>Seach repo from github</p>
        <input className={cx('repo-search-input')} />
      </div>
    </div>
  )
}

export default Banner;