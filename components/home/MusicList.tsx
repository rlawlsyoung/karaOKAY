import styled from 'styled-components';

import Music from './Music';

import { deepGray, lightBlack, lightGray, middleGray } from '@/styles/theme';

const MusicList = () => {
  const a = [1, 2, 3, 4, 5, 6, 65, 2, 45, 45, 45, 45, 4, 42, 4324];
  return (
    <MusicListContainer>
      <Header>
        <p className="num flex-center">곡 번호</p>
        <p className="title flex-center">곡 제목</p>
        <p className="singer flex-center">가수</p>
        <p className="lyricist flex-center">작사</p>
        <p className="composer flex-center">작곡</p>
      </Header>
      <Body>
        {a.map((music) => (
          <Music />
        ))}
      </Body>
    </MusicListContainer>
  );
};

const MusicListContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  background-color: ${deepGray};
  color: ${middleGray};
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid ${lightGray};
  background-color: transparent;
  p {
    padding: 15px 0;
    background-color: transparent;
  }

  .num {
    width: 10%;
  }

  .title {
    width: 50%;
  }

  .singer,
  .lyricist,
  .composer {
    width: 20%;
  }
`;

const Body = styled.div`
  height: 40vh;
  background-color: transparent;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${lightGray};
  }
`;
export default MusicList;
