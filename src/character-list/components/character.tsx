import { CharacterJob } from '../types/types';

interface Props {
  job: CharacterJob;
}

function CharacterCard({ job }: Props) {
  return (
    <li className="character-card">
      <img src={job.image} alt={job.name} />
      <p>{job.name}</p>
    </li>
  );
}

export default CharacterCard;
