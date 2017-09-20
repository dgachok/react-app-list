import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RepoCard extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.repo.owner.avatar_url}
                     className="card-img-top height-225 object-fit-contain"
                     alt="avatar"/>
                <div className="card-block">
                    <h4 className="card-title">Information about the repository</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.repo.full_name || '-'}</li>
                    <li className="list-group-item">
                        <a href={this.props.repo.html_url}>{this.props.repo.html_url || '-'}</a>
                    </li>
                    <li className="list-group-item">{this.props.repo.description || '-'}</li>
                    <li className="list-group-item">{this.props.repo.language || '-'}</li>
                    <li className="list-group-item">{this.props.repo.owner.login || '-'}</li>
                </ul>
            </div>
        );
    }
}

RepoCard.propTypes = {
    repo: PropTypes.object.isRequired
};

export default RepoCard;