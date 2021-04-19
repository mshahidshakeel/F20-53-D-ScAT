from Consumer import ConsumerClass


class DailyTimes(ConsumerClass.ConsumerClass):
    def __init__(self, topicName, ipList):
        super().__init__(topicName, ipList)
        super().read_from_specific_partiton()


obj = DailyTimes("DailyTimes", ['localhost:9093', 'localhost:9094', 'localhost:9095'])
