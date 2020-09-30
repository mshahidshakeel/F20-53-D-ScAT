import requests
import bs4
from kafka import KafkaProducer
import json

producer = None
try:
    producer = KafkaProducer(bootstrap_servers=['localhost:9092'], api_version=(0, 10))
except Exception as e:
    print("Kafka Connecting Exception", e)
    print("exiting...")
    exit()

req = requests.get('https://www.dawn.com/latest-news')

soup = bs4.BeautifulSoup(req.content, features='html.parser')

for title in soup.findAll('h2', attrs={'class':'story__title'}):
    val = bytes(title.string, encoding='utf-8')

    producer.send('DawnNews', value=val)
    producer.flush()