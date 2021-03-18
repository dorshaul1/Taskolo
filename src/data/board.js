export const board = {
      "_id": "b101",
      "title": "Robot dev proj",
      "createdAt": 1589983468418,
      "createdBy": {
            "_id": "u103",
            "fullname": "ytav",
            "username": "dorsh",
            "imgUrl": "http://some-img.jpg",
      },
      "style": {},
      "labels": [
            {
                  "id": "l101",
                  "title": "Done",
                  "color": "#ff0000"
            },
            {
                  "id": "l102",
                  "title": "Done",
                  "color": "#00ff00"
            }, {
                  "id": "l103",
                  "title": "Done",
                  "color": "#0000ff"
            },
            {
                  "id": "l104",
                  "title": "Done",
                  "color": "#FFFF00"
            }, {
                  "id": "l105",
                  "title": "Done",
                  "color": "#FF00FF"
            }
      ],
      "members": [{
            "_id": "u103",
            "fullname": "ytav",
            "username": "dorsh",
            "imgUrl": "http://some-img.jpg",
      }
      ],
      "groups": [
            {
                  "id": "g1042365243",
                  "title": "Group 1",
                  "tasks": [
                  ],
                  "style": {} //group style
            },
            {
                  "id": "g101",
                  "title": "Group 1",
                  "tasks": [
                        {
                              "id": "cdmAPDKASD",
                              "title": "Replace logo"
                        },
                        {
                              "id": "cfjksdl",
                              "title": "Add Samples"
                        }
                  ],
                  "style": {} //group style
            },
            {
                  "id": "g102",
                  "title": "Group 2",
                  "tasks": [
                        {
                              "id": "VDSDS",
                              "title": "Replace logo"
                        },
                        {
                              "id": "QWEWQ",
                              "title": "Add Samples",
                              "style": {
                                    "bgColor": "#26de81"
                              },
                              "labelIds": ["l101", "l102", "l103", "l104", "l105"],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          "byMember": {
                                                "_id": "u103",
                                                "fullname": "ytav",
                                                "username": "dorsh",
                                                "imgUrl": "http://some-img.jpg",
                                          }
                                    }
                              ],
                              "checklists": [
                                    {
                                          "id": "YEhmF",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "212jX",
                                                      "title": "To Do 1",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 16156215211,
                              "watch": true,
                              "members": [{
                                    "_id": "u103",
                                    "fullname": "Mike Harper",
                                    "username": "mike",
                                    "imgUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                              },
                              {
                                    "_id": "u104",
                                    "fullname": "Eli Gardner",
                                    "username": "elis",
                                    "imgUrl": "https://randomuser.me/api/portraits/thumb/women/64.jpg",
                              }
                              ],
                              "style": {} //group style
                        },
                  ],
            }
      ],
      // }
      // {
      //       "id": "g102",
      //       "title": "Group 2",
      //       "tasks": [
      //             {
      //                   "id": "c103",
      //                   "title": "Do that"
      //             },
      //             {
      //                   "id": "c104",
      //                   "title": "Help me",
      //                   "description": "description",
      //                   "comments": [
      //                         {
      //                               "id": "ZdPnm",
      //                               "txt": "also @yaronb please CR this",
      //                               "createdAt": 1590999817436.0,
      //                               "byMember": {
      //                                     "_id": "u103",
      //                                     "fullname": "ytav",
      //                                     "username": "dorsh",
      //                                     "imgUrl": "http://some-img.jpg",
      //                               }
      //                         }
      //                   ],
      //                   "checklists": [
      //                         {
      //                               "id": "YEhmF",
      //                               "title": "Checklist",
      //                               "todos": [
      //                                     {
      //                                           "id": "212jX",
      //                                           "title": "To Do 1",
      //                                           "isDone": false
      //                                     }
      //                               ]
      //                         }
      //                   ],
      //                   "members": [{
      //                         "_id": "u103",
      //                         "fullname": "ytav",
      //                         "username": "dorsh",
      //                         "imgUrl": "http://some-img.jpg",
      //                   }
      //                   ],
      //                   "labelIds": ["101", "103"],
      //                   "createdAt": 1590999730348,
      //                   "dueDate": 16156215211,
      //                   "byMember": {
      //                         "_id": "u103",
      //                         "fullname": "ytav",
      //                         "username": "dorsh",
      //                         "imgUrl": "http://some-img.jpg",
      //                   }
      //                   ,
      //                   "style": {
      //                         "bgColor": "#26de81"
      //                   }
      //             }
      //       ],
      //       "style": {} //group style
      // }
      "activities": [
            {
                  "id": "a101",
                  "txt": "Changed Color",
                  "createdAt": 154514,
                  "byMember": {
                        "_id": "u103",
                        "fullname": "ytav",
                        "username": "ytav P",
                        "imgUrl": "http://some-img.jpg",
                  },
                  "task": {
                        "id": "QWEWQ",
                        "title": "Replace Logo"
                  }
            },
            {
                  "id": "a102",
                  "txt": "Adding Task",
                  "createdAt": 154414,
                  "byMember": {
                        "_id": "u101",
                        "fullname": "dor shaul",
                        "username": "dorsh",
                        "imgUrl": "http://some-img.jpg",
                  },
                  "task": {
                        "id": "c1vds02",
                        "title": "Checklist"
                  }
            },
      ]
}