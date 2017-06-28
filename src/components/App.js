import React, {Component} from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar';
import Dashboard from './dashboard/Dashboard';
import Classes from './classes/Classes';
import Instructors from './instructors/Instructors'
import NotFound from './NotFound';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getInstructors} from '../store/actions/instructor_actions';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends Component {
    componentWillMount(){
        this.props.getInstructors();
    }

    render() {
        return (
            <Router>
                <Sidebar>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/classes" component={Classes}/>
                        <Route path="/instructors" component={Instructors}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Sidebar>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getInstructors}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
