import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { searchedMusicAtom } from '@/atom';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import styled from 'styled-components';

import { responsive, blurredDeepGray, middleGray } from '@/styles/theme';

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const [searchedMusic, setSearchedMusic] = useRecoilState(searchedMusicAtom);
  const [searchType, setSearchType] = useState('song');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      axios
        .get(
          `https://api.manana.kr/karaoke/${searchType}/${searchRef.current.value.replace(
            /(\s*)/g,
            '',
          )}/tj.json`,
        )
        .then((res) => {
          setSearchedMusic(res.data);
        });
    }
  };

  const changeSearchType = () => {
    searchType === 'song' && setSearchType('singer');
    searchType === 'singer' && setSearchType('song');
  };

  return (
    <SearchBarContainer onSubmit={handleSearch}>
      <Select className="flex-center" onClick={changeSearchType}>
        {searchType === 'song' ? '곡 명' : '가수 명'}
        <CgArrowsExchangeAltV size={24} />
      </Select>
      <Search
        name="search"
        placeholder="곡/가수 명을 입력해주세요."
        ref={searchRef}
        autoComplete="off"
      />
      <Button>검색</Button>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.form`
  display: flex;
  box-shadow: 0px 0px 7.5px 7.5px ${blurredDeepGray};
  background-color: ${blurredDeepGray};
  padding: 10px;
`;

const Select = styled.div`
  position: relative;
  width: 90px;
  height: 35px;
  padding-right: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${middleGray};
  font-family: 'Pretendard';
  font-size: 18px;
  cursor: pointer;

  svg {
    position: absolute;
    right: 0;
  }
`;

const Search = styled.input`
  width: calc(1080px - 200px);
  margin: 0 15px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${middleGray};
  font-family: 'Pretendard';
  font-size: 18px;

  @media ${responsive.desktop} {
    width: calc(90vw - 200px);
  }
`;

const Button = styled.button`
  width: 60px;
  border: none;
  color: white;
  background-color: transparent;
  color: ${middleGray};
  font-family: 'Pretendard';
  font-size: 18px;
  cursor: pointer;
`;

export default SearchBar;
