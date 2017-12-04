function scrape(subreddit) {
	$.get('https://www.reddit.com/r/meirl.json').done((response) => console.log(response));
}