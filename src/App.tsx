import React from 'react';
import DSContainer from './components/DSContainer';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './views/HomeScreen';


const App: React.FC = () => {
  return (
    <DSContainer>
        <Router>
          <Route
            path="/"
            exact
            component={HomeScreen}
          />
        </Router>
    </DSContainer>
  );
}

export default App;
