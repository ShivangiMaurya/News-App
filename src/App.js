import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })

  }
  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
            // onLoaderFinished={() => this.setProgress(0)}
            />
            <Switch>
              console.log("hhhhhhh");

              <Route exact path="/"><News setProgress={this.setProgress} pageSize={5} country="us" category="business" /> </Route>

              <Route exact path="/business"><News setProgress={this.setProgress} pageSize={5} country="us" category="business" /> </Route>

              <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={5} country="us" category="entertainment" /> </Route>

              <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={5} country="us" category="general" /> </Route>

              <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={5} country="us" category="health" /> </Route>

              <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={5} country="us" category="science" /> </Route>

              <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={5} country="us" category="sports" /> </Route>

              <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={5} country="us" category="technology" /> </Route>


            </Switch>

          </Router>
        </div>
      </>
    )
  }
}

export default App;
