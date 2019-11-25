import React, { useState, useEffect, useCallback } from 'react';
import CountDownTimer from './CountDownTimer';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);
const SEARCH_INPUT_POST_DEBOUNCE_TIME = 1500;
const SEARCH_API_RATE_LIMIT_SECOND = 6;
let searchInputPostDebounceTimer = null;

const Banner = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSearchInputDisabled, setIsSearchInputDisabled] = useState(false);
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);

  const handleSearchPost = useCallback((searchValue) => {
    if (isSearchInputDisabled) return;
    // TODO: call search API here
    console.log(searchValue);
    setIsSearchInputDisabled(true);
    setTimeout(() => {
      setIsSearchInputDisabled(false);
    }, SEARCH_API_RATE_LIMIT_SECOND * 1000);
  }, [isSearchInputDisabled]);

  useEffect(() => {
    const handleInputKeyDown = e => {
      if (e.keyCode === 13 && isSearchInputFocused) {
        clearTimeout(searchInputPostDebounceTimer);
        handleSearchPost(inputValue);
      }
    }

    window.addEventListener('keydown', handleInputKeyDown);
    return () => {
      window.removeEventListener('keydown', handleInputKeyDown);
    };
  }, [inputValue, isSearchInputFocused, handleSearchPost]);

  const handleSearchInputValueChange = (e) => {
    const newSearchInputValue = e.target.value;
    setInputValue(newSearchInputValue);

    if (!isSearchInputDisabled && newSearchInputValue) {
      clearTimeout(searchInputPostDebounceTimer);
      searchInputPostDebounceTimer = setTimeout(() => {
        handleSearchPost(newSearchInputValue);
      }, SEARCH_INPUT_POST_DEBOUNCE_TIME);
    }
  }

  return (
    <div className={cx('banner-container')}>
      <div className={cx('banner-inner')}>
        <h1 className={cx('repo-search-title')}>Seach repo on github</h1>
        <input
          placeholder="Enter repo key words"
          className={cx('repo-search-input')}
          value={inputValue}
          onChange={handleSearchInputValueChange}
          onFocus={() => { setIsSearchInputFocused(true) }}
          onBlur={() => { setIsSearchInputFocused(false) }}
        />
        <p className={cx('count-down-timer-container')}>
          {isSearchInputDisabled && <CountDownTimer seconds={SEARCH_API_RATE_LIMIT_SECOND} />}
        </p>
      </div>
    </div>
  )
}

export default Banner;