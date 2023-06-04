import styled from 'styled-components';

import SearchBar from '@/components/home/SearchBar';
import MusicList from '@/components/home/MusicList';

export default function Home() {
  return (
    <StyledHome className="flex-center">
      <SearchBar />
      <MusicList />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  flex-direction: column;

  margin: 30px 0;
  font-size: 18px;
`;
