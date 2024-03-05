import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const goToAuthenticationPageComp = () => {
    navigate('/auth');
};

const goToHomePageComp = () => {
    navigate('/home');
};

const goToTaskPageComp = () => {
    navigate('/task');
};

const goToVisualizePageComp = () => {
    navigate('/visualize');
}