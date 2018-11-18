const fetch = require('node-fetch')

exports: getHeadlines = function() {
  const apiUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
  const requestUrl = "http://content.guardianapis.com/search"
  const order = "order-by=newest"
  const fields = "show-fields=headline%2Cthumbnail%2CtrailText"
  const format = "format=JSON"

  const url = apiUrl
            + requestUrl + '?'
            + order + '&'
            + fields + '&'
            + format

  const getData = (url) =>{
  return fetch(url);
  }

  getData(url).
  then(data=> data.json()).
  then(result=> result.response.results.forEach(article => article.webTitle))


}
