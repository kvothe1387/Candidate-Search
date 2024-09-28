import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import CandidateCard from '../components/CandidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });

  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const searchForSpecificUser = async (user: string) => {
    try {
      const data: Candidate = await searchGithubUser(user);
      setCurrentUser(data);
    } catch (error) {
      console.error('Error fetching specific user:', error);
    }
  };

  const searchForUsers = async () => {
    try {
      const data: Candidate[] = await searchGithub();
      setResults(data);

      if (data.length > 0) {
        await searchForSpecificUser(data[currentIdx]?.login || '');
      }
    } catch (error) {
      console.error('Error fectching users:', error);
    }
  };

  const makeDecision = async (isSelected: boolean) => {
    if (isSelected) {
      try {
        const SavedCandidates = localStorage.getItem('savedCandidates');
        const parsedCandidates = savedCandidates ? JSON.parse(savedCandidates) : [];
        parsedCandidates.push(currentUser);
        localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
      } catch (error) {
        console.error('Error saving candidate:', error);
      }
    }

    const nextIdx = currentIdx + 1;

    if (nextIdx < results.length) {
      setCurrentIdx(nextIdx);
      await searchForSpecificUser(results[nextIdx]?.login || '');
    } else {
      setCurrentIdx(0);
      await searchForUsers();
    }
  };

  useEffect(() => {
    searchForUsers();
  }, []);

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard currentUser={currentUser} makeDecision={makeDecision} />
    </>
  );
};

export default CandidateSearch;
