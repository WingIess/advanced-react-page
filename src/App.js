import React, { Component, lazy, Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Layout from './containers/Layout';

const Counter = lazy(() => import('./containers/Counter'));
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Fragment>
                        <Layout />
                        <Switch>
                            <Route path={'/'} exact render={() => <Home />} />
                            <Route
                                path={'/counter'}
                                exact
                                render={() => (
                                    <Suspense fallback={<div>loading...</div>}>
                                        <Counter />
                                    </Suspense>
                                )}
                            />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        );
    }
}

export default App;
