import React, { PureComponent } from 'react';
import { send } from '../Services/common.js'
import { Config } from './service.config.js';
import { ArticleItem, ArticleTrigger, ArticleLink, ArticleText } from './ArticleMenu.styles.js';

function Articles({articles = [], onClick = () => {}}){
  return articles.map((item, index) => {
    const friendlyNamePart = item.key.split("/");
    const friendlyName = friendlyNamePart[friendlyNamePart.length - 1]
      .replace(".txt", "")
      .replace(/-/g, " ");
    const articleRoute = '/' 
      + friendlyNamePart
        .slice(0, friendlyNamePart.length - 1)
        .join('/') 
      + '/' + friendlyNamePart[
        friendlyNamePart.length - 1
      ].replace(".txt", "-article");
    return (
      <ArticleItem
        key={index}
      >
        <ArticleLink className="uk-link-reset" target="_blank" rel="noopener noreferrer" href={`http://blog.synaren-app.com${articleRoute}`} onClick={onClick}>
          <span style={{marginRight:'4px'}} className="uk-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="file-text"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"></rect><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"></line><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"></line><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"></line><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"></line></svg>
          </span>
          <ArticleText>
            {friendlyName}
          </ArticleText>
        </ArticleLink>
      </ArticleItem>
    );
  })
}

function ArticleListOffCanvas({ articles = [] }) {
  return (
    <ArticleTrigger className="uk-inline" style={{ verticalAlign: 'top', marginTop: '-1px' }}>
      <span style={{ textAlign: "right", display: 'inline' }}>
        <a style={{ fontSize: '18px', width: '45px' }} className="uk-link-heading uk-link-reset">
          Blog
        </a>
      </span> 
      <div style={{maxHeight:'500px',overflowX:'hidden',overflowY:'auto',marginTop:"4px"}} uk-dropdown="mode: click;pos: bottom-justify; boundary: .boundary; boundary-align: true" className="uk-padding-remove">
        <Articles articles={articles} />
      </div>
    </ArticleTrigger>
  );
}

class ArticleMenu extends PureComponent {
  state = {};
  componentDidMount() {
    send(Config.LIST_ARTICLES_URL,
      "GET",
      Config.ACCESS_TOKEN
    )
      .then(blog => {
        this.setState({
          blog: blog,
          menu: blog.articles.filter(article => article.sub),
          articles: blog.articles.filter(article => !article.sub),
          isLoadingBlog: false
        });
      })
  }
  render() {
    return (
        <ArticleListOffCanvas articles={this.state.articles} />
    );
  }
}

ArticleMenu.propTypes = {};

ArticleMenu.defaultProps = {};

export default ArticleMenu;
