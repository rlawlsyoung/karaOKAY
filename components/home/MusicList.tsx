import { useRecoilValue } from 'recoil';
import { searchedMusicAtom } from '@/atom';
import styled from 'styled-components';

import Music from './Music';

import { responsive, lightGray, middleGray, blurredDeepGray } from '@/styles/theme';

const MusicList = () => {
  const searchedMusic = useRecoilValue(searchedMusicAtom);
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
        {searchedMusic.map((music) => (
          <Music
            key={music.no}
            no={music.no}
            title={music.title}
            singer={music.singer}
            composer={music.composer}
            lyricist={music.lyricist}
          />
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

  @media ${responsive.mobile} {
    font-size: 14px;
  }
`;

const Header = styled.div`
  display: flex;
  padding-right: 15px;
  border-bottom: 1px solid ${lightGray};
  white-space: nowrap;
  p {
    padding: 15px 7.5px;
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

  @media ${responsive.mobile} {
    .num {
      width: 20%;
    }
    .title {
      width: 30%;
    }
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
