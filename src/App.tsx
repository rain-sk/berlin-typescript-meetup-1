import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { SlideOne } from './slides/SlideOne';
import { SlideTwo } from './slides/SlideTwo';
import { SlideThree } from './slides/SlideThree';
import { SlideFour } from './slides/SlideFour';
import { SlideFive } from './slides/SlideFive';
import { SlideSix } from './slides/SlideSix';
import { SlideSeven } from './slides/SlideSeven';

const App: React.FC = () => {
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    window.location.hash = `/${page}`;
  }, [page]);

  React.useEffect(() => {
    const keyDownCallback = (ev: KeyboardEvent) => {
      if (ev.keyCode === 37) {
        setPage(Math.max(1, page - 1));
      } else if (ev.keyCode === 39) {
        setPage(Math.min(7, page + 1));
      }
    };
    document.addEventListener('keydown', keyDownCallback);
    return () => {
      document.removeEventListener('keydown', keyDownCallback);
    };
  }, [page]);

  return (
    <HashRouter>
      <div className="App">
        <Route path="/1" exact component={SlideOne} />
        <Route path="/2" exact component={SlideTwo} />
        <Route path="/3" exact component={SlideThree} />
        <Route path="/4" exact component={SlideFour} />
        <Route path="/5" exact component={SlideFive} />
        <Route path="/6" exact component={SlideSix} />
        <Route path="/7" exact component={SlideSeven} />
      </div>
    </HashRouter>
  );
}

export default App;
