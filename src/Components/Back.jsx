import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Back = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button type="button" onClick={goBack}>
      <ArrowBackIosIcon className="text-white" />
    </button>
  );
};

export default Back;
