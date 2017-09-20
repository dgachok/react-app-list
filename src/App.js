import React, {Component} from 'react';
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
            <div>
                <nav className="navbar navbar-inverse bg-inverse fixed-top navbar-toggleable-md">
                    <button className="navbar-toggler navbar-toggler-right">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="navbar-brand">React lessons</div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="top-buffer container-fluid">
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
            </div>
        );
    }
}

export default App;
