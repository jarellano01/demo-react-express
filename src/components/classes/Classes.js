import React, {Component} from 'react';
import {Header, Icon} from 'semantic-ui-react';

class Classes extends Component {
    render() {
        return (
            <div>
                <Header as='h2' dividing>
                    <Icon name='list layout' />
                    <Header.Content>
                        Classes
                    </Header.Content>
                </Header>
                test
            </div>
        )

    }
}

export default Classes;