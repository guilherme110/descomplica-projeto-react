/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Greeting from './src/Greeting';
import Home from './src/Home';

const App = () => {
  return (
    <Home>
      <Greeting nome="Guilherme" />
    </Home>
  )
}

export default App;
