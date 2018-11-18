const fetch = require('node-fetch')

ArticleFetcher = function() {
  this.apiUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
  this.requestUrl = "http://content.guardianapis.com/search"
  this.order = "order-by=newest"
  this.fields = "show-fields=headline%2Cthumbnail%2CtrailText"
  this.format = "format=JSON"
}

ArticleFetcher.prototype.request = function() {
  const url = this.apiUrl
            + this.requestUrl + '?'
            + this.order + '&'
            + this.fields + '&'
            + this.format

  const getData = (url) =>{
  return fetch(url);
  }

  getData(url).
  then(data=> data.json()).
  then(result=> console.log(result))
}
