import React, { useState, useMemo } from 'react'


//useMemo hook are used when in your component there is a so many.function are present and it will rerender unceassery when the component is render. so to avoid the unecessary re-rendring we are use the useMemo hook.

const App = () => {
    const [count, setCount] = useState(0);
    const [decre, setDecre] = useState(0);

    const multiplay = useMemo(() => {
        return count * 10;
    }, [count])
    return (
        <div>
            <h1>useMemo hook</h1>
            <h5>multiplay</h5>
            <span>{multiplay}</span>
            <br />
            {/* increment */}
            <button onClick={() => setCount(count + 1)}>increment</button>&nbsp;
            <span>{count}</span>
            <br />
            {/*  dcrement */}
            <button onClick={() => setDecre(decre + 1)}>increment</button>&nbsp;
            <span>{decre}</span>
        </div>
    )
}

export default App