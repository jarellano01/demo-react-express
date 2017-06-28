import React, {Component} from 'react';
import {Image, Header, Icon} from 'semantic-ui-react';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header as='h2' dividing>
                    <Icon name='dashboard' />
                    <Header.Content>
                        Dashboard
                    </Header.Content>
                </Header>
                <Image src='/api/instructor/1/image?width=500' size='small'/>
            </div>
        )

    }
}

export default Dashboard;