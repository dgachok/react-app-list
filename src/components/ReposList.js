import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RepoRow from "./RepoRow";

class ReposList extends Component {
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
                        <RepoRow
                            onClick={this.props.onClick}
                            key={repo.id}
                            index={index}
                            repo={repo}
                            selected={this.props.selected}
                        />
                    ))
                }
                </tbody>
            </table>
        );
    }
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ReposList;