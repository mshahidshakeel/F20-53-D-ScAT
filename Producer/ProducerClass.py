from kafka import KafkaProducer
from json import dumps


class ProducerClass:
    def __init__(self, ipList, version=(0, 10)):
        self.producer = KafkaProducer(bootstrap_servers=ipList,
                                      api_version=version,
                                      partitioner=self.get_partition,
                                      value_serializer=lambda x: dumps(x).encode('utf-8'))

    def get_partition(self, key, all_partitions, available_partition):
        return 9

    def select_partiton(self, categoryName):
        if categoryName == 'Pakistan':
            return 0
        if categoryName == 'Business':
            return 1
        if categoryName == 'Technology':
            return 2
        if categoryName == 'Sport':
            return 3
    def send_to_producer(self, topicName, value, parNo):
        self.producer.send(topicName, value=value, partition=parNo)


'''
if __name__ == '__main__':
    obj = ProducerClass(['localhost:9095', 'localhost:9093', 'localhost:9094'])
    obj.send_to_producer('TestTopic', ['Hello this is fake message'], b'currentaffairs')
'''
