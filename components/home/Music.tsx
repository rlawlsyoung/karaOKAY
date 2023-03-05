import { RiFileAddFill } from 'react-icons/ri';
import styled from 'styled-components';

const Music = () => {
  return (
    <MusicContainer>
      <p className="num flex-center">12345</p>
      <p className="title flex-center">Eastern Youth</p>
      <p className="singer flex-center">초록불꽃소년단</p>
      <p className="lyricist flex-center">조기철</p>
      <p className="composer flex-center">조기철</p>
      <RiFileAddFill size={26} />
    </MusicContainer>
  );
};

const MusicContainer = styled.div`
  display: flex;
  align-items: center;
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

  svg {
    width: 10%;
    cursor: pointer;
  }
`;

export default Music;
