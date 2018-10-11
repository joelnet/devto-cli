import reselect from 'reselect'

const { createSelector } = reselect

const parseTitle = $ => $('h1').first().text().trim()
const parseBody = $ => $('#article-body').html()

export const parseArticle = createSelector(
  parseTitle,
  parseBody,
  (title, body) => ({
    title,
    body
  })
)
