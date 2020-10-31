from firebase import firebase


class DataBase:
    def __init__(self):
        self.firebase = firebase.FirebaseApplication('https://f20-53-d-scat.firebaseio.com/', None)

    def data_dump(self, topic, category, data, time):

        newsData = {
            'articleUrl': data[4],
            'body': data[2],
            'imgUrl': data[1],
            'title': data[0]
        }
        result = self.firebase.post('/{}/{}/{}'.format(topic, category, time), newsData)

