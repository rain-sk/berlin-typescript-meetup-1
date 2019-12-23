import * as React from 'react';

interface IExampleData {
    name: string;
    id: number;
}

const initialData = { name: "example", id: 1 };

const ExampleContext = React.createContext<IExampleData>(initialData);

export const ExampleApp = () => {
    const [data] = React.useState<IExampleData>(initialData);

    return (
        <ExampleContext.Provider value={data}>
            <FirstChild />
        </ExampleContext.Provider>
    );
};

const FirstChild = () => {
    return (
        <SecondChild />
    );
};

const SecondChild = () => {

    const data = React.useContext(ExampleContext);

    return (
        <>
            <p>Name: {data.name}</p>
            <p>Id: {data.id}</p>
        </>
    );
}


