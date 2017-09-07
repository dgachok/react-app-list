import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ReposList extends Component {
    onClick = (repo) => {
        this.props.onClick(repo);
    };

    render() {
        return (
            <table className="table text-left">
                <thead className="thead-inverse">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.repos.map((repo, index) => (
                        <tr className={'cursor-pointer' + (repo.id === this.props.selected.id ? ' table-info ' : '')}
                            key={repo.id}
                            onClick={this.onClick.bind(this, repo)}>
                            <th scope="row">{index}</th>
                            <td>{repo.name}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        );
    }
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired
};

export default ReposList;