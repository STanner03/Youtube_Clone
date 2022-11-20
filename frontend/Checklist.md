<!-- (5 points) As a developer, I want to make good, consistent commits (at least 25 for the entire team for both the backend and frontend).  -->
<!-- (5 points) As a web designer, I want to create a wireframe for my application  -->
(5 points) As a developer, I want to use React.js best practices, which consist of creating functional components and properly passing state around as props. 
(7.5 points) As a developer, I want to use CSS appropriately to make an aesthetically pleasing application. 
<!-- (10 points) As a developer, I want to use Axios to make GET requests to the YouTube API to pull in video data.  -->
<!-- (5 points) As a user, I want to be able to search for YouTube videos and see a video related to my search populate my embedded video player. (API CALL #1)  -->
<!-- (5 points) As a user, I want to be able to play a YouTube video in the embedded video player (iframe HTML element).  -->
<!-- (5 points) As a user, I want to see the title and description of the currently playing video.  -->
(5 points) As a user, I want to see a grouping of videos related to my selected video. (API CALL #2) 
(5 points) As a user, I want to be able to select a video to be played from the list of related videos to my search. 
(7.5 points) As a registered user, I want to add a comment to a video in the comment section (Using Axios to make POST requests to my backend API). 
When comments are added to the backend for a specific video, I want to make a GET request every time that video is loaded as the currently playing video and see all comments for that video.


1) Create Video Card
    <!-- 1a) Show Video Image - DONE -->
    <!-- 1b) Show Video Title - DONE -->
    <!-- 1c) OnClick handler -->
    <!-- 1d) Send video id to video player via click -->

<!-- 2) Create onClick to navigate from Video Card to Video Page and play selected Video -->

<!-- 3) Create single I-Frame for Video player  -->

4) Related Videos

5) Might have to lift VideoCard.jsx up to App.jsx and store all cards into a variable to access each card via index on the page it is to be displayed. Instead of having it be called twice in two separate files... I'm not sure... It's late and my head is foggy...