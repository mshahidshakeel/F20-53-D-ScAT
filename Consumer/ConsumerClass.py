from kafka import KafkaConsumer, TopicPartition
from json import loads
from DataToFirebase import FirebaseClass
from datetime import datetime
from time import sleep


class ConsumerClass:
    def __init__(self, topicName, ipList, api_ver=(0, 10),):
        self.consumer = KafkaConsumer(topicName, bootstrap_servers=ipList, api_version=api_ver, auto_offset_reset='earliest', enable_auto_commit=True, group_id='group_1', value_deserializer=lambda x: loads(x.decode('utf-8')))
        self.topic = topicName

    def read_from_specific_partiton(self):
        print("Inside specific")
        obj = FirebaseClass.DataBase()
        for msg in self.consumer:
            sleep(3)
            time = datetime.utcfromtimestamp(int(msg.timestamp) // 1000)
            time = time.replace(second=0)
            obj.data_dump(self.topic, str(msg.value[3]), msg.value, time)
            if msg.partition == 0:
                print("Write News into Pakistan Section", msg.value)
            elif msg.partition == 1:
                print("Write News into Business Section", msg.value)
            elif msg.partition == 2:
                print("Write News into Technology Section", msg.value)
            elif msg.partition == 3:
                print("Write News into Sport Section", msg.value)
            else:
                print("Write News into mix Section", msg.value)




#obj2 = ConsumerClass("DailyTimes", ['localhost:9093', 'localhost:9094', 'localhost:9095'])
#Read_From_Times(obj2)
