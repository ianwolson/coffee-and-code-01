import React, { useState } from 'react';

const Input = ({ onLocationSubmit }) => {
    const [location, setLocation] = useState('');

    const handleInputChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        onLocationSubmit(location);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={handleInputChange}
                />
                <button type="submit">Get Weather</button>
            </form>
        </>
    );
};

export default Input;