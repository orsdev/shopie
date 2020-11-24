import React, { Suspense } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LoadingScreen from './components/loading-screen';
import Header from './components/header';
import Router from './router/router';
import './assets/css/style.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen />}>
        <Header />
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
