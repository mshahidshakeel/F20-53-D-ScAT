import requests
from bs4 import BeautifulSoup


class TribuneNews:
    def __init__(self, url):
        self.url = url
        r = requests.get(self.url)
        soup = BeautifulSoup(r.content, features='html.parser')
        print(soup.prettify())
        self.linksOfNews = []
        table = soup.find('div', attrs={'class': 'more-stories sportsection4 pakistansection4'})
        for i in table.find_all('div', attrs={'class':'shortnews_img'}):
            storyRequest = requests.get(str(i.a['href']))
            soupobj = BeautifulSoup(storyRequest.content, features='html.parser')
            image = soupobj.find('div', attrs={'class': 'amp-top-main-img'})
            mainStory = soupobj.find('span', attrs={'class': 'story-text'})
            news = {'title': str(i.h3.text), 'image': image.img['src'], 'story': str(mainStory.get_text()), 'link': str(i.a['href'])}
            self.linksOfNews.append(news)

    def print_Data(self):
        #producerObj = ProducerClass.ProducerClass(['localhost:9092', 'localhost:9093', 'localhost:9094'])
        for i in self.linksOfNews:
           # producerObj.send_to_producer("TribuneNews", i, "currentaffairs")
            print("send Successfully")

if __name__ == '__main__':
    obj = TribuneNews("https://tribune.com.pk/pakistan")
    #obj.print_Data()
