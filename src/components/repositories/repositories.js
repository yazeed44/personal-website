import React from 'react'
import jsonFetch from 'simple-json-fetch'
import styled from 'styled-components'
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated`

class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading',
    }
  }
  async componentDidMount() {
    const repos = await jsonFetch(endpoint)
    if (repos.json && repos.json.length) {
      // Excluding forked repo and special username repo
      const filteredRepo = repos.json.filter(
        ({ fork, name }) => !fork && name !== siteConfig.githubUsername
      )

      this.setState({ repos: filteredRepo, status: 'ready' })
    }
  }
  render() {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h2>Projects</h2>
        {status === 'loading' && (
          <div className="repositories__loader">
            <Loader />
          </div>
        )}
        {status === 'ready' && this.state.repos && (
          <React.Fragment>
            <div className="repositories__content">
              {this.state.repos.map(repo => (
                <React.Fragment key={repo.name}>
                  <div className="repositories__repo">
                    <a
                      className="repositories__repo-link"
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>{repo.name}</strong>
                    </a>
                    <p>{repo.description}</p>
                    <div className="repositories__repo-star">
                      {repo.stargazers_count > 0 && (
                        <>
                          <FaStar /> {repo.stargazers_count}
                        </>
                      )}
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
            <div className="repositories_user-link">
              <a
                href={`https://github.com/${siteConfig.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="ext-link"
              >
                <strong>All my repositories</strong>
                <FaExternalLinkAlt style={{ marginLeft: 8 }} />
              </a>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link,
  .repositories_user-link a {
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
  }

  .repositories_user-link {
    display: flex;
    justify-content: flex-end;
  }

  .repositories__repo-date {
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 4px;
    }
  }

  .repositories__loader {
    display: flex;
  }

  .ext-link:hover {
    svg {
      color: #005e8f;
    }
  }

  hr {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.fontColor};
    opacity: 0.2;
  }
`
