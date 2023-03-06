import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import SearchBar from '@/components/home/SearchBar';
import MusicList from '@/components/home/MusicList';

export default function Home() {
  return (
    <StyledHome>
      <RecoilRoot>
        <SearchBar />
        <MusicList />
      </RecoilRoot>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 30px 0;
  font-size: 18px;
`;
