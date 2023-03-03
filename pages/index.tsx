import styled from 'styled-components';

import SearchBar from '@/components/home/SearchBar';

export default function Home() {
  return (
    <StyledHome>
      <SearchBar />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
  font-size: 18px;
`;
