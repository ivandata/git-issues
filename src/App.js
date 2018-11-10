import React, { Component } from 'react';
import IssueList from 'components/IssueList';
import Footer from 'components/Footer';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      isLoading: false,
      error: null
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const result = await fetch('https://api.github.com/repos/facebook/react/issues')
        .then((response) => {
          if (response.status >= 200 && response.status < 300) return response;

          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        })
        .then((response) => {
          if (response.status === 204 || response.status === 205) return null;
          return response.json();
        });

      this.setState({
        issues: result,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }

  render() {
    const { issues, isLoading, error } = this.state;
    const issuesListProps = {
      isLoading,
      error,
      issues,
    };

    return (
      <div className="app">
        <main className="app-content">
          <IssueList {...issuesListProps }/>
        </main>
        <Footer loading={this.state.isLoading}/>
      </div>
    );
  }
}

export default App;
