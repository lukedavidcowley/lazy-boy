import React from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './routes';

const App = (props) => {
  const routeResult = useRoutes(Routes);
  return routeResult;
}

export default App;
