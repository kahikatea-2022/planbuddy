import request from 'superagent'

const rootUrl = '/api/v1/quotes'

export function getRandomQuote(id) {
  console.log('front end API hit', 'id =' + id);
  return request
  .get(`${rootUrl}/getRandomQuoteBySubjectId/${id}`)
  .then((res) => res.body)
}
