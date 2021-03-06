![alt tag](http://i.imgur.com/RvfXiP6.jpg)

### Hacking Journalism, July 11-12, 2015

1. Overview
2. How it works
3. Scenario
4. Future work
5. For Lenster

### Overview
If you are reading one story, this application will help you find stories that are on similar topics, but with dissimilar ideas, extracting paragraphs that contain those differences.

##[Promo](https://vine.co/v/evpluUIQwBK)

####Backend Specs
Full story is a [Flask application] (http://flask.pocoo.org/docs/0.10/quickstart/) using [Goose extraction] (https://pypi.python.org/pypi/goose-extractor/)  to extract the full text of articles, the [Pattern library](http://www.clips.ua.ac.be/pattern) to identify keywords in an (original) article and, through [Twitter's API] (https://dev.twitter.com/overview/documentation), identify articles on the same topic. Using the Pattern library to compute inverse cosine similarity of paragraphs to the original document, it extracts paragraphs from articles that are the most different from the original article.

####Frontend Specs
Hooked up a form to API and used Twitter Bootstrap to create UI.

###Live demo

Paste a link into [Full-story.org](http://full-story.org).

![logo](http://i.imgur.com/Xmg1c48.png)

####Human-centered design
Pam is a 20-year-old college student in D.C.
She consumes news as it comes to her, has no allegiance to any particular news outlets, and feels she's rarely getting the full story.
Test scenario: Her friends are all talking about Charleston confederate flag but she can't add much to the conversation. Does she sit in silence?
When she goes back to her dorm, she goes to Facebook and starts reading the first Confederate flag article she finds, but she doesn't understand it.
Does she have to go read other articles? She doesn't have the time.
How does she do it? She can go to Full Story.

#### How this helps journalists
- Full Story can show journalists what they're missing or how the issue has grown over time.

#### Future work
- Chrome plugin
- Perhaps help contextualize corporate funding sources, flagging sponsored content

#### For Lenster

_**Requires Node**_

+ Clone the repo `git clone git@github.com:erikreyna/12monkeys.git`
+ `npm install`
+ `bower install`
+ `npm install gulp -g` // Got Gulp?
+ `gulp serve` (for development) // see gulpfile for more gulp tasks

+ `gulp build` // will get you a dist folder which you can deploy

_Please note that you'll be pinging Ross' api, eventually you might get rate limited by Twitter depending on the amount of requests. I (Erik) also can't guarantee that his api will be available at the time of this writing so I would highly recommend getting your own api set up on your own service._

#### Challenges
- What is a news outlet and what is not? Highly contentious issues would return a lot of op-eds and tendentious viewpoints.

#### List of possible 1st articles

http://www.usatoday.com/story/news/nation/2015/07/10/south-carolina-confederate-flag/29952953/

http://www.nbcnews.com/storyline/confederate-flag-furor/confederate-flag-lowered-forever-south-carolina-capitol-n389996

http://www.washingtonpost.com/news/post-nation/wp/2015/07/10/watch-live-as-the-confederate-flag-comes-down-in-south-carolina/

http://www.motherjones.com/mojo/2015/07/south-carolina-lowers-confederate-flag-once-and-all

http://www.nydailynews.com/news/national/confederate-flag-fans-critics-gather-s-statehouse-article-1.2287700


####Team
Aleszu Bajak, Amelia Winger-Bearskin, Erik Reyna, Igor Motov, Maria Chiu, Ralph Wilson, Ross Goodwin, Sandhya Kambhampati

##[Hard at work](https://vine.co/v/evpTAnhH5Bq)
