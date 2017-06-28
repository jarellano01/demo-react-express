import _ from 'lodash';
import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let {header, subHeader, imgSrc, description, link} = this.props;

        return (
            <Card raised style={{marginBottom: 24}}>
                <Image src={imgSrc} />
                <Card.Content>
                    <Card.Header>
                        <Link to={link}>{header}</Link>
                    </Card.Header>
                    <Card.Meta>
                            <span className='date'>
                                {subHeader}
                            </span>
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user'/>
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default PersonCard;