import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import InstructorGrid from './InstructorGrid';
import InstructorProfile from './InstructorProfile';
import {
    Route
} from 'react-router-dom'


class Instructors extends Component {
    render() {
        let {match} = this.props;
        return (
            <div>
                <Route path={`${match.url}/:id`} render={() => <InstructorProfile test="test" /> } />
                
                <Route exact path={`${match.url}`} test="test" component={InstructorGrid}/>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        instructors: state.instructors
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Instructors));