import * as React from 'react';
import example from '../img/example-context.png';

export const SlideThree = () => (
    <>
        <h1>React Context</h1>
        <h2>An API in React allowing for sharing of data without directly passing through props.</h2>
        <img src={example} />
        <p>Notice: `createContext` and `useContext`</p>
    </>
);