import request from 'superagent'

const rootUrl = '/api/v1/quotes'

export function getRandomQuote(id) {
  console.log('front end API hit', 'id =' + id);
  return request
  .post(`${rootUrl}/getRandomQuoteBySubjectId`)
    .send({ subjectId: id })
    .then((res) => res.body)
}
