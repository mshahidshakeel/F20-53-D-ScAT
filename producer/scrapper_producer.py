import requests
from kafka import KafkaProducer
import json

from time import sleep
from bs4 import BeautifulSoup
from newspaper import Article

count = 1
producer = None

# producer of kafka
try:
    # KafkaProducer(value_serializer=lambda v: json.dumps(v).encode('utf-8'))

    producer = KafkaProducer(bootstrap_servers=['localhost:9092'], api_version=(0, 10),
                             value_serializer=lambda v: json.dumps(v).encode('utf-8'))
    print("Kafka producer created successfully..")
except Exception as e:
    print("Kafka Connecting Exception", e)
    print("exiting...")
    exit()

previous_url_list = []

# getting list of urls after one minute and processing
while True:
    response = None
    try:
        url = "https://www.dawn.com/"
        response = requests.get(url)
    except Exception as e:
        print("\nError in internet connection\n")
        print(e)
        sleep(5)
        continue

    # parse html
    page = str(BeautifulSoup(response.content, features="html.parser"))


    def getURL(page):
        """

        :param page: html of web page (here: Python home page)
        :return: urls in that page
        """
        start_link = page.find("href")
        if start_link == -1:
            return None, 0
        start_quote = page.find('"', start_link)
        end_quote = page.find('"', start_quote + 1)
        url = page[start_quote + 1: end_quote]
        return url, end_quote


    # get list of uniqu urls in recved_url_list
    recved_url_list = []
    while True:
        url, n = getURL(page)
        page = page[n:]
        try:
            if 'news/' in url:
                # result = hashlib.md5(url.encode())
                # recved_url.append(result.hexdigest())
                recved_url_list.append(url)
                # print(url)
        except:
            break

    # removing duplicate urls from recived urls
    recved_url_list = list(set(recved_url_list))

    # checking if new news available
    new_url = []
    if previous_url_list.__len__() > 0:
        # compare each url hash with already prevuious available url
        for url in recved_url_list:
            for i in range(previous_url_list.__len__()):
                if previous_url_list[i] == url:  # matched, it mean already availble
                    break
                # print("Line{}: {}".format(count, line.strip()))

                if i + 1 == previous_url_list.__len__():  # end reached, url not matched, its new url
                    new_url.append(url)

    # will execute for the first time only
    if previous_url_list.__len__() < 1:
        print(recved_url_list.__len__(), " News detected ")

        for url in recved_url_list:
            # extracting news and sending to email
            try:
                news_attribute_list = []

                article = Article(url)
                article.download()
                article.parse()
                # print(article.authors)
                # print("Article Publication Date:")
                # print(article.publish_date)
                # print("Major Image in the article:")
                # print(article.top_image)
                # article.nlp()
                # print("Keywords in the article")
                # print(article.keywords)
                #
                # print("Article Text:")
                # print(article.text)

                # writting news into list
                news_attribute_list.append(article.title)
                news_attribute_list.append(article.top_image)
                news_attribute_list.append(article.text)

                print("\n\n")
                print(count, ": ", article.title)

                # print("Article Summary")
                # print(article.summary)

                # now sending to kafka
                KafkaProducer(value_serializer=lambda v: json.dumps(v).encode('utf-8'))
                # print(news_attribute_list)
                producer.send('dawn', news_attribute_list)
                count = count + 1
                # producer.send('test', ["cat", "dog", "fish"])

            except Exception as e:
                print('\n')
                print(e)
                print("\n\nError occur on parsing url or connection error occur at line 97\n")
                sleep(5)  # sleep to avoid blocking

                count = count + 1

        previous_url_list = recved_url_list











    # if new url available, send it to kafka
    elif new_url.__len__() > 0:
        for url in new_url:
            # extracting news and sending to email
            try:
                news_attribute_list = []

                article = Article(url)
                article.download()
                article.parse()
                # print(article.authors)
                # print("Article Publication Date:")
                # print(article.publish_date)
                # print("Major Image in the article:")
                # print(article.top_image)
                # article.nlp()
                # print("Keywords in the article")
                # print(article.keywords)
                #
                # print("Article Text:")
                # print(article.text)

                # writting news into list
                news_attribute_list.append(article.title)
                news_attribute_list.append(article.top_image)
                news_attribute_list.append(article.text)

                print("\n\n")
                print(count, ": ", article.title)

                # print("Article Summary")
                # print(article.summary)

                # now sending to kafka
                KafkaProducer(value_serializer=lambda v: json.dumps(v).encode('utf-8'))
                # print(news_attribute_list)
                producer.send('dawn' + str(count), news_attribute_list)
                count = count + 1
                # producer.send('test', ["cat", "dog", "fish"])

            except Exception as e:
                print('\n')
                print(e)
                print("\n\nError occur on parsing url or connection error occur at line 97")
                sleep(5)  # sleep to avoid blocking
                count = count + 1
        previous_url_list = recved_url_list








    else:
        print("\n\n******** No New News available, waiting for new news")
        sleep(60)
