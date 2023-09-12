'use client';

import SongItem from '@/components/SongItem';
import { Song } from '@/types';

type PageContentProps = {
  songs: Song[];
};

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-2 text-neutral-400">No songs available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={() => {}}
          song={song}
        />
      ))}
    </div>
  );
};

export default PageContent;
