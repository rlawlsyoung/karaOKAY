import styled from 'styled-components';

import Music from './Music';

import { deepGray, lightGray, middleGray, blurredDeepGray } from '@/styles/theme';

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
  margin-top: 40px;
  box-shadow: 0px 0px 7.5px 7.5px ${blurredDeepGray};
  background-color: ${blurredDeepGray};
  color: ${middleGray};
`;

const Header = styled.div`
  display: flex;
  padding-right: 15px;
  border-bottom: 1px solid ${lightGray};
  p {
    padding: 15px 0;
  }

  .num {
    width: 10%;
  }

  .title {
    width: 35%;
  }

  .singer,
  .lyricist,
  .composer {
    width: 15%;
  }
`;

const Body = styled.div`
  height: calc(100vh - 278px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${lightGray};
  }
`;
export default MusicList;
