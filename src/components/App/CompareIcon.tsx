import React from 'react';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useNavigate } from 'react-router-dom';

const CompareIcon: React.FC = () => {
  const navigate = useNavigate();

  const handleCompare = () => {
    navigate('/compare');
  };

  return (
    <div style={{ position: 'absolute', top: 10, right: 10 }}>
      <CompareArrowsIcon onClick={handleCompare} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default CompareIcon;