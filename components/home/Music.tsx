import React from 'react';
import { RiFileAddFill } from 'react-icons/ri';
import styled from 'styled-components';

import MusicType from '@/atom';
import { responsive } from '@/styles/theme';

const Music: React.FC<MusicType> = ({ no, title, singer, composer, lyricist }) => {
  return (
    <MusicContainer>
      <p className="num flex-center">{no}</p>
      <p className="title flex-center">{title}</p>
      <p className="singer flex-center">{singer}</p>
      <p className="lyricist flex-center">{composer}</p>
      <p className="composer flex-center">{lyricist}</p>
      <RiFileAddFill />
    </MusicContainer>
  );
};

const MusicContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: normal;

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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    width: 10%;
    font-size: 24px;
    cursor: pointer;
  }

  @media ${responsive.mobile} {
    font-size: 12.5px;

    .num {
      width: 20%;
    }

    .title {
      width: 30%;
    }

    svg {
      width: 5%;
      font-size: 18px;
    }
  }
`;

export default Music;
