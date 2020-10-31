from Consumer import ConsumerClass


class Dawn(ConsumerClass.ConsumerClass):
    def __init__(self, topicName, ipList):
        super().__init__(topicName, ipList)
        super().read_from_specific_partiton()


obj1 = Dawn("Dawn", ['localhost:9093', 'localhost:9094', 'localhost:9095'])
