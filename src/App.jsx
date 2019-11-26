import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import './normalize.css';
import './style.css';
import { BannerWithInput, RepoData } from 'components';

const SEARCH_API_RATE_LIMIT_SECOND = 6; // API rate limit 一分鐘限定 10 次，故為 6 秒一次
const SEARCH_RESULT_PER_PAGE = 10; // 一次搜尋顯示幾筆資料

function App() {
  const [repoData, setRepoData] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isSearchInputDisabled, setIsSearchInputDisabled] = useState(false);
  const appContainerRef = useRef(null);

  const handleSearchPost = useCallback(async (searchValue, page = 1) => {
    if (isSearchInputDisabled) return;
    const searchResult =
      await axios.get(`https://api.github.com/search/repositories?q=topic:${searchValue}&page=${page}&per_page=${SEARCH_RESULT_PER_PAGE}`);
    if (page === 1) {
      setRepoData(searchResult.data.items);
    } else {
      setRepoData([...repoData, ...searchResult.data.items]);
      setPageIndex(page);
    }
    setIsSearchInputDisabled(true);
    setTimeout(() => {
      setIsSearchInputDisabled(false);
    }, SEARCH_API_RATE_LIMIT_SECOND * 1000);
  }, [isSearchInputDisabled, repoData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset + window.innerHeight >= appContainerRef.current.scrollHeight) {
        handleSearchPost(searchInputValue, pageIndex + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [pageIndex, searchInputValue, handleSearchPost]);

  return (
    <div ref={appContainerRef}>
      <BannerWithInput
        isSearchInputDisabled={isSearchInputDisabled}
        onSearchPost={handleSearchPost}
        inputValue={searchInputValue}
        setInputValue={setSearchInputValue}
      />
      <RepoData repoData={repoData} />
    </div>
  );
}

export default App;