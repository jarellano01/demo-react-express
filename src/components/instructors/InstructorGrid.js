import React, {Component} from 'react'
import {Icon, Header, Grid} from 'semantic-ui-react';
import SearchBox from './SearchBox';
import PersonCard from './PersonCard';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getInstructors} from '../../store/actions/instructor_actions';


class InstructorGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: []
        };
    }

    renderCards = () => {

        return this.props.instructors.all.map((item, i) => {
            return (
                <Grid.Column key={item.id} mobile={16} tablet={4} computer={3}>
                    <PersonCard
                        header={item.title}
                        subHeader='Something will go here'
                        description='test description'
                        imgSrc={item.images.small}
                        link={`${this.props.match.url}/${item.id}`}
                    />
                </Grid.Column>
            )
        })
    };

    updateResults = (results) => {
        this.setState({results})
    };

    render() {

        return (
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Header as='h2' dividing>
                            <Icon name='users'/>
                            <Header.Content>
                                Instructors
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8} floated="right">
                        <SearchBox
                            className="right floated"
                            source={this.props.instructors.all}
                            updateResults={this.updateResults}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    {this.renderCards()}
                </Grid.Row>
            </Grid>
        )

    }
}

function mapStateToProps(state) {
    return {
        instructors: state.instructors
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getInstructors}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InstructorGrid));