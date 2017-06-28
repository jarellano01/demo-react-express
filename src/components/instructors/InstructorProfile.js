import React, {Component} from 'react'
import {Grid, Header, Icon, Image, Breadcrumb, Button, Form, Segment, Loader,Dimmer} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {getInstructor, resetSelectedInstructor} from '../../store/actions/instructor_actions';
import {connect} from 'react-redux';

const options = [
    {key: '1', text: 'Employee', value: 'Employee'},
    {key: '2', text: 'Contractor', value: 'Contractor'},
];

class InstructorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentWillMount() {
        this.props.getInstructor(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.resetSelectedInstructor();
    }

    updateResults = (results) => {
        this.setState({results})
    };

    handleChange = (e, {value}) => this.setState({value});

    renderGrid = () => {
        let {selected} = this.props.instructors;
        console.log(this.props);
        return (
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Breadcrumb size='large'>
                            <Breadcrumb.Section as={Link} to="/">Home</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron'/>
                            <Breadcrumb.Section as={Link} to="/instructors">Instructors</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron'/>
                            <Breadcrumb.Section active>Instructor Profile</Breadcrumb.Section>
                        </Breadcrumb>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Header as='h2' dividing>
                            <Icon name='user'/>
                            <Header.Content>
                                {selected.title}
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={4} computer={4}>
                        <Image src={selected.images.small} shape="rounded"/>
                        <Button secondary style={{width: "100%", marginTop: "12"}}>Upload New Picture</Button>

                    </Grid.Column>
                    <Grid.Column width={12} floated="right">
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input label='Title' placeholder='Title' value={selected.title}/>
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input label='Email' placeholder='email' value={selected.email}/>
                                <Form.Select label='Contract Type' options={options} placeholder='Contract Type'
                                             value={selected.contractType}/>
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input label='Youtube Playlist Name' placeholder='youtube playlist name'
                                            value={selected.youtubePlaylistName}/>
                            </Form.Group>
                            <Form.TextArea label='Short Description'
                                           placeholder='Short description about the Instructor' rows={2} maxLength={200}
                                           value={selected.shortDescription}/>
                            <Form.TextArea label='Bio' placeholder='Bio instructor.' value={selected.bio}/>
                            <Form.Button>Update</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >

                </Grid.Row>
            </Grid>
        )
    }

    render() {
        let {selected} = this.props.instructors;
        if (selected) {
            return (
                <div>
                    {this.renderGrid()}
                </div>
            )
        } else {
            return (
                <Segment>
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                </Segment>
            )
        }


    }
}

function mapStateToProps(state) {
    return {
        instructors: state.instructors
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getInstructor, resetSelectedInstructor}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InstructorProfile));