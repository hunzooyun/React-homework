import { useState } from 'react';
import { CharacterJob } from './types/types';
import characterList from './data/data';
import SearchForm from './components/search-form';
import SearchedList from './components/search-list';
import CategoryFilter from './components/category-filter';

function App() {
  const [jobs] = useState<CharacterJob[]>(characterList);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredJobs = jobs.filter(
    (job) =>
      (selectedCategory === '전체' || job.category === selectedCategory) &&
      job.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>직업 선택</h1>
      <SearchForm query={query} setQuery={setQuery} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchedList jobs={filteredJobs} query={query} />
    </div>
  );
}

export default App;
