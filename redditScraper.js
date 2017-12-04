function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function isImageUrl(url) {
  const validExtensions = ['jpg', 'png', 'svg', 'jpeg'];
  for (i in validExtensions) {
    if (url.toLowerCase().includes('.' + validExtensions[i])) {
      return true;
    }
  }
  return false;
}

function buildFeed(subreddits, urls, transitionDelay) {
    $.get('https://www.reddit.com/r/' + subreddits.pop() + '.json').done((response) => { 
      response.data.children.forEach((post) => {
        let url = post.data.url;
        if (url && isImageUrl(url)) {
          // filter out non image/non displayable posts
          urls.push(url);
        }
      });
      if (subreddits.length > 0) {
        buildFeed(subreddits, urls, transitionDelay);
      } else {
        shuffle(urls);
        displayImages(urls, transitionDelay);
      }
    });
}