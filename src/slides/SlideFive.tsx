import * as React from 'react';
import actionMap from '../img/action-map.png';
import createFlux from '../img/create-flux.png';
import useFlux from '../img/i-use-flux.png';

export const SlideFive = () => (
    <>
        <h1>So what does the code look like?</h1>
        <h2>{`< 100 lines, mostly generics-magic and native React APIs`}</h2>
        <img src={actionMap} />
        <br />
        <img src={createFlux} />
        <br />
        <img src={useFlux} />
    </>
);