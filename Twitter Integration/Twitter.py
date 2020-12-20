import random

import pandas as pd
import tweepy
from Producer.ProducerClass import ProducerClass


class TwitterClass:
    # function to display data of each tweet
    def printtweetdata(self,n, ith_tweet):
        print()
        print(f"Tweet {n}:")
        print(f"Username:{ith_tweet[0]}")
        print(f"Description:{ith_tweet[1]}")
        print(f"Location:{ith_tweet[2]}")
        print(f"Following Count:{ith_tweet[3]}")
        print(f"Follower Count:{ith_tweet[4]}")
        print(f"Total Tweets:{ith_tweet[5]}")
        print(f"Retweet Count:{ith_tweet[6]}")
        print(f"Tweet Text:{ith_tweet[7]}")
        print(f"Hashtags Used:{ith_tweet[8]}")


    # function to perform data extraction
    def scrape(self,words, date_since, numtweet):
        # Creating DataFrame using pandas
        db = pd.DataFrame(columns=['username', 'description', 'location', 'following',
                                   'followers', 'totaltweets', 'retweetcount', 'text', 'hashtags'])


        tweets = tweepy.Cursor(api.search, q=words, lang="en",
                               since=date_since, tweet_mode='extended').items(numtweet)

        list_tweets = [tweet for tweet in tweets]

        # Counter to maintain Tweet Count
        i = 1

        for tweet in list_tweets:
            username = tweet.user.screen_name
            description = tweet.user.description
            location = tweet.user.location
            following = tweet.user.friends_count
            followers = tweet.user.followers_count
            totaltweets = tweet.user.statuses_count
            retweetcount = tweet.retweet_count
            hashtags = tweet.entities['hashtags']

            try:
                text = tweet.retweeted_status.full_text
            except AttributeError:
                text = tweet.full_text
            hashtext = list()
            for j in range(0, len(hashtags)):
                hashtext.append(hashtags[j]['text'])

            ith_tweet = [username, description, location, following,
                         followers, totaltweets, retweetcount, text, hashtext]
            db.loc[len(db)] = ith_tweet

            self.printtweetdata(i, ith_tweet)
            i = i + 1
        producer = ProducerClass(['localhost:9093', 'localhost:9094', 'localhost:9095'])
        producer.send_to_producer("Twitter", db.tolist(),parNo=random.randInt(0,19))
        filename = 'scraped_tweets.csv'
        db.to_csv(filename)


if __name__ == '__main__':
    consumer_key = ""
    consumer_secret = ""
    access_key = ""
    access_secret = ""
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_key, access_secret)
    api = tweepy.API(auth)

    #print("Enter Twitter HashTag to search for")
    #words = input()
    #print("Enter Date since The Tweets are required in yyyy-mm--dd")
    #date_since = input()

    obj = TwitterClass()
    numTweet = 100
    obj.scrape("Hastage", "2017", numTweet)

    #print('Scraping has completed!')
