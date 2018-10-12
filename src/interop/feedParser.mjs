import reselect from 'reselect'
import nothis from 'nothis'

const { createSelector } = reselect
const isTextNode = nothis(({ nodeType }) => nodeType === 3)

const parseUrl = element => `http://dev.to${element.find('a.index-article-link').attr('href')}`
const parseTitle = element => element.find('h3').contents().filter(isTextNode).text().trim()
const parseUserName = element => element.find('.featured-user-name,h4').text().trim().split('・')[0]
const parseTags = element => element.find('.featured-tags a,.tags a').text().substr(1).split('#')
const parseComments = element => element.find('.comments-count .engagement-count-number').text().trim() || '0'
const parseReactions = element => element.find('.reactions-count .engagement-count-number').text().trim() || '0'

const parseId = createSelector(
  parseUrl,
  url => url.match(/-(\w+)$/, 'i')[1]
)

export const parseElement = createSelector(
  parseId,
  parseUrl,
  parseTitle,
  parseUserName,
  parseTags,
  parseComments,
  parseReactions,
  (id, url, title, username, tags, comments, reactions) => ({
    id,
    url,
    title,
    username,
    tags,
    comments,
    reactions
  })
)
