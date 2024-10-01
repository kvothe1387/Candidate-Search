import type { Candidate } from "../interfaces/Candidate.interface";
import { IoRemoveCircle } from "react-icons/io5";

type SavedCandidateProps = {
  candidate: Candidate;
  rejectCandidate: (id: number) => void;
};

const SavedCandidate = ({
  candidate,
  rejectCandidate,
}: SavedCandidateProps) => {
  return (
    <tr>
      {candidate ? (
        <>
          <td>
            <img
              src={`${candidate.avatar_url}`}
              alt={`Profile of ${candidate.login}`}
              style={{
                width: '60px',
                borderRadius: '15px',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </td>
        </>
      )}
    </tr>
  )
}







export default SavedCandidate;