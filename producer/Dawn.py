import threading
from time import sleep

from Scraper import newsScraper
class Dawn(newsScraper):
    # def __init__(self, fname, lname, year):
    def __init__(self,  newsWebsiteName, website_url,category_dict, keyword):
        self.newsWebsiteName=newsWebsiteName
        self.keyword=keyword
        self.websiteUrl=website_url
        self.categoryName=None
        self.category_dict=category_dict
    def start_category_wise_scraper(self):
        # Iterating over values
        for categ, categ_url in self.category_dict.items():
            # creating thread
            t1 = threading.Thread(target=self.start_scraper,args=( categ, categ_url))
            # starting thread
            t1.start()
            print(categ,' Scraping Started.')
            sleep(10)



category_dict={'Sport':'https://www.dawn.com/sport','Business':'https://www.dawn.com/business','Pakistan':'https://www.dawn.com/pakistan','Technology':'https://www.dawn.com/tech'}
dawwn=Dawn("Dawn",'https://www.dawn.com/',category_dict,'.com/news/')
dawwn.start_category_wise_scraper()