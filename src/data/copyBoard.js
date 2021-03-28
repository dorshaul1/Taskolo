export const board = {
      "_id": ObjectId("606056b5f2a2af09afd9f2fb"),
      "title": "Robot dev proj",
      "createdAt": 1589983468418.0,
      "style": "#0079bf",
      "labels": [
            {
                  "id": "l101",
                  "title": "",
                  "color": "#70b500"
            },
            {
                  "id": "l102",
                  "title": "",
                  "color": "#f2d600"
            },
            {
                  "id": "l103",
                  "title": "",
                  "color": "#eb5a46"
            },
            {
                  "id": "l104",
                  "title": "",
                  "color": "#c377e0"
            },
            {
                  "id": "l105",
                  "title": "",
                  "color": "#0079bf"
            },
            {
                  "id": "l106",
                  "title": "",
                  "color": "#00c2e0"
            }
      ],
      "members": [
            {
                  "_id": "605f10852078191f0492f1a5",
                  "username": "ytavpeer",
                  "fullname": "ytav",
                  "email": "ytav.peer@sdgsdg.com",
                  "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png",
                  "createdAt": "2021-03-27T11:01:25.000Z"
            },
            {
                  "_id": "605b2497d5014777a6084ce9",
                  "fullname": "Dor Shaul",
                  "username": "jhon jhon",
                  "imgUrl": "https://randomuser.me/api/portraits/thumb/men/31.jpg",
                  "createdAt": "2021-03-24T11:37:59.000Z"
            }
      ],
      "groups": [
            {
                  "id": "g101",
                  "title": "Development",
                  "tasks": [
                        {
                              "id": "task101",
                              "title": "Add members feature",
                              "style": {
                                    "bgColor": "#ff9f1a"
                              },
                              "labelIds": [
                                    "l101",
                                    "l102"
                              ],
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
                              "members": []
                        },
                        {
                              "id": "task102",
                              "title": "Edit email draft feature",
                              "labelIds": [
                                    "l105",
                                    "l106"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
                                    }
                              ],
                              "dueDate": 1246841611,
                              "isDone": true,
                              "watch": true,
                              "style": {
                                    "bgColor": ""
                              }
                        },
                        {
                              "id": "task103",
                              "title": "Sketch site banner",
                              "style": {
                                    "bgColor": ""
                              },
                              "labelIds": [
                                    "l106",
                                    "l105"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
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
                              "dueDate": 12735915241.0,
                              "watch": true,
                              "members": []
                        }
                  ]
            },
            {
                  "id": "g102",
                  "title": "Code Review",
                  "tasks": [
                        {
                              "id": "t104",
                              "title": "need to implement another service for all utils function",
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
                                    }
                              ],
                              "labelIds": [
                                    "l103"
                              ],
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
                                    },
                                    {
                                          "id": "ARVBr",
                                          "title": "wef",
                                          "todos": []
                                    }
                              ],
                              "dueDate": 16135315211.0,
                              "style": {
                                    "bgColor": ""
                              }
                        },
                        {
                              "id": "t105",
                              "title": "Social media assets need to be in another component",
                              "style": {
                                    "bgColor": "#0079bf"
                              },
                              "labelIds": [
                                    "l101",
                                    "l102",
                                    "l103"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
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
                              "dueDate": 12152415211.0,
                              "watch": true,
                              "members": []
                        }
                  ]
            },
            {
                  "id": "g103",
                  "title": "QA",
                  "tasks": [
                        {
                              "id": "t108",
                              "title": "the icon in task details need to be change to svg",
                              "style": {
                                    "bgColor": "#70b500"
                              },
                              "labelIds": [
                                    "l104",
                                    "l103"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
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
                              "members": []
                        },
                        {
                              "id": "t109",
                              "title": "need to make change in the main button of task preview",
                              "style": {
                                    "bgColor": "#00c2e0",
                                    "isCover": false
                              },
                              "labelIds": [
                                    "l106",
                                    "l104"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
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
                              "dueDate": 12356215211.0,
                              "watch": true,
                              "members": []
                        },
                        {
                              "id": "t107",
                              "title": "need to improve colors in header component",
                              "style": {
                                    "bgColor": "#eb5a46",
                                    "isCover": "true"
                              },
                              "labelIds": [
                                    "l101",
                                    "l104"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
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
                              "dueDate": 16158715211.0,
                              "isDone": true,
                              "watch": true,
                              "attachment": "https://i.picsum.photos/id/608/200/200.jpg?hmac=-p1htX-mFieavdRDr9vUIJKyDHCXZAY5B35nhdcgIgQ",
                              "members": []
                        },
                        {
                              "id": "P1kpV",
                              "title": "fix the scroll bar in side menu\n",
                              "style": {
                                    "bgColor": ""
                              },
                              "labelIds": [
                                    "l103",
                                    "l104"
                              ],
                              "checklists": [
                                    {
                                          "id": "msctY",
                                          "title": "scroll design",
                                          "todos": [
                                                {
                                                      "id": "qprI8",
                                                      "title": "",
                                                      "isDone": false,
                                                      "txt": "scroll fix"
                                                }
                                          ]
                                    }
                              ]
                        },
                        {
                              "id": "zbdyz",
                              "title": "fix the socket bug when user sign in\n",
                              "style": {
                                    "bgColor": "#f2d600",
                                    "isCover": false
                              },
                              "dueDate": "2021-03-30T13:05:16.776Z",
                              "checklists": [
                                    {
                                          "id": "jeMgi",
                                          "title": "socket list",
                                          "todos": [
                                                {
                                                      "id": "yn83Y",
                                                      "title": "",
                                                      "isDone": false,
                                                      "txt": "fix session"
                                                },
                                                {
                                                      "id": "Y3qBV",
                                                      "title": "",
                                                      "isDone": false,
                                                      "txt": "manage the groups"
                                                }
                                          ]
                                    },
                                    {
                                          "id": "wOq6J",
                                          "title": "socket list",
                                          "todos": []
                                    }
                              ]
                        }
                  ]
            },
            {
                  "id": "g105",
                  "title": "Production",
                  "tasks": [
                        {
                              "id": "t122",
                              "title": "need to add the new util service with new feature in production ",
                              "style": {
                                    "bgColor": "#ff9f1a"
                              },
                              "labelIds": [
                                    "l106",
                                    "l103"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
                                    }
                              ],
                              "checklists": [
                                    {
                                          "id": "ch1440",
                                          "title": "Checklist",
                                          "todos": [
                                                {
                                                      "id": "tod13245",
                                                      "title": "To Do 45",
                                                      "isDone": false
                                                }
                                          ]
                                    }
                              ],
                              "dueDate": 12356215211.0,
                              "watch": true,
                              "members": []
                        },
                        {
                              "id": "t120",
                              "title": "we can publish the invite members to board feature",
                              "style": {
                                    "bgColor": "#0079bf",
                                    "isCover": true
                              },
                              "labelIds": [
                                    "l101",
                                    "l104"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
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
                              "dueDate": 16158715211.0,
                              "isDone": true,
                              "watch": true,
                              "attachment": "https://i.picsum.photos/id/608/200/200.jpg?hmac=-p1htX-mFieavdRDr9vUIJKyDHCXZAY5B35nhdcgIgQ",
                              "members": []
                        },
                        {
                              "id": "t121",
                              "title": "need to publish the edit label new feature",
                              "style": {
                                    "bgColor": "#c377e0",
                                    "isCover": false
                              },
                              "labelIds": [
                                    "l102",
                                    "l101"
                              ],
                              "description": "description",
                              "comments": [
                                    {
                                          "id": "ZdPnm",
                                          "txt": "also @yaronb please CR this",
                                          "createdAt": 1590999817436.0
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
                              "members": []
                        }
                  ]
            }
      ],
      "activities": [
            {
                  "id": "RcBGp",
                  "txt": "added item to checklist",
                  "createdAt": 1616936790175.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "zbdyz",
                        "title": "fix the socket bug when user sign in\n"
                  }
            },
            {
                  "id": "YE4b0",
                  "txt": "updated checklist",
                  "createdAt": 1616936789075.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "zbdyz",
                        "title": "fix the socket bug when user sign in\n"
                  }
            },
            {
                  "id": "nexPe",
                  "txt": "updated checklist",
                  "createdAt": 1616936755142.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "zbdyz",
                        "title": "fix the socket bug when user sign in\n"
                  }
            },
            {
                  "id": "YyQJV",
                  "txt": "added item to checklist",
                  "createdAt": 1616936744190.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "zbdyz",
                        "title": "fix the socket bug when user sign in\n"
                  }
            },
            {
                  "id": "YLr3x",
                  "txt": "updated cover",
                  "createdAt": 1616936725652.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "zbdyz",
                        "title": "fix the socket bug when user sign in\n"
                  }
            },
            {
                  "id": "ktexO",
                  "txt": "added date",
                  "createdAt": 1616936718924.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "zbdyz",
                        "title": "fix the socket bug when user sign in\n"
                  }
            },
            {
                  "id": "ViHzs",
                  "txt": "updated checklist",
                  "createdAt": 1616936670895.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "P1kpV",
                        "title": "fix the scroll bar in side menu\n"
                  }
            },
            {
                  "id": "gSlzk",
                  "txt": "added item to checklist",
                  "createdAt": 1616936663198.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "P1kpV",
                        "title": "fix the scroll bar in side menu\n"
                  }
            },
            {
                  "id": "QtUJ8",
                  "txt": "added label",
                  "createdAt": 1616936648302.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "P1kpV",
                        "title": "fix the scroll bar in side menu\n"
                  }
            },
            {
                  "id": "eGdhv",
                  "txt": "added label",
                  "createdAt": 1616936647763.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "P1kpV",
                        "title": "fix the scroll bar in side menu\n"
                  }
            },
            {
                  "id": "cqzdZ",
                  "txt": "added label",
                  "createdAt": 1616936095887.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t109",
                        "title": "need to make change in the main button of task preview"
                  }
            },
            {
                  "id": "WgBrc",
                  "txt": "added label",
                  "createdAt": 1616936095390.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t109",
                        "title": "need to make change in the main button of task preview"
                  }
            },
            {
                  "id": "yGVPP",
                  "txt": "added label",
                  "createdAt": 1616936089950.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t122",
                        "title": "need to add the new util service with new feature in production "
                  }
            },
            {
                  "id": "KDlbn",
                  "txt": "added label",
                  "createdAt": 1616936089479.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t122",
                        "title": "need to add the new util service with new feature in production "
                  }
            },
            {
                  "id": "CjohP",
                  "txt": "added label",
                  "createdAt": 1616936083618.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t121",
                        "title": "need to publish the edit label new feature"
                  }
            },
            {
                  "id": "6KUhL",
                  "txt": "added label",
                  "createdAt": 1616936082521.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t121",
                        "title": "need to publish the edit label new feature"
                  }
            },
            {
                  "id": "DoDLD",
                  "txt": "added label",
                  "createdAt": 1616936081843.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t121",
                        "title": "need to publish the edit label new feature"
                  }
            },
            {
                  "id": "bftF3",
                  "txt": "added label",
                  "createdAt": 1616936081431.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t121",
                        "title": "need to publish the edit label new feature"
                  }
            },
            {
                  "id": "f0dAa",
                  "txt": "updated cover",
                  "createdAt": 1616936073609.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t109",
                        "title": "need to make change in the main button of task preview"
                  }
            },
            {
                  "id": "edKDY",
                  "txt": "updated cover",
                  "createdAt": 1616936064316.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t120",
                        "title": "we can publish the invite members to board feature"
                  }
            },
            {
                  "id": "7qD7m",
                  "txt": "updated cover",
                  "createdAt": 1616936063681.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t120",
                        "title": "we can publish the invite members to board feature"
                  }
            },
            {
                  "id": "fwrs3",
                  "txt": "updated cover",
                  "createdAt": 1616936058259.0,
                  "byMember": {
                        "_id": "6060592029852e36747bb53f",
                        "username": "demo",
                        "fullname": "demo user",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t121",
                        "title": "need to publish the edit label new feature"
                  }
            },
            {
                  "id": "Dx2N9",
                  "txt": "added item to checklist",
                  "createdAt": 1616926551018.0,
                  "byMember": {
                        "_id": "605efbaee8b03d2e54423115",
                        "username": "dor",
                        "fullname": "dor",
                        "imgUrl": "https://romancebooks.co.il/wp-content/uploads/2019/06/default-user-image.png"
                  },
                  "task": {
                        "id": "t104",
                        "title": "need to implement another service for all utils function"
                  }
            },
            {
                  "id": "a101",
                  "txt": "Changed Color",
                  "createdAt": 154514,
                  "byMember": {
                        "_id": "u101",
                        "fullname": "Randy Kelly",
                        "username": "silverswan131",
                        "imgUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
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
                        "imgUrl": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
                  },
                  "task": {
                        "id": "c1vds02",
                        "title": "Checklist"
                  }
            }
      ]
}