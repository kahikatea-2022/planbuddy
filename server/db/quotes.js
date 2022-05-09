const connection = require('./connection')

function getQuoteById(quote_id, db = connection) {
  return db('quotes')
    .where('quote_id', quote_id)
    .select('quote_id as quoteId', 'subject_id as subjectId', 'quote')
}

function getQuotesBySubjectId(subject_id, db = connection) {
  return db('quotes')
    .where('subject_id', subject_id)
    .select('quote_id as quoteId', 'subject_id as subjectId', 'quote')
}

module.exports = {
  getQuoteById,
  getQuotesBySubjectId,
}
