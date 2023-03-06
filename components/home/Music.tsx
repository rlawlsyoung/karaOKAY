import React from 'react';
import { RiFileAddFill } from 'react-icons/ri';
import styled from 'styled-components';

import MusicType from '@/atom';

const Music: React.FC<MusicType> = ({ no, title, singer, composer, lyricist }) => {
  return (
    <MusicContainer>
      <p className="num flex-center">{no}</p>
      <p className="title flex-center">{title}</p>
      <p className="singer flex-center">{singer}</p>
      <p className="lyricist flex-center">{composer}</p>
      <p className="composer flex-center">{lyricist}</p>
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
