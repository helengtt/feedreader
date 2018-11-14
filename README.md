# Project Overview

In this project a web-based application that reads RSS feeds is already given. The test suite needs to be completed.

# How to run the test

1. Download the repo at your computer.
2. Open the index.html file in your browser. The test results in Jasmine is at the bottom.
3. If you've installed NodeJS and Gulp, you can input gulp in the computer terminal to run the test and you'll see the test result in your brower.

# Tests suites
The test suites is in jasmine/spec/feedreader.js.

1. Test the RSS feeds definitions:
   - First, we test to make sure that the allFeeds variable has been defined and that it is not empty.
   - Second, loop through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
   - loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
2. Test the Menu:
   - Ensure the menu element is hidden by default.
   - Ensure the menu changes visibility when the menu icon is clicked.
3. Test the Initial Entries:
   - Ensure when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
4. Test the New Feed Selection:
   - Ensure when a new feed is loaded by the loadFeed function that the content actually changes.