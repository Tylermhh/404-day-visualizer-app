import React from 'react';

function Header() {
    const headerStyle = {
        borderBottom: '2px solid #333', // Add an underline to the header
        //paddingBottom: '5px' // Optional: Add some space between the text and the underline
    };
      
    return (
        <header style={headerStyle}>
            <h1>Todo List Coming Up</h1>
            {/* Add navigation links or any other elements here */}
        </header>
  );
}

export default Header;