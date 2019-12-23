import * as React from 'react';
import factory from '../img/factory-md.png';

export const SlideTwo = () => (
    <>
        <h1>What is an "object factory"?</h1>
        <h2>An object factory is a software design pattern.<br />
        Factories are similar to classes, but with more control over the type of the returned object.</h2>
        <p>"The key objective of the Factory Method is extensibility.<br />
            Factory Methods are frequently used in applications that manage,<br />
            maintain, or manipulate collections of objects that are different<br />
            but at the same time have many characteristics (i.e. methods and properties)<br />
            in common."</p>
        <img src={factory} />
        <p>source: <a href="https://www.dofactory.com/javascript/factory-method-design-pattern">Factory Method Design Pattern</a></p>
    </>
);