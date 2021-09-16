import React from 'react'
import jsonFetch from 'simple-json-fetch'
import styled from 'styled-components'
import { GoLinkExternal } from 'react-icons/go'
import { AiFillLike } from 'react-icons/ai'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint = `https://dev.to/api/articles?username=${siteConfig.devtoUsername}`

class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      status: 'loading',
    }
  }
  async componentDidMount() {
    const articles = await jsonFetch(endpoint)
    console.log(articles)
    if (articles.json && articles.json.length) {
      this.setState({ articles: articles.json, status: 'ready' })
    }
  }
  render() {
    const { status, articles } = this.state
    return (
      <div className={this.props.className}>
        <h2>Latest articles on Dev.to</h2>
        {status === 'loading' && (
          <div className="articles__loader">
            <Loader />
          </div>
        )}
        {status === 'ready' && articles && (
          <React.Fragment>
            {console.log('articles', articles)}
            <div className="articles__content">
              {articles?.map(
                ({
                  id,
                  canonical_url,
                  title,
                  description,
                  published_at,
                  positive_reactions_count,
                  reading_time_minutes,
                }) => (
                  <React.Fragment key={id}>
                    <div className="articles__item">
                      <div className="articles__item-intro">
                        <div>
                          Reading time: {`${reading_time_minutes} minutes`}
                        </div>
                        <div>
                          <AiFillLike /> {positive_reactions_count}
                        </div>
                      </div>
                      <a
                        className="articles__item-link"
                        href={canonical_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <strong>{title}</strong>
                      </a>
                      <div>{description}</div>
                      <div className="articles__item-date">
                        Updated: {new Date(published_at).toUTCString()}
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                )
              )}
            </div>
            <div className="articles_user-link">
              <a
                href={siteConfig.social.devto}
                target="_blank"
                rel="noreferrer"
              >
                See all my articles
                <GoLinkExternal style={{ marginLeft: 8 }} />
              </a>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default styled(Articles)`
  position: relative;
  margin-top: 50px;
  .articles__content {
    margin-bottom: 40px;
  }

  .articles__item {
    position: relative;
  }

  .articles__item-link,
  .articles_user-link a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
  }

  .articles_user-link {
    display: flex;
    justify-content: flex-end;
  }

  .articles__item-date {
    font-size: 10px;
  }

  .articles__item-intro {
    display: flex;
    justify-content: space-between;
    svg {
      margin-right: 4px;
    }
  }

  .articles__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.fontColor};
    opacity: 0.2;
  }
`
