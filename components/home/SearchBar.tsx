import styled from 'styled-components';

import { deepGray } from '@/styles/theme';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Select>
        <option value="곡명">곡 명</option>
        <option value="가수명">가수 명</option>
      </Select>
      <Search placeholder="곡/가수명을 입력하세요." />
      <Button>검색</Button>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.form`
  display: flex;
  background-color: ${deepGray};
  padding: 10px;
`;

const Select = styled.select`
  background-color: transparent;
  color: white;
`;

const Search = styled.input`
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  color: white;
  background-color: transparent;
`;

export default SearchBar;
