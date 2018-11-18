const fs = require('fs')
require('test-sweet')
require('../public/src/article-fetcher.js')
const response = require('../api-response.json')

represent("getHeadlines", function() {
  it('sends an API request to the Guardian and returns a response', function() {
    stub = stub(getHeadlines()).with(response)
    expect(stub.response.status).toEqual("ok")
  })
  it('returns the headlines', function() {
    headlines = getHeadlines()
    expect(headlines).toEqual(response.response.results.forEach(article => article.webTitle))
  })
})
