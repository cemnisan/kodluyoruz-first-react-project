import Navbar from './components/functions/Navbar'
import resumeData from './resumeData';
import InfoContainer from './components/class/InfoContainer';
import Work from './components/class/Work'
import WorkDetails from './components/class/WorkDetails'
import Footer from './components/functions/Footer'
import Articles from './components/class/Articles'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <header>
        <Navbar />
        <Switch>  

          <Route exact path="/">
            <InfoContainer resumeData={resumeData}/>
            <Work resumeData={resumeData}/>
            <WorkDetails resumeData={resumeData}/>
          </Route>

          <Route exact path="/blog">
            <Articles resumeData={resumeData}/>
          </Route>

        </Switch>
        <Footer />
      </header>
    </Router>
    
  );
}

export default App;
