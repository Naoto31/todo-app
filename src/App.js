import React, { useState } from 'react';

function App() {

    const [isClicked, getLine] = useState(false);

    function handleLine() {  
        getLine(true);
    }

    return (
        <div>
            <h1 style={{ textDecoration: isClicked ? "line-through" : null}}>Hello</h1>
            <button onClick={handleLine}> Line </button>
        </div>
    )
}

export default App;