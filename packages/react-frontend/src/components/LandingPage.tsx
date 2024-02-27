import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Nav/Nav";

function Main() {
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
    
    return (
        <div className="App">
            <Navbar />
            <h1>
                Landing Page
            </h1>
        </div>
    );
}
 
export default Main;