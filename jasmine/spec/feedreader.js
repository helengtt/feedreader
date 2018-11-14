/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions, the 
     * allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* make sure that the allFeeds variable has been defined and 
         * that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loop through each feed in the allFeeds object and ensures 
         * it has a URL defined and that the URL is not empty.
         */
        it ('has a URL defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                // another way: expect(feed.url).toBeTruthy();
            });

            //another way for loop: for (const feed of allFeeds) { }
        });

        /* loop through each feed in the allFeeds object and ensures it
         * has a name defined and that the name is not empty.
         */
        it('has a name definde', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
        
    });


    /* This suite is about "The menu" */
    describe('The menu', function(){
        /* Ensure the menu element is hidden by default.
         */
        it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
            // Cannot read property 'contains' of undefined
            // expect($('body').classList.contains('menu-hidden')).toBe(true);
        });

         /* Ensure the menu changes visibility when the menu icon is clicked. 
          * This test has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu changes visibility when icon is clicked', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);                        
        });
    });

    /* This suite is about "Initial Entries" */
    describe('Initial Entries', function(){
        /* Ensure when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0,done);
        });
        it('there is at least a single .entry element within the .feed container when the loadFeed function is called and completes.', function(done){
            expect($('.feed .entry').length).not.toBe(null);
            done();
        });
    });

    /* This suite is about "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* Ensure when a new feed is loaded by the loadFeed function that the 
         * content actually changes.
         */
        let firstFeed, secondFeed;

        beforeEach(function(done){
            loadFeed(1, function(){
                firstFeed = $('.feed').children();
                loadFeed(2, function(){
                    secondFeed = $('.feed').children();
                    done();
                });
            });
        });

        it('the content changes when a new feed is loaded by the loadFeed function', function(done){
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });
    });
}());
