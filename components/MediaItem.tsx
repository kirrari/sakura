'use client';

import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const revalidate = 0;

type MediaItemProps = {
  song: Song;
  onClick?: (id: string) => void;
  isActive: boolean;
};

const MediaItem: React.FC<MediaItemProps> = ({ song, onClick, isActive }) => {
  const imgUrl = useLoadImage(song);

  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        'flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 transition w-full p-2 rounded-lg',
        isActive && 'bg-neutral-800/50'
      )}
    >
      <div className="relative rounded-lg min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imgUrl || '/images/liked.png'}
          alt="Song cover"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 oveflow-hidden">
        <p className="truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
