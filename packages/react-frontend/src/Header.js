import React from 'react';

function Header() {
    const headerStyle = {
        //borderBottom: '2px solid #333', // Add an underline to the header
        paddingTop: '10px',
        paddingBottom: '10px' // Optional: Add some space between the text and the underline
    };
      
    return (
        <header style={headerStyle}>
            <button class="square-button">Home</button>
            <button class="square-button">Todo</button>
            <button class="square-button">Visualizer</button>
            <button class="square-button">=</button>
            {/* Add navigation links or any other elements here */}
        </header>
  );
}

export default Header;