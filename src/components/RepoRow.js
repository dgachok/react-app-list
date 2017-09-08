import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RepoRow extends Component {
    onClick = () => {
        this.props.onClick(this.props.repo);
    };

    render() {
        return (
            <tr
                className={'cursor-pointer ' + (this.props.repo.id === this.props.selected.id ? ' table-info ' : '')}
                onClick={this.onClick}
            >
                <th scope="row">{this.props.index}</th>
                <td>{this.props.repo.name}</td>
            </tr>
        );
    }
}

RepoRow.propTypes = {
    repo: PropTypes.object.isRequired,
    selected: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default RepoRow;