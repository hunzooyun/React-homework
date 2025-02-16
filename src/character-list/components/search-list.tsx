import { CharacterJob } from '../types/types';
import CharacterCard from './character';

interface Props {
  jobs: CharacterJob[];
  query: string;
}

function SearchedList({ jobs, query }: Props) {
  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ul className="job-list">
      {filteredJobs.length === 0 ? (
        <p>검색된 직업이 없습니다.</p>
      ) : (
        filteredJobs.map((job) => <CharacterCard key={job.id} job={job} />)
      )}
    </ul>
  );
}

export default SearchedList;
