# URL Shortener Challenge

### How to setup the application

First of all you need to have Docker installed on your system.
Navigate to this directory then build the image:
```
docker build -t url-shortener-api .
```
Now you should be able to run the built image with:
```
docker run -d -p 3000:3000 --name url-shortener-container url-shortener-api
```
Check it out making requests to localhost:3000. 

#### Tip: on index.js, each route has a comment right above it with the related CURL command to call it
___
### About the algorithm for Short URL Generation: 

Its important to note that the requirements asks for the shortest *possible* algorithm.
So instead of getting a small hash from the URL, I keep track of the amount of shorted URLs and just loop over an array of all different characters (letters and numbers and some symbols) getting the smallest and sequencial combination from that number. 

Consider the following character list: 'abcdefghijklmnopqrstuvwxyz0123456789'

In this case, the first shorted URL will be named 'a', the 36th one '9' and the 37th one will be 'aa'.

One way to get shorter strings is to expand this list to include every symbol that can go in a URL. I googled that and included all safe symbols on that list for my submission.
I also used those shortenedUrls as keys for my URLs Map. This is good because now we got O(1) for lookup which is important for a URL Shortener service.

### How to run the Unit Tests:
```
npm run test
```