export const board = {
      "_id": "b101",
      "title": "Robot dev proj",
      "createdAt": 1589983468418,
      // "createdBy": {
      //       "_id": "u103",
      //       "fullname": "ytav",
      //       "username": "dorsh",
      //       "imgUrl": "http://some-img.jpg",
      // },
      "style": "#565a8f",
      "labels": [
            {
                  "id": "l101",
                  "title": "Done",
                  "color": "#0079bf"
            },
            {
                  "id": "l102",
                  "title": "Done",
                  "color": "#70b500"
            }, {
                  "id": "l103",
                  "title": "Done",
                  "color": "#ff9f1a"
            },
            {
                  "id": "l104",
                  "title": "Done",
                  "color": "#eb5a46"
            }, {
                  "id": "l105",
                  "title": "Done",
                  "color": "#f2d600"
            },
            {
                  "id": "l106",
                  "title": "Done",
                  "color": "#c377e0"
            },
            {
                  "id": "l107",
                  "title": "Done",
                  "color": "#ff78cb"
            },
            {
                  "id": "l108",
                  "title": "Done",
                  "color": "#00c2e0"
            },
            {
                  "id": "l109",
                  "title": "Done",
                  "color": "#51e898"
            },
            {
                  "id": "l110",
                  "title": "Done",
                  "color": "#c4c9cc"
            }
      ],
      "members": [
            // {
      //       "_id": "u101",
      //       "fullname": "Ralph Barnes",
      //       "username": "RALFI",
      //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
      // },
      // {
      //       "_id": "u102",
      //       "fullname": "Mitchell Vargas",
      //       "username": "MITCHI",
      //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      // }, {
      //       "_id": "u103",
      //       "fullname": "Audrey Scott",
      //       "username": "AUDRY",
      //       "imgUrl": "https://randomuser.me/api/portraits/thumb/women/16.jpg",
      // },
      // {
      //       "_id": "u104",
      //       "fullname": "Willard Robinson",
      //       "username": "wiliardi",
      //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      // }
      ],
      "groups": [
            {
                  "id": "g101",
                  "title": "Project Resource",
                  "tasks": [
                        {
                              "id": "task101",
                              "title": "Add Samples",
                              "style": {
                                    "bgColor": "#ff9f1a",
                              },
                              "labelIds": ["l101", "l102"],
                              "description": "description",
                              "checklists": [
                                    {
                                          "id": "ch101",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod101",
                                                      "title": "To Do 1",
                                                      "isDone": false
                                                },
                                                {
                                                      "id": "tod102",
                                                      "title": "To Do 2",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "watch": true,
                              "members": [
                              //       {
                              //       "_id": "u101",
                              //       "fullname": "Ralph Barnes",
                              //       "username": "RALFI",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
                              // },
                              // {
                              //       "_id": "u104",
                              //       "fullname": "Eli Gardner",
                              //       "username": "elis",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/women/64.jpg",
                              // }
                              ],
                        },
                        {
                              "id": "task102",
                              "title": "Edit email draft",
                              "labelIds": ["l105", "l106"],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          // "byMember": {
                                          //       "_id": "u103",
                                          //       "fullname": "ytav",
                                          //       "username": "dorsh",
                                          //       "imgUrl": "http://some-img.jpg",
                                          // }
                                    }
                              ],
                              "dueDate": 1246841611,
                              "isDone": true,
                              "watch": true,
                        },
                        {
                              "id": "task103",
                              "title": "Sketch site banner",
                              "style": {
                                    "bgColor": "#ff78cb",
                              },
                              "labelIds": ["l107", "l106", "l105"],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          // "byMember": {
                                          //       "_id": "u103",
                                          //       "fullname": "ytav",
                                          //       "username": "dorsh",
                                          //       "imgUrl": "http://some-img.jpg",
                                          // }
                                    }
                              ],
                              "checklists": [
                                    {
                                          "id": "ch109",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod103",
                                                      "title": "To Do 3",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 12735915241,
                              "watch": true,
                              "members": [
                              //       {
                              //       "_id": "u101",
                              //       "fullname": "Ralph Barnes",
                              //       "username": "RALFI",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
                              // },
                              // {
                              //       "_id": "u103",
                              //       "fullname": "Audrey Scott",
                              //       "username": "AUDRY",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/women/16.jpg",
                              // }
                              ],
                        },

                  ],
            },
            {
                  "id": "g102",
                  "title": "Questions for next meeting",
                  "tasks": [
                        {
                              "id": "t104",
                              "title": "Legal Review",
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          // "byMember": {
                                          //       "_id": "u103",
                                          //       "fullname": "ytav",
                                          //       "username": "dorsh",
                                          //       "imgUrl": "http://some-img.jpg",
                                          // }
                                    }
                              ],
                              "labelIds": ["l103"],
                              "checklists": [
                                    {
                                          "id": "ch115",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod104",
                                                      "title": "To Do 4",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 16135315211,
                        },
                        {
                              "id": "t105",
                              "title": "Social media assets",
                              "style": {
                                    "bgColor": "#0079bf",
                              },
                              "labelIds": ["l101", "l102", "l110"],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          // "byMember": 
                                          // {
                                          //       "_id": "u103",
                                          //       "fullname": "ytav",
                                          //       "username": "dorsh",
                                          //       "imgUrl": "http://some-img.jpg",
                                          // }
                                    }
                              ],
                              "checklists": [
                                    {
                                          "id": "ch120",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod105",
                                                      "title": "To Do 5",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 12152415211,
                              "watch": true,
                              "members": [
                              //       {
                              //       "_id": "u101",
                              //       "fullname": "Ralph Barnes",
                              //       "username": "RALFI",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
                              // },
                              // {
                              //       "_id": "u103",
                              //       "fullname": "Audrey Scott",
                              //       "username": "AUDRY",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/women/16.jpg",
                              // },
                              // {
                              //       "_id": "u104",
                              //       "fullname": "Willard Robinson",
                              //       "username": "wiliardi",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/45.jpg",
                              // }
                              ],
                        },

                  ],
            },
            {
                  "id": "g103",
                  "title": "Pending",
                  "tasks": [
                        {
                              "id": "t107",
                              "title": "Weekly update",
                              "style": {
                                    "bgColor": "#eb5a46",
                                    "isCover": "true"
                              },
                              "labelIds": ["l101", "l108"],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          // "byMember": {
                                          //       "_id": "u103",
                                          //       "fullname": "ytav",
                                          //       "username": "dorsh",
                                          //       "imgUrl": "http://some-img.jpg",
                                          // }
                                    }
                              ],
                              "checklists": [
                                    {
                                          "id": "ch125s",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod106",
                                                      "title": "To Do 6",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 16158715211,
                              "isDone": true,
                              "watch": true,
                              "attachment": "https://i.picsum.photos/id/608/200/200.jpg?hmac=-p1htX-mFieavdRDr9vUIJKyDHCXZAY5B35nhdcgIgQ",
                              "members": [
                                    // {
                                    //       "_id": "u102",
                                    //       "fullname": "Mitchell Vargas",
                                    //       "username": "MITCHI",
                                    //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                                    // }, {
                                    //       "_id": "u103",
                                    //       "fullname": "Audrey Scott",
                                    //       "username": "AUDRY",
                                    //       "imgUrl": "https://randomuser.me/api/portraits/thumb/women/16.jpg",
                                    // },
                              ],
                        },
                        {
                              "id": "t108",
                              "title": "Monday mission",
                              "style": {
                                    "bgColor": "#70b500",
                              },
                              "labelIds": ["l104", "l109"],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          // "byMember": {
                                          //       "_id": "u103",
                                          //       "fullname": "ytav",
                                          //       "username": "dorsh",
                                          //       "imgUrl": "http://some-img.jpg",
                                          // }
                                    }
                              ],
                              "checklists": [
                                    {
                                          "id": "ch130",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod1010",
                                                      "title": "To Do 19",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 161242111,
                              "watch": true,
                              "members": [
                              //       {
                              //       "_id": "u101",
                              //       "fullname": "Ralph Barnes",
                              //       "username": "RALFI",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
                              // },
                              // {
                              //       "_id": "u103",
                              //       "fullname": "Audrey Scott",
                              //       "username": "AUDRY",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/women/16.jpg",
                              // },
                              // {
                              //       "_id": "u104",
                              //       "fullname": "Willard Robinson",
                              //       "username": "wiliardi",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/45.jpg",
                              // }
                              ],
                        },
                        {
                              "id": "t109",
                              "title": "John report",
                              "style": {
                                    "bgColor": "#ff9f1a",
                              },
                              "labelIds": ["l106", "l102"],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0,
                                          // "byMember": {
                                          //       "_id": "u103",
                                          //       "fullname": "ytav",
                                          //       "username": "dorsh",
                                          //       "imgUrl": "http://some-img.jpg",
                                          // }
                                    }
                              ],
                              "checklists": [
                                    {
                                          "id": "ch140",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod132",
                                                      "title": "To Do 45",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 12356215211,
                              "watch": true,
                              "members": [
                              //       {
                              //       "_id": "u101",
                              //       "fullname": "Ralph Barnes",
                              //       "username": "RALFI",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
                              // },
                              // {
                              //       "_id": "u102",
                              //       "fullname": "Mitchell Vargas",
                              //       "username": "MITCHI",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                              // },
                              // {
                              //       "_id": "u104",
                              //       "fullname": "Willard Robinson",
                              //       "username": "wiliardi",
                              //       "imgUrl": "https://randomuser.me/api/portraits/thumb/men/45.jpg",
                              // }
                              ],
                        },

                  ],
            },

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
                        "_id": "u101",
                        "fullname": "Randy Kelly",
                        "username": "silverswan131",
                        "imgUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
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
                        "_id": "u102",
                        "fullname": "Jill Chambers",
                        "username": "jilly",
                        "imgUrl": "https://randomuser.me/api/portraits/thumb/women/44.jpg",
                  },
                  "task": {
                        "id": "c1vds02",
                        "title": "Checklist"
                  }
            },
      ]
}