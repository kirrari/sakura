import getSongsByTitle from '@/actions/getSongsByTitle';
import SearchContent from './components/SearchContent';
import SearchInput from '@/components/SearchInput';
import Header from '@/components/Header';

export const revalidate = 0;

type SearchProps = {
  searchParams: {
    title: string;
  };
};

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className="w-full h-full rounded-lg bg-neutral-900 overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2 flex flex-col gap-y-3">
          <h1 className="text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
