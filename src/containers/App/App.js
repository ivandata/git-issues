import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchIssues } from './actions'
import IssueList from 'components/IssueList';
import Footer from 'components/Footer';
import './styles.css';

class App extends Component {
  componentDidMount() {
    this.props.onPaginatedSearch(this.props.page);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
      && this.props.issues.length && !this.props.isLoading
    ) {
      this.props.onPaginatedSearch(this.props.page);
    }
  };

  render() {
    const { isLoading, issues, error } = this.props;
    const issuesListProps = { error, issues,};

    return (
      <div className="app">
        <main className="app-content">
          <IssueList { ...issuesListProps }/>
        </main>
        <Footer loading={ isLoading }/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    issues: store.issues,
    isLoading: store.isLoading,
    error: store.error,
    page: store.page
  }
};

const mapDispatchToProps = dispatch => ({
  onPaginatedSearch: page => dispatch(fetchIssues(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
