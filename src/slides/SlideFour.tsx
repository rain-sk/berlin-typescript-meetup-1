import * as React from 'react';
import newFlux from '../img/new-flux.png';
import provideFlux from '../img/provide-flux.png';
import useFlux from '../img/use-flux.png';
import dispatchFlux from '../img/dispatch-flux.png';

export const SlideFour = () => (
    <>
        <h1>use-flux</h1>
        <h2>A lightweight global state library (like Redux) which leverages Types, Hooks, and Context.</h2>
        <img src={newFlux} />
        <img src={provideFlux} />
        <img src={useFlux} />
        <img src={dispatchFlux} />
    </>
);