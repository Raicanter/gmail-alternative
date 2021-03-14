const mails_raw = `
[{
    "id": 1,
    "sender": {
      "name": "Brigitte Dicey",
      "picture": "http://dummyimage.com/163x171.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-12-07T07:13:52Z",
    "subject": "morbi ut odio cras mi pede malesuada in",
    "body": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 2,
    "sender": {
      "name": "Jule Ivshin",
      "picture": "http://dummyimage.com/117x120.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-06-08T18:37:02Z",
    "subject": "placerat ante nulla justo aliquam quis turpis eget elit",
    "body": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }, {
    "id": 3,
    "sender": {
      "name": "Alicea Devlin",
      "picture": "http://dummyimage.com/216x168.jpg/cc0000/ffffff"
    },
    "sendDate": "2020-01-26T23:49:25Z",
    "subject": "tristique est et tempus semper est quam",
    "body": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "purchases"
  }, {
    "id": 4,
    "sender": {
      "name": "Caril Poyzer",
      "picture": "http://dummyimage.com/244x206.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-08-09T11:16:11Z",
    "subject": "dolor sit amet consectetuer adipiscing elit proin interdum",
    "body": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 5,
    "sender": {
      "name": "Eve Bartholomieu",
      "picture": "http://dummyimage.com/210x145.jpg/cc0000/ffffff"
    },
    "sendDate": "2020-05-01T20:14:44Z",
    "subject": "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
    "body": "Etiam justo. Etiam pretium iaculis justo.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }, {
    "id": 6,
    "sender": {
      "name": "Marylin Kuhnt",
      "picture": "http://dummyimage.com/244x199.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-12-07T13:36:12Z",
    "subject": "turpis sed ante vivamus tortor duis",
    "body": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "work"
  }, {
    "id": 7,
    "sender": {
      "name": "Janine Tobias",
      "picture": "http://dummyimage.com/206x116.bmp/dddddd/000000"
    },
    "sendDate": "2020-07-28T04:09:02Z",
    "subject": "at dolor quis odio consequat",
    "body": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "work"
  }, {
    "id": 8,
    "sender": {
      "name": "Fidela Sword",
      "picture": "http://dummyimage.com/177x208.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-08-25T01:00:03Z",
    "subject": "eros vestibulum ac est lacinia nisi venenatis",
    "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 9,
    "sender": {
      "name": "Aubert Tebbet",
      "picture": "http://dummyimage.com/238x137.png/ff4444/ffffff"
    },
    "sendDate": "2020-01-26T08:06:15Z",
    "subject": "suspendisse ornare consequat lectus in",
    "body": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "work"
  }, {
    "id": 10,
    "sender": {
      "name": "Bobette Lancett",
      "picture": "http://dummyimage.com/174x169.png/dddddd/000000"
    },
    "sendDate": "2020-03-26T12:44:12Z",
    "subject": "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
    "body": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }, {
    "id": 11,
    "sender": {
      "name": "Marthena Viegas",
      "picture": "http://dummyimage.com/207x226.bmp/dddddd/000000"
    },
    "sendDate": "2021-01-08T07:37:09Z",
    "subject": "non velit donec diam neque vestibulum",
    "body": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 12,
    "sender": {
      "name": "Ignazio Sanbrook",
      "picture": "http://dummyimage.com/106x225.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-06-30T02:19:12Z",
    "subject": "dictumst etiam faucibus cursus urna ut tellus",
    "body": "Nunc rhoncus dui vel sem.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "purchases"
  }, {
    "id": 13,
    "sender": {
      "name": "Lorrin Sehorsch",
      "picture": "http://dummyimage.com/239x178.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-10-22T07:56:46Z",
    "subject": "dictumst etiam faucibus cursus urna ut tellus nulla",
    "body": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 14,
    "sender": {
      "name": "Pris Glewe",
      "picture": "http://dummyimage.com/193x146.bmp/dddddd/000000"
    },
    "sendDate": "2020-07-17T16:25:12Z",
    "subject": "quis orci eget orci vehicula",
    "body": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 15,
    "sender": {
      "name": "Renata Whaley",
      "picture": "http://dummyimage.com/148x120.png/cc0000/ffffff"
    },
    "sendDate": "2020-12-09T21:29:13Z",
    "subject": "non ligula pellentesque ultrices phasellus id",
    "body": "Nulla tellus.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "personal"
  }, {
    "id": 16,
    "sender": {
      "name": "Cesar Bande",
      "picture": "http://dummyimage.com/194x100.jpg/5fa2dd/ffffff"
    },
    "sendDate": "2020-03-28T20:02:31Z",
    "subject": "non mi integer ac neque duis bibendum morbi non",
    "body": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "work"
  }, {
    "id": 17,
    "sender": {
      "name": "Clarence Terrey",
      "picture": "http://dummyimage.com/134x148.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-01-27T22:07:11Z",
    "subject": "non mi integer ac neque duis",
    "body": "Nullam molestie nibh in lectus.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 18,
    "sender": {
      "name": "Jason Zuenelli",
      "picture": "http://dummyimage.com/209x241.jpg/dddddd/000000"
    },
    "sendDate": "2020-10-22T10:20:43Z",
    "subject": "convallis tortor risus dapibus augue",
    "body": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "purchases"
  }, {
    "id": 19,
    "sender": {
      "name": "Lorelle Harrie",
      "picture": "http://dummyimage.com/175x137.jpg/ff4444/ffffff"
    },
    "sendDate": "2020-06-28T12:40:15Z",
    "subject": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
    "body": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 20,
    "sender": {
      "name": "Monte Legat",
      "picture": "http://dummyimage.com/161x217.jpg/dddddd/000000"
    },
    "sendDate": "2020-09-15T14:23:44Z",
    "subject": "magna bibendum imperdiet nullam orci pede venenatis non",
    "body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 21,
    "sender": {
      "name": "Ward Flanigan",
      "picture": "http://dummyimage.com/168x155.jpg/ff4444/ffffff"
    },
    "sendDate": "2020-08-07T10:33:32Z",
    "subject": "venenatis tristique fusce congue diam id ornare imperdiet sapien",
    "body": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 22,
    "sender": {
      "name": "Rolfe Baff",
      "picture": "http://dummyimage.com/165x162.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-12-27T12:34:02Z",
    "subject": "venenatis lacinia aenean sit amet justo morbi ut odio cras",
    "body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "personal"
  }, {
    "id": 23,
    "sender": {
      "name": "Calv Fenech",
      "picture": "http://dummyimage.com/242x249.jpg/dddddd/000000"
    },
    "sendDate": "2020-09-01T04:57:41Z",
    "subject": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
    "body": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "work"
  }, {
    "id": 24,
    "sender": {
      "name": "Cyndy Tidman",
      "picture": "http://dummyimage.com/192x149.bmp/cc0000/ffffff"
    },
    "sendDate": "2021-01-04T12:48:03Z",
    "subject": "libero non mattis pulvinar nulla pede ullamcorper augue",
    "body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 25,
    "sender": {
      "name": "Audre Sitwell",
      "picture": "http://dummyimage.com/229x100.jpg/cc0000/ffffff"
    },
    "sendDate": "2020-11-22T11:08:48Z",
    "subject": "risus dapibus augue vel accumsan tellus nisi eu",
    "body": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 26,
    "sender": {
      "name": "Dorey Iskower",
      "picture": "http://dummyimage.com/170x173.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-10-23T00:14:39Z",
    "subject": "id mauris vulputate elementum nullam varius nulla facilisi cras",
    "body": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "purchases"
  }, {
    "id": 27,
    "sender": {
      "name": "Cindie Osborne",
      "picture": "http://dummyimage.com/161x131.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-11-12T07:06:30Z",
    "subject": "in felis eu sapien cursus vestibulum proin eu mi",
    "body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "personal"
  }, {
    "id": 28,
    "sender": {
      "name": "Averil Knoles",
      "picture": "http://dummyimage.com/147x127.jpg/cc0000/ffffff"
    },
    "sendDate": "2020-11-07T16:04:36Z",
    "subject": "accumsan tellus nisi eu orci mauris",
    "body": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 29,
    "sender": {
      "name": "Maryrose Stopp",
      "picture": "http://dummyimage.com/178x231.png/cc0000/ffffff"
    },
    "sendDate": "2020-04-14T11:27:11Z",
    "subject": "ut massa volutpat convallis morbi",
    "body": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 30,
    "sender": {
      "name": "Stormy Seawell",
      "picture": "http://dummyimage.com/191x165.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-06-11T17:31:12Z",
    "subject": "odio condimentum id luctus nec",
    "body": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "personal"
  }, {
    "id": 31,
    "sender": {
      "name": "Alaric Beddo",
      "picture": "http://dummyimage.com/182x132.png/ff4444/ffffff"
    },
    "sendDate": "2021-01-04T11:17:51Z",
    "subject": "volutpat quam pede lobortis ligula sit amet eleifend",
    "body": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 32,
    "sender": {
      "name": "Chelsae Fudger",
      "picture": "http://dummyimage.com/144x204.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-12-23T19:57:35Z",
    "subject": "diam id ornare imperdiet sapien urna",
    "body": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 33,
    "sender": {
      "name": "Brendan Macken",
      "picture": "http://dummyimage.com/205x117.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-06-07T09:28:33Z",
    "subject": "a odio in hac habitasse platea dictumst maecenas",
    "body": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 34,
    "sender": {
      "name": "Coletta Keeting",
      "picture": "http://dummyimage.com/247x237.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-03-05T05:49:34Z",
    "subject": "congue eget semper rutrum nulla nunc purus phasellus in",
    "body": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 35,
    "sender": {
      "name": "Neal Bernadot",
      "picture": "http://dummyimage.com/164x106.jpg/dddddd/000000"
    },
    "sendDate": "2020-08-26T23:11:47Z",
    "subject": "vulputate ut ultrices vel augue vestibulum ante ipsum",
    "body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 36,
    "sender": {
      "name": "Emmet Drewell",
      "picture": "http://dummyimage.com/142x122.png/dddddd/000000"
    },
    "sendDate": "2020-05-07T02:54:55Z",
    "subject": "at nulla suspendisse potenti cras in purus eu magna vulputate",
    "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 37,
    "sender": {
      "name": "Butch Cornilleau",
      "picture": "http://dummyimage.com/141x169.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-08-27T09:50:46Z",
    "subject": "proin risus praesent lectus vestibulum quam sapien varius",
    "body": "Donec dapibus. Duis at velit eu est congue elementum.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 38,
    "sender": {
      "name": "Penelopa Feldklein",
      "picture": "http://dummyimage.com/153x114.jpg/cc0000/ffffff"
    },
    "sendDate": "2021-01-07T08:36:51Z",
    "subject": "et ultrices posuere cubilia curae mauris",
    "body": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 39,
    "sender": {
      "name": "Wenda Frew",
      "picture": "http://dummyimage.com/186x234.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-01-31T17:55:16Z",
    "subject": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing",
    "body": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }, {
    "id": 40,
    "sender": {
      "name": "Deonne Pockey",
      "picture": "http://dummyimage.com/174x168.png/cc0000/ffffff"
    },
    "sendDate": "2020-06-12T16:47:10Z",
    "subject": "ante vestibulum ante ipsum primis in",
    "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 41,
    "sender": {
      "name": "Harriett Gatty",
      "picture": "http://dummyimage.com/113x145.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-04-18T03:01:27Z",
    "subject": "orci pede venenatis non sodales sed",
    "body": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 42,
    "sender": {
      "name": "Cass Dougill",
      "picture": "http://dummyimage.com/190x233.jpg/dddddd/000000"
    },
    "sendDate": "2020-04-10T06:12:29Z",
    "subject": "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
    "body": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 43,
    "sender": {
      "name": "Gaby Jeandot",
      "picture": "http://dummyimage.com/135x229.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-12-25T23:26:04Z",
    "subject": "eget orci vehicula condimentum curabitur in libero ut massa",
    "body": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 44,
    "sender": {
      "name": "Alejandro Hencke",
      "picture": "http://dummyimage.com/147x175.png/cc0000/ffffff"
    },
    "sendDate": "2020-06-11T10:01:53Z",
    "subject": "iaculis diam erat fermentum justo nec condimentum neque sapien placerat",
    "body": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "purchases"
  }, {
    "id": 45,
    "sender": {
      "name": "Chris Arter",
      "picture": "http://dummyimage.com/222x152.jpg/5fa2dd/ffffff"
    },
    "sendDate": "2020-07-26T18:38:15Z",
    "subject": "ac lobortis vel dapibus at diam nam",
    "body": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 46,
    "sender": {
      "name": "Millisent Alywin",
      "picture": "http://dummyimage.com/213x159.jpg/dddddd/000000"
    },
    "sendDate": "2020-08-31T20:31:42Z",
    "subject": "felis ut at dolor quis odio consequat varius integer ac",
    "body": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 47,
    "sender": {
      "name": "Cybill Paty",
      "picture": "http://dummyimage.com/183x135.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-05-18T04:55:19Z",
    "subject": "pede ac diam cras pellentesque volutpat dui",
    "body": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 48,
    "sender": {
      "name": "Rivkah Seckington",
      "picture": "http://dummyimage.com/228x139.jpg/dddddd/000000"
    },
    "sendDate": "2020-10-08T06:49:28Z",
    "subject": "erat eros viverra eget congue eget",
    "body": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 49,
    "sender": {
      "name": "Claresta Vales",
      "picture": "http://dummyimage.com/143x216.png/ff4444/ffffff"
    },
    "sendDate": "2020-06-10T11:34:52Z",
    "subject": "nulla neque libero convallis eget",
    "body": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 50,
    "sender": {
      "name": "Mandi McShea",
      "picture": "http://dummyimage.com/111x128.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-12-15T17:41:37Z",
    "subject": "ligula in lacus curabitur at ipsum ac tellus semper interdum",
    "body": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 51,
    "sender": {
      "name": "Del Habershaw",
      "picture": "http://dummyimage.com/225x193.jpg/5fa2dd/ffffff"
    },
    "sendDate": "2020-05-25T04:33:13Z",
    "subject": "posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis",
    "body": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 52,
    "sender": {
      "name": "Woodman Pirdy",
      "picture": "http://dummyimage.com/143x149.jpg/5fa2dd/ffffff"
    },
    "sendDate": "2020-06-15T20:06:26Z",
    "subject": "orci luctus et ultrices posuere cubilia curae duis",
    "body": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 53,
    "sender": {
      "name": "Claudie Counsell",
      "picture": "http://dummyimage.com/204x207.bmp/5fa2dd/ffffff"
    },
    "sendDate": "2020-08-20T08:53:49Z",
    "subject": "orci nullam molestie nibh in",
    "body": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 54,
    "sender": {
      "name": "Giorgia Philipps",
      "picture": "http://dummyimage.com/175x166.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-06-17T21:58:46Z",
    "subject": "est et tempus semper est quam pharetra magna",
    "body": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 55,
    "sender": {
      "name": "Anatole Crighton",
      "picture": "http://dummyimage.com/201x194.jpg/5fa2dd/ffffff"
    },
    "sendDate": "2021-01-13T16:02:21Z",
    "subject": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
    "body": "Nunc nisl.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 56,
    "sender": {
      "name": "Corbin Dudlestone",
      "picture": "http://dummyimage.com/136x223.jpg/cc0000/ffffff"
    },
    "sendDate": "2020-12-05T00:26:50Z",
    "subject": "vulputate justo in blandit ultrices enim",
    "body": "Nulla ut erat id mauris vulputate elementum.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "personal"
  }, {
    "id": 57,
    "sender": {
      "name": "Kacey Lean",
      "picture": "http://dummyimage.com/111x250.png/dddddd/000000"
    },
    "sendDate": "2020-09-10T11:14:42Z",
    "subject": "ullamcorper augue a suscipit nulla elit",
    "body": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 58,
    "sender": {
      "name": "Mable Madrell",
      "picture": "http://dummyimage.com/177x194.jpg/cc0000/ffffff"
    },
    "sendDate": "2020-10-11T20:04:25Z",
    "subject": "in eleifend quam a odio in hac habitasse",
    "body": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 59,
    "sender": {
      "name": "Mehetabel Gilding",
      "picture": "http://dummyimage.com/114x118.bmp/5fa2dd/ffffff"
    },
    "sendDate": "2020-03-02T23:15:48Z",
    "subject": "viverra dapibus nulla suscipit ligula in lacus curabitur",
    "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 60,
    "sender": {
      "name": "Mercedes Janodet",
      "picture": "http://dummyimage.com/236x196.png/cc0000/ffffff"
    },
    "sendDate": "2020-04-09T21:21:41Z",
    "subject": "et eros vestibulum ac est lacinia nisi venenatis tristique",
    "body": "Ut at dolor quis odio consequat varius.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 61,
    "sender": {
      "name": "Kelcy Borgnol",
      "picture": "http://dummyimage.com/126x215.png/cc0000/ffffff"
    },
    "sendDate": "2021-01-06T15:02:52Z",
    "subject": "proin eu mi nulla ac enim in tempor turpis nec",
    "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }, {
    "id": 62,
    "sender": {
      "name": "Bamby Lucchi",
      "picture": "http://dummyimage.com/176x243.jpg/5fa2dd/ffffff"
    },
    "sendDate": "2020-04-26T01:06:30Z",
    "subject": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor",
    "body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "work"
  }, {
    "id": 63,
    "sender": {
      "name": "Thayne McMickan",
      "picture": "http://dummyimage.com/248x152.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-08-17T23:15:24Z",
    "subject": "molestie nibh in lectus pellentesque at nulla suspendisse potenti",
    "body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 64,
    "sender": {
      "name": "Kean Duddell",
      "picture": "http://dummyimage.com/125x125.jpg/dddddd/000000"
    },
    "sendDate": "2020-04-03T12:36:03Z",
    "subject": "tincidunt ante vel ipsum praesent blandit lacinia",
    "body": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 65,
    "sender": {
      "name": "Dayna Kiera",
      "picture": "http://dummyimage.com/176x238.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-12-13T12:25:19Z",
    "subject": "donec quis orci eget orci vehicula condimentum curabitur in libero",
    "body": "Cras in purus eu magna vulputate luctus.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 66,
    "sender": {
      "name": "Bendicty Friett",
      "picture": "http://dummyimage.com/233x196.png/ff4444/ffffff"
    },
    "sendDate": "2020-04-20T04:19:34Z",
    "subject": "neque aenean auctor gravida sem praesent",
    "body": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 67,
    "sender": {
      "name": "Alica Dreier",
      "picture": "http://dummyimage.com/204x211.bmp/dddddd/000000"
    },
    "sendDate": "2020-10-16T15:13:48Z",
    "subject": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    "body": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 68,
    "sender": {
      "name": "Daniel Conti",
      "picture": "http://dummyimage.com/103x159.bmp/5fa2dd/ffffff"
    },
    "sendDate": "2020-07-22T10:28:43Z",
    "subject": "nam dui proin leo odio porttitor",
    "body": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "personal"
  }, {
    "id": 69,
    "sender": {
      "name": "Woody Bezley",
      "picture": "http://dummyimage.com/155x232.png/dddddd/000000"
    },
    "sendDate": "2020-09-14T11:37:54Z",
    "subject": "nulla suspendisse potenti cras in purus eu magna vulputate luctus",
    "body": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }, {
    "id": 70,
    "sender": {
      "name": "Wilhelmine Berendsen",
      "picture": "http://dummyimage.com/155x165.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-12-19T16:15:33Z",
    "subject": "tempor convallis nulla neque libero convallis eget",
    "body": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "purchases"
  }, {
    "id": 71,
    "sender": {
      "name": "Niels Baddow",
      "picture": "http://dummyimage.com/130x236.png/dddddd/000000"
    },
    "sendDate": "2020-12-05T21:28:26Z",
    "subject": "sit amet cursus id turpis integer aliquet massa id",
    "body": "Vivamus tortor.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 72,
    "sender": {
      "name": "Shayne Guiel",
      "picture": "http://dummyimage.com/200x225.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-12-07T08:46:33Z",
    "subject": "primis in faucibus orci luctus et",
    "body": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 73,
    "sender": {
      "name": "Borden Mathevon",
      "picture": "http://dummyimage.com/237x207.png/ff4444/ffffff"
    },
    "sendDate": "2020-04-21T16:43:04Z",
    "subject": "nulla nunc purus phasellus in felis donec",
    "body": "Quisque porta volutpat erat.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 74,
    "sender": {
      "name": "Hallie Trathan",
      "picture": "http://dummyimage.com/243x174.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-11-21T18:14:58Z",
    "subject": "at velit eu est congue elementum",
    "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "work"
  }, {
    "id": 75,
    "sender": {
      "name": "Darrick Menere",
      "picture": "http://dummyimage.com/137x240.jpg/dddddd/000000"
    },
    "sendDate": "2020-03-11T10:51:58Z",
    "subject": "lacus at turpis donec posuere metus vitae ipsum aliquam",
    "body": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 76,
    "sender": {
      "name": "Thibaud Elner",
      "picture": "http://dummyimage.com/145x148.jpg/dddddd/000000"
    },
    "sendDate": "2020-05-11T15:20:34Z",
    "subject": "lorem vitae mattis nibh ligula nec sem duis",
    "body": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 77,
    "sender": {
      "name": "Jermayne Armatys",
      "picture": "http://dummyimage.com/236x238.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-07-20T01:56:13Z",
    "subject": "rhoncus sed vestibulum sit amet cursus",
    "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }, {
    "id": 78,
    "sender": {
      "name": "Pincus Almeida",
      "picture": "http://dummyimage.com/137x240.bmp/5fa2dd/ffffff"
    },
    "sendDate": "2020-06-13T15:41:05Z",
    "subject": "at nulla suspendisse potenti cras in",
    "body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "personal"
  }, {
    "id": 79,
    "sender": {
      "name": "Kahaleel Billingham",
      "picture": "http://dummyimage.com/192x136.bmp/dddddd/000000"
    },
    "sendDate": "2020-03-19T04:27:43Z",
    "subject": "in hac habitasse platea dictumst morbi",
    "body": "Nulla ac enim.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 80,
    "sender": {
      "name": "Mellie Lamerton",
      "picture": "http://dummyimage.com/224x210.jpg/dddddd/000000"
    },
    "sendDate": "2020-06-16T08:22:01Z",
    "subject": "vitae nisi nam ultrices libero non mattis",
    "body": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "work"
  }, {
    "id": 81,
    "sender": {
      "name": "Ania Pailin",
      "picture": "http://dummyimage.com/180x113.png/cc0000/ffffff"
    },
    "sendDate": "2020-09-02T07:35:39Z",
    "subject": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis",
    "body": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 82,
    "sender": {
      "name": "Zebedee Toth",
      "picture": "http://dummyimage.com/231x154.jpg/cc0000/ffffff"
    },
    "sendDate": "2021-01-17T00:44:40Z",
    "subject": "cursus vestibulum proin eu mi nulla ac",
    "body": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 83,
    "sender": {
      "name": "Dominik Tamsett",
      "picture": "http://dummyimage.com/126x171.png/ff4444/ffffff"
    },
    "sendDate": "2021-01-05T02:16:35Z",
    "subject": "blandit nam nulla integer pede",
    "body": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "purchases"
  }, {
    "id": 84,
    "sender": {
      "name": "Benoite Foulser",
      "picture": "http://dummyimage.com/115x151.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-12-15T23:16:53Z",
    "subject": "non velit donec diam neque vestibulum eget vulputate ut",
    "body": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 85,
    "sender": {
      "name": "Carolin Bodycote",
      "picture": "http://dummyimage.com/214x214.jpg/dddddd/000000"
    },
    "sendDate": "2020-03-14T19:41:52Z",
    "subject": "felis ut at dolor quis odio consequat varius",
    "body": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 86,
    "sender": {
      "name": "Leilah Gomersal",
      "picture": "http://dummyimage.com/140x119.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-04-15T18:03:49Z",
    "subject": "nullam sit amet turpis elementum ligula vehicula consequat morbi",
    "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 87,
    "sender": {
      "name": "Justinian Pottberry",
      "picture": "http://dummyimage.com/177x203.bmp/5fa2dd/ffffff"
    },
    "sendDate": "2020-02-22T22:35:52Z",
    "subject": "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
    "body": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 88,
    "sender": {
      "name": "Livia Heggie",
      "picture": "http://dummyimage.com/116x219.jpg/ff4444/ffffff"
    },
    "sendDate": "2020-02-19T06:53:28Z",
    "subject": "congue risus semper porta volutpat quam pede lobortis",
    "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "personal"
  }, {
    "id": 89,
    "sender": {
      "name": "Gracie Osboldstone",
      "picture": "http://dummyimage.com/233x102.bmp/ff4444/ffffff"
    },
    "sendDate": "2020-07-16T07:07:52Z",
    "subject": "rhoncus dui vel sem sed",
    "body": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 90,
    "sender": {
      "name": "Luelle Guyers",
      "picture": "http://dummyimage.com/145x199.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-03-10T11:03:13Z",
    "subject": "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
    "body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "hobbies"
  }, {
    "id": 91,
    "sender": {
      "name": "Abbot Chataignier",
      "picture": "http://dummyimage.com/100x115.png/ff4444/ffffff"
    },
    "sendDate": "2020-05-12T11:46:53Z",
    "subject": "curae mauris viverra diam vitae quam suspendisse potenti",
    "body": "Vestibulum ac est lacinia nisi venenatis tristique.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "primary",
    "folders": "work"
  }, {
    "id": 92,
    "sender": {
      "name": "Niccolo Tattershaw",
      "picture": "http://dummyimage.com/196x132.png/dddddd/000000"
    },
    "sendDate": "2020-03-06T22:10:16Z",
    "subject": "fermentum justo nec condimentum neque sapien placerat ante nulla justo",
    "body": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "hobbies"
  }, {
    "id": 93,
    "sender": {
      "name": "Jud Babonau",
      "picture": "http://dummyimage.com/210x244.bmp/dddddd/000000"
    },
    "sendDate": "2020-08-26T01:45:47Z",
    "subject": "quis turpis sed ante vivamus tortor duis mattis egestas",
    "body": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 94,
    "sender": {
      "name": "Wendye Duff",
      "picture": "http://dummyimage.com/127x105.png/cc0000/ffffff"
    },
    "sendDate": "2020-08-01T05:18:57Z",
    "subject": "potenti in eleifend quam a odio",
    "body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 95,
    "sender": {
      "name": "Filberto Clague",
      "picture": "http://dummyimage.com/192x184.bmp/dddddd/000000"
    },
    "sendDate": "2020-10-25T16:23:58Z",
    "subject": "justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    "body": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "purchases"
  }, {
    "id": 96,
    "sender": {
      "name": "Danica McKyrrelly",
      "picture": "http://dummyimage.com/147x206.bmp/dddddd/000000"
    },
    "sendDate": "2020-07-16T07:44:40Z",
    "subject": "eu nibh quisque id justo sit amet",
    "body": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "hasAttachment": true,
    "isFaved": true,
    "isOpened": true,
    "isSent": false,
    "isSnoozed": false,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "hobbies"
  }, {
    "id": 97,
    "sender": {
      "name": "Vyky Shotbolt",
      "picture": "http://dummyimage.com/180x103.bmp/cc0000/ffffff"
    },
    "sendDate": "2020-10-26T01:41:05Z",
    "subject": "ac enim in tempor turpis nec euismod scelerisque",
    "body": "Quisque porta volutpat erat.",
    "hasAttachment": false,
    "isFaved": true,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "primary",
    "folders": "work"
  }, {
    "id": 98,
    "sender": {
      "name": "Neale Knotte",
      "picture": "http://dummyimage.com/237x200.jpg/cc0000/ffffff"
    },
    "sendDate": "2020-05-07T00:44:10Z",
    "subject": "lacinia sapien quis libero nullam sit amet turpis elementum",
    "body": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": true,
    "isDraft": true,
    "isDeleted": false,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "purchases"
  }, {
    "id": 99,
    "sender": {
      "name": "Kenny Wylam",
      "picture": "http://dummyimage.com/201x120.jpg/dddddd/000000"
    },
    "sendDate": "2020-04-26T01:00:08Z",
    "subject": "nec dui luctus rutrum nulla tellus in",
    "body": "Proin at turpis a pede posuere nonummy.",
    "hasAttachment": true,
    "isFaved": false,
    "isOpened": false,
    "isSent": false,
    "isSnoozed": true,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": true,
    "isSelected": false,
    "category": "promotions",
    "folders": "work"
  }, {
    "id": 100,
    "sender": {
      "name": "Christye Heiden",
      "picture": "http://dummyimage.com/173x233.png/5fa2dd/ffffff"
    },
    "sendDate": "2020-04-30T12:47:05Z",
    "subject": "accumsan odio curabitur convallis duis consequat dui nec nisi",
    "body": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "hasAttachment": false,
    "isFaved": false,
    "isOpened": true,
    "isSent": true,
    "isSnoozed": false,
    "isDraft": false,
    "isDeleted": true,
    "isImportant": false,
    "isSelected": false,
    "category": "social",
    "folders": "personal"
  }]

`;



let mails =JSON.parse(mails_raw);

