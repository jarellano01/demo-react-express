import React, {Component} from 'react'
import {Sidebar, Segment, Menu, Icon} from 'semantic-ui-react';
import {NavLink, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


class SidebarLeftUncover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            activeItem: {},
        }
    }

    //toggleVisibility = () => this.setState({visible: !this.state.visible});

    renderMenuItems = () => {
        let {pages} = this.props;
        return pages.map(item => {
            return (
                <Menu.Item
                    name={item.name}
                    key={item.name}
                    as={NavLink}
                    to={item.path}
                    activeClassName="active"
                    exact={item.path==='/'}
                >
                    <Icon name={item.icon}/>
                    {item.name}
                </Menu.Item>
            )
        })
    };

    render() {
        const {visible} = this.state;
        return (
            <div>
                {/*<Sidebar.Pushable as={Segment}>*/}
                    <Sidebar
                        as={Menu}
                        animation='uncover'
                        width='very thin'
                        visible={visible}
                        icon='labeled'
                        vertical inverted
                        className='fixed menu'
                        style={{height: "100%"}}
                    >
                        <Menu.Item header>Menu</Menu.Item>

                        {this.renderMenuItems()}

                    </Sidebar>
                    {/*<Sidebar.Pusher dimmed={this.state.visible} >*/}

                    {/*</Sidebar.Pusher>*/}
                {/*</Sidebar.Pushable>*/}
                <Segment basic style={{marginLeft: visible? 100 : 0, marginTop:0}}>
                    {/*<Button onClick={this.toggleVisibility}>Toggle Visibility</Button>*/}
                    {this.props.children}
                </Segment>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        pages: state.pages
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarLeftUncover));