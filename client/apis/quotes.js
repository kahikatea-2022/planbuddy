import request from 'superagent'

const rootUrl = '/api/v1'

export function getRandomQuote(id) {
  return request
  .post(`${rootUrl}/getRandomQuoteBySubjectId`)
    .send({ subjectId: id })
    .then((res) => res.body)
}
