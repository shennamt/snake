import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/search">
                        <h1> Search Page </h1>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;