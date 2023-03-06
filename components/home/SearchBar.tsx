import styled from 'styled-components';

import { deepGray, blurredDeepGray, middleGray } from '@/styles/theme';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Select>
        <option value="곡명">곡 명</option>
        <option value="가수명">가수 명</option>
      </Select>
      <Search placeholder="곡/가수 명을 입력해주세요." />
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
