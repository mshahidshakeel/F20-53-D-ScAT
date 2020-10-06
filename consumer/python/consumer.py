from kafka import KafkaConsumer
# from pymongo import MongoClient
from json import loads
print("started..")
consumer = KafkaConsumer(
    'dawn1',
     bootstrap_servers=['localhost:9092'],
     auto_offset_reset='earliest',
     enable_auto_commit=True,
     group_id='six',
     value_deserializer=lambda x: loads(x.decode('utf-8')))
print('consumer created...')
for message in consumer:
    message = message.value
    # collection.insert_one(message)
    # print(message.key)
    print(message[0])
    print(message[1])
    print(message[2])

print("progrem end")