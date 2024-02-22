import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from "./Nav/Nav";

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
            <Nav />
            <h1>
                Landing Page
            </h1>
        </div>
    );
}
 
export default Main;