import { atom } from 'recoil';

export default interface MusicType {
  brand?: string;
  composer: string;
  lyricist: string;
  no: string;
  release?: string;
  singer: string;
  title: string;
}

const searchedMusicAtom = atom<MusicType[] | []>({
  key: 'searchedMusic',
  default: [],
});

export { searchedMusicAtom };
