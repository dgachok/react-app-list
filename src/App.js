import React, {Component} from 'react';
import './App.css';
import ReposList from "./components/ReposList";
import RepoCard from "./components/RepoCard";
class App extends Component {
    constructor() {
        super();

        this.state = {
            repos: [],
            currentRepo: {
                owner: {}
            },
        };
    }

    onClick = (repo) => {
        this.setState({
            currentRepo: repo,
        });
    };

    componentDidMount() {
        fetch('https://api.github.com/orgs/octokit/repos')
            .then(response => response.json())
            .then(repos => this.setState({repos, currentRepo: repos[0]}));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <ReposList repos={this.state.repos}
                                   selected={this.state.currentRepo}
                                   onClick={this.onClick}/>
                    </div>
                    <div className="col-md-6">
                        <RepoCard repo={this.state.currentRepo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
