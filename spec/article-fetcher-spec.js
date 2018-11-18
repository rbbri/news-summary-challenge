const fs = require('fs')
require('test-sweet')
require('../public/src/article-fetcher.js')
const response = require('../api-response.json')

represent("Article-Fetcher", function() {
  it('sends an API request to the Guardian and returns a response', function() {
    articleFetcher = new ArticleFetcher
    stub = stub(articleFetcher.request).with(response)
    expect(stub.response.status).toEqual("ok")
  })
})
