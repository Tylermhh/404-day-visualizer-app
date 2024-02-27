import { useNavigate } from 'react-router-dom';
import Navbar from "./Nav/Nav";

function Main() {
    const navigate = useNavigate();
 
    const goToTaskPageComp = () => {
 
        // This will navigate to second component
        navigate('/task');
    };
    const gotToHomePageComp = () => {
 
        // This will navigate to first component
        navigate('/home');
    };
 
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <p>Auth Page</p>
                <button onClick={gotToHomePageComp}>
                    go to Home Page
                </button>
                <button onClick={goToTaskPageComp}>
                    go to Task Page
                </button>
            </header>
        </div>
    );
}
 
export default Main;