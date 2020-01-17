import React from 'react';
import DSContainer from './components/DSContainer';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './views/HomeScreen';
import TestScreen from './views/TestScreen';
import ArticleScreen from './views/ArticleScreen';


const App: React.FC = () => {
  return (
    <DSContainer>
        <Router>
          <Route
            path="/"
            exact
            component={HomeScreen}
          />
          <Route
            path="/category/:id"
            exact
            component={HomeScreen}
          />
          <Route
            path="/article/:slug"
            exact
            component={ArticleScreen}
          />
        </Router>
    </DSContainer>
  );
}

export default App;
