import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { searchedMusicAtom } from '@/atom';
import axios from 'axios';
import styled from 'styled-components';

import { deepGray, blurredDeepGray, middleGray } from '@/styles/theme';

const SearchBar = () => {
  const [searchedMusic, setSearchedMusic] = useRecoilState(searchedMusicAtom);

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      axios
        .get(
          `https://api.manana.kr/karaoke/song/${searchRef.current.value.replace(
            /(\s*)/g,
            '',
          )}/tj.json`,
        )
        .then((res) => {
          console.log(res.data);
          setSearchedMusic(res.data);
        });
    }
  };

  return (
    <SearchBarContainer onSubmit={handleSearch}>
      <Select>
        <option value="곡명">곡 명</option>
        <option value="가수명">가수 명</option>
      </Select>
      <Search name="search" placeholder="곡/가수 명을 입력해주세요." ref={searchRef} />
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

const Select = styled.select`
  width: 80px;
  height: 35px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${middleGray};
  font-family: 'Pretendard';
  font-size: 18px;

  option {
    background-color: ${deepGray};
  }
`;

const Search = styled.input`
  width: calc(1080px - 190px);
  margin: 0 15px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${middleGray};
  font-family: 'Pretendard';
  font-size: 18px;
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
