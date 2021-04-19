import requests
from time import sleep
from bs4 import BeautifulSoup
# from kafka import KafkaProducer
from newspaper import Article
import ProducerClass

class newsScraper:
    def send_article(self,url,count,producer,categoryName):
        # extracting news and sending to email
        # extracting news and sending to email

        try:
            # news_attribute_list = []

            article = Article(url)
            article.download()
            article.parse()

            news_attribute_list = [article.title, article.top_image, article.text, categoryName,url]

            print("\n\n")
            print(count, ": ",categoryName,' : ',news_attribute_list[0],url, self.newsWebsiteName)
            partNo = producer.select_partiton(categoryName)
            producer.send_to_producer(self.newsWebsiteName,news_attribute_list,partNo)
            print(partNo)

            count = count + 1

        except ValueError as e:
            print('\n')
            print(e)

        except Exception as e:
            print('\n')
            print(e)
            print("\n\nWebsite blocked the request, trying again in 5 seconds")
            sleep(5)  # sleep to avoid blocking
            count = count + 1






    def start_scraper(self, categoryName, cat_url):

        count = 1



        #declare your producer here
        producer = ProducerClass.ProducerClass(['localhost:9092'])


        previous_url_list = []
        # getting list of urls after one minute and processing
        while True:
            response = None
            try:
                headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
                'From': 'yasadbhatti@gmail.com'  # This is another valid field
                }
                response = requests.get(cat_url, headers=headers)
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
                    if self.keyword in url:
                        # result = hashlib.md5(url.encode())
                        # recved_url.append(result.hexdigest())
                        recved_url_list.append(url)
                        # print(url)
                except:
                    break




            # removing duplicate urls from recived urls
            recved_url_list = list(set(recved_url_list))

            print("recived url lenght: ",recved_url_list.__len__())



            # checking if new news available
            new_url = []
            # compare each url hash with already prevuious available url
            for url in recved_url_list:
                for i in range(previous_url_list.__len__()):
                    if previous_url_list[i] == url:  # matched, it mean already availble
                        break
                    # print("Line{}: {}".format(count, line.strip()))

                    if i + 1 == previous_url_list.__len__():  # end reached, url not matched, its new url
                        new_url.append(url)


            print("new_url length,prev_url_list len: ",new_url.__len__(),", ",previous_url_list.__len__())


            # will execute for the first time only
            if previous_url_list.__len__() < 1:
                print(recved_url_list.__len__(), " News detected ")



                for url in recved_url_list:
                    self.send_article(url,count,producer,categoryName)#----------------------------------------
                    count=count+1

                previous_url_list = recved_url_list

            # if new url available, send it to kafka
            if new_url.__len__() > 0 and previous_url_list.__len__()>0:
                print("\n\n######################### News detected in : ",categoryName)
                for url in new_url:
                    # extracting news and sending to kafka--------------------------------------------------------------------
                    self.send_article(url, count,producer,categoryName)
                    count=count+1
                previous_url_list = recved_url_list


            else:
                print("\n\n********",categoryName,": No New News available in this categor, waiting for new news")
                sleep(60)

