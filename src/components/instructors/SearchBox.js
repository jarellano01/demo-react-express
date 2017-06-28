import _ from 'lodash';
import React, {Component} from 'react';
import {Search} from 'semantic-ui-react';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            results: [],
            value: ''
        }
    }

    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () => {
        this.setState({isLoading: false, results: [], value: ''}, () => {
            this.props.updateResults(this.state.results);
        })

    };

    handleResultSelect = (e, result) => {
        this.setState({value: result.title})
    };

    handleSearchChange = (e, value) => {
        let {updateResults, source} = this.props;
        this.setState({isLoading: true, value});

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = (result) => re.test(result.title);
            let results = _.filter(source, isMatch);
            this.setState({
                isLoading: false,
                results
            });
            updateResults(results);
        }, 500)
    };

    render() {
        const {isLoading, value, results} = this.state;
        let {className, source} = this.props;

        return (
            <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
                className={className}
            />
        )
    }
}

export default SearchBox;