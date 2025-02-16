interface Props {
  query: string;
  setQuery: (query: string) => void;
}

function SearchForm({ query, setQuery }: Props) {
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="직업 검색"
    />
  );
}

export default SearchForm;
