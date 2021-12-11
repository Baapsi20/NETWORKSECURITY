import React, { Component } from 'react';
class Counters extends React.Component {
    render() { 
        return <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter /> 
        </div>;
    }
}
 
export default Counters;