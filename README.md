# README
Welcome to CheckUpOn! Through this app, you can find out how your favorite Twitter celebrity is doing. All you have to do is type in their twittle handle in the search box, press enter or click on the button, and voila!

In order to get the app running, you must do the following:
1. Start the rails server. All Rails docs will be in /server.
2. Disable CORS for your browser (temporarily!). There are a number of different ways to go about this. The easiest way is to open the Chrome browser with CORS disabled. Here's how you do it:
  * OSX: open -a Google\ Chrome --args --disable-web-security --user-data-dir ([link](http://stackoverflow.com/questions/35432749/disable-web-security-in-chrome-48-and-49))
  * Windows: chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security ([link](http://stackoverflow.com/questions/20035101/no-access-control-allow-origin-header-is-present-on-the-requested-resource))



#TODO
We are still trying to implement the following items. Let us know if you would be interested in another feature not listed here!
  - create summary text based on sentiment and magnitude, not just sentiment
  - add animations for different moods
  - display the 10 most recent tweets
