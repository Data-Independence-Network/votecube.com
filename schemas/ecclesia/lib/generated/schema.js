export const SCHEMA = {
    "domain": "votecube.com",
    "index": null,
    "name": "@votecube/ecclesia",
    "sinceVersion": 1,
    "versions": [
        {
            "entities": [
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "DESIGN_PATTERN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "DESIGN_PATTERN_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "DESIGN_PATTERN_CSS_CLASS",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 0,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "DesignPattern",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "cssClass",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "DESIGN_PATTERNS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "EMOJI_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "EMOJI_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "EMOJI_CSS_CLASS",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 1,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Emoji",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "cssClass",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "EMOJI",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "APPLICATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "HOST",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "PORT",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 2,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Application",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "host",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "port",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "APPLICATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "DEVICE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "DEVICE_HASH",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 3,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Device",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "hash",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "DEVICES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "USER_NAME",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "EMAIL",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "PASSWORD_HASH",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "FIRST_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "MIDDLE_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "LAST_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "BIRTH_DATE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 4,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "UserAccount",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "userName",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "email",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "passwordHash",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 5
                            },
                            "index": 5,
                            "isId": false,
                            "name": "firstName",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 6
                            },
                            "index": 6,
                            "isId": false,
                            "name": "middleName",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 7
                            },
                            "index": 7,
                            "isId": false,
                            "name": "lastName",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 8
                            },
                            "index": 8,
                            "isId": false,
                            "name": "birthDate",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "USER_ACCOUNTS",
                        "indexes": []
                    },
                    "operations": {}
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "ACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "ACTOR_HASH",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 3,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "DEVICE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 2,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "APPLICATION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 5,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Actor",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "hash",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "device",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "application",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 3,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 2,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "ACTORS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 9,
                                    "oneRelationIndex": 1,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "COUNTY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 10,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOWN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 6,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "CountyTown",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "county",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": true,
                            "name": "town",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 9,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 10,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "COUNTY_TOWNS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 8,
                                    "oneRelationIndex": 1,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "STATE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 10,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOWN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 7,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "StateTown",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "state",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": true,
                            "name": "town",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 8,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 10,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "STATE_TOWNS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "STATE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "STATE_NAME",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 12,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "COUNTRY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 8,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "State",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "country",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 3,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "stateTowns",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 12,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "state"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 7,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "STATES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "COUNTY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "COUNTY_NAME",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 8,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "STATE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 9,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "County",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "state",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 3,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "countyTowns",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 8,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "county"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 6,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "COUNTIES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "TOWN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TOWN_NAME",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 9,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "COUNTY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 10,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Town",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "county",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 3,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 9,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "TOWNS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 12,
                                    "oneRelationIndex": 2,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "COUNTRY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 10,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOWN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        },
                        {
                            "index": 2
                        }
                    ],
                    "index": 11,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "CountryTown",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "name": "country",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": true,
                            "name": "town",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 12,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 10,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "COUNTRY_TOWNS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "COUNTRY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "COUNTRY_NAME",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 13,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "CONTINENT_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 12,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Country",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "continent",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 3,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "states",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "countryTowns",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 13,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "COUNTRY_ID"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 8,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "country"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 11,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "COUNTRIES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "CONTINENT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CONTINENT_NAME",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 13,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Continent",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "countries",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "CONTINENT_ID"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 12,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "CONTINENTS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_CONTINENT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 13,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "CONTINENT_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneRelationIndex": 3,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 14,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRunContinent",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "continent",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 13,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_CONTINENTS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_COUNTRY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 12,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "COUNTRY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 15,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRunCountry",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "country",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 12,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_COUNTRIES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_COUNTY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 9,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "COUNTY_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneRelationIndex": 6,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 16,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRunCounty",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "country",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 9,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_COUNTIES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_STATE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 8,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "STATE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 17,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRunState",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "state",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 8,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_STATES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_STATE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 10,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TOWN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneRelationIndex": 7,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 18,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRunTown",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "town",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 10,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_TOWNS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_RUN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "END_DATE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "START_DATE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 19,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRun",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "endDate",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "startDate",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "pollRevision",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "createdAtRevisions",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "pollContinents",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "pollCountries",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "pollStates",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "pollCounties",
                            "relationRef": {
                                "index": 6
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 11,
                            "isId": false,
                            "name": "pollTowns",
                            "relationRef": {
                                "index": 7
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "createdAtRun"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "run"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 14,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "run"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 15,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "run"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 17,
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "run"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 16,
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "run"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 11
                            },
                            "relationTableIndex": 18,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_RUNS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "SKIN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "BACKGROUND_COLOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TEXT_COLOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 20,
                                    "oneRelationIndex": 2,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_SKIN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 20,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Skin",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "backgroundColor",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "textColor",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 20,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 20,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "SKINS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_FACTOR_POSITION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "FACTOR_COORDINATE_AXIS",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POSITION_ORIENTATION",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "FACTOR_NUMBER",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "COLOR_BLUE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "COLOR_GREEN",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "COLOR_RED",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "OUTCOME_ORDINAL",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 9,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 20,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "SKIN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 10,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneRelationIndex": 9,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 11,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 55,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "FACTOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 11
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 12,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 55,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POSITION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 11
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 13,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 21,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POLL_REVISION_FACTOR_POSITION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 12
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 21,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionFactorPosition",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "axis",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "dir",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "factorNumber",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 5
                            },
                            "index": 5,
                            "isId": false,
                            "name": "blue",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 6
                            },
                            "index": 6,
                            "isId": false,
                            "name": "green",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 7
                            },
                            "index": 7,
                            "isId": false,
                            "name": "red",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 8
                            },
                            "index": 8,
                            "isId": false,
                            "name": "outcomeOrdinal",
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "skin",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "pollRevision",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 11,
                            "isId": false,
                            "name": "factorPosition",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 12,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 13,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 20,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 11
                            },
                            "relationTableIndex": 55,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 12
                            },
                            "relationTableIndex": 21,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 13
                            },
                            "relationTableIndex": 21,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_FACTOR_POSITIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_FACTOR_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_FACTOR_TYPE_VALUE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 22,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "VoteFactorType",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "value",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "VOTE_FACTOR_TYPES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_FACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "SHARE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 24,
                                    "oneRelationIndex": 2,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "VOTE_VERSION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 21,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_FACTOR_POSITION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 22,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "VOTE_FACTOR_TYPE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 23,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "VoteFactor",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "voteRevision",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 2,
                            "isId": false,
                            "name": "share",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "pollFactorPos",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "type",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 24,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 21,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 22,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "VOTE_FACTORS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 26,
                                    "oneRelationIndex": 2,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "VOTE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 24,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "VoteVersion",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "vote",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "factors",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 26,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "voteRevision"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 23,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "VOTE_VERSIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_TYPE_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_TYPE_DESCRIPTION",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 25,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "VoteType",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "description",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "VOTE_TYPES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "VOTE_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 26,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Vote",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "type",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "revisions",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "vote"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 24,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "VOTES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "LANGUAGE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "LANGUAGE_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 27,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Language",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "LANGUAGES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "FACTOR_OPINION_VERSION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "IS_ORIGINAL",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 1
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TITLE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TEXT",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 29,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "FACTOR_OPINION_VERSION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 28,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "FactorOpinionVersionTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "original",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "title",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "text",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "factorOpinionVersion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 29,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "FACTOR_OPINION_VERSION_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "FACTOR_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 43,
                                    "oneRelationIndex": 6,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_OPINION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 52,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "FACTOR_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 29,
                                    "oneRelationIndex": 3,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_FACTOR_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 29,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "FactorOpinionVersion",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "pollRevisionOpinion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "factor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "translations",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 43,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 52,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 29,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 29,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "factorOpinionVersion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 28,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "FACTOR_OPINION_VERSIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "TRANSLATION_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TRANSLATION_TYPE_CODE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 30,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "TranslationType",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "code",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "TRANSLATION_TYPES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "OUTCOME_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 32,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "OUTCOME_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 30,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TRANSLATION_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 31,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_OUTCOME_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 31,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "OutcomeTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "outcome",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "type",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 32,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 30,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 31,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 31,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "OUTCOME_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "OUTCOME_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 31,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_OUTCOME_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 32,
                                    "oneRelationIndex": 3,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_OUTCOME_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 3
                        }
                    ],
                    "index": 32,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Outcome",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "parentTranslation",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "pollRevisionsA",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "pollRevisionsB",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 31,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 32,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 32,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "outcomeVersionA"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "outcomeVersionB"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "OUTCOMES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "OUTCOME_OPINION_VERSION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "IS_ORIGINAL",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 1
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TITLE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TEXT",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 34,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "OUTCOME_OPINION_VERSION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 33,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "OutcomeOpinionVersionTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "original",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "title",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "text",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "outcomeOpinionVersion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 34,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "OUTCOME_OPINION_VERSION_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "OUTCOME_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 43,
                                    "oneRelationIndex": 7,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_OPINION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 32,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "OUTCOME_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 34,
                                    "oneRelationIndex": 3,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_OUTCOME_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 34,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "OutcomeOpinionVersion",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "pollRevisionOpinion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "outcome",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "translations",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 43,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 32,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 34,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 34,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "outcomeOpinionVersion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 33,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "OUTCOME_OPINION_VERSIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_OPINION_VERSION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_OPINION_VERSION_TRANSLATION_IS_ORIGINAL",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 1
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_OPINION_VERSION_TRANSLATION_TITLE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_OPINION_VERSION_TRANSLATION_TEXT",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 36,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_OPINION_VERSION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 35,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionOpinionVersionTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "original",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "title",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "text",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "opinionVersion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 36,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_OPINION_VERSION_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 43,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_OPINION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 36,
                                    "oneRelationIndex": 2,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POLL_REVISION_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 36,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionOpinionVersion",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "pollRevisionOpinion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "translations",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 43,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 36,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 36,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollOpinionVersion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 35,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_OPINION_VERSIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POSITION_OPINION_VERSION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "IS_ORIGINAL",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 1
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TITLE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "TEXT",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 38,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POSITION_OPINION_VERSION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 37,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PositionOpinionVersionTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "original",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "title",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "text",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "positionOpinionVersion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 38,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POSITION_OPINION_VERSION_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POSITION_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 43,
                                    "oneRelationIndex": 8,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_OPINION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 21,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_FACTOR_POSITION_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 38,
                                    "oneRelationIndex": 3,
                                    "oneColumnIndex": 0,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POSITION_OPINION_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 0
                        }
                    ],
                    "index": 38,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PositionOpinionVersion",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "pollRevisionOpinion",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "factorPosition",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "translations",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 43,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 21,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 38,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 38,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "positionOpinionVersion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 37,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POSITION_OPINION_VERSIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_SETTING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_SETTING_KEY",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_SETTING_VALUE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 12,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "COUNTRY_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 41,
                                    "oneRelationIndex": 1,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 39,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "RatingSetting",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "name": "country",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "rating",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 4,
                            "isId": false,
                            "name": "key",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 5,
                            "isId": false,
                            "name": "value",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 12,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 41,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "RATING_SETTINGS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_TYPE_CODE",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_TYPE_DESCRIPTION",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 40,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "RatingType",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "code",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "description",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "RATING_TYPES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "RATING_CSS_CLASS",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 40,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "RATING_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 41,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Rating",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "cssClass",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "type",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "settings",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 40,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "rating"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 39,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "RATINGS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_OPINION_RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 43,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_OPINION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 41,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 42,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionOpinionRating",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "pollRevisionOpinion",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "rating",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 43,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 41,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_OPINION_RATINGS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_OPINION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneRelationIndex": 11,
                                    "oneColumnIndex": 5,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 26,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "VOTE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 43,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionOpinion",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "pollRevision",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "vote",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "ratings",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "versions",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "factors",
                            "relationRef": {
                                "index": 6
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "outcomes",
                            "relationRef": {
                                "index": 7
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "positions",
                            "relationRef": {
                                "index": 8
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 26,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevisionOpinion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 42,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevisionOpinion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 36,
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevisionOpinion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 29,
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevisionOpinion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 34,
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevisionOpinion"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 38,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_OPINIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_TYPE_VALUE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 44,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollType",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "value",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_TYPES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "THEME_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "NAME",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 1
                        }
                    ],
                    "index": 45,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Theme",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 1
                            },
                            "index": 1,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "THEMES",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 45,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "THEME_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 44,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_TYPE_ID",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 46,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POLL_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [],
                    "index": 46,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Poll",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "theme",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "type",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "runs",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "revisions",
                            "relationRef": {
                                "index": 6
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 45,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 44,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 46,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 46,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "poll"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "poll"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLLS",
                        "indexes": []
                    },
                    "operations": {
                        "createOne": {
                            "type": 0,
                            "subRules": {
                                "ageSuitability": {
                                    "anyValue": true
                                },
                                "parent": {
                                    "operator": "|",
                                    "subRules": {
                                        "left": {
                                            "subRules": {
                                                "id": {
                                                    "anyValue": true
                                                }
                                            }
                                        },
                                        "right": {
                                            "isNull": true
                                        }
                                    }
                                },
                                "revisions": {
                                    "isArray": true,
                                    "subRules": [
                                        {
                                            "subRules": {
                                                "ageSuitability": {
                                                    "anyValue": true
                                                },
                                                "depth": {
                                                    "numericValue": 1
                                                },
                                                "factorPositions": {
                                                    "isArray": true,
                                                    "subRules": [
                                                        {
                                                            "subRules": {
                                                                "axis": {
                                                                    "anyValue": true
                                                                },
                                                                "dir": {
                                                                    "anyValue": true
                                                                },
                                                                "factorNumber": {
                                                                    "anyValue": true
                                                                },
                                                                "blue": {
                                                                    "anyValue": true
                                                                },
                                                                "green": {
                                                                    "anyValue": true
                                                                },
                                                                "red": {
                                                                    "anyValue": true
                                                                },
                                                                "outcomeOrdinal": {
                                                                    "anyValue": true
                                                                },
                                                                "parent": {
                                                                    "operator": "|",
                                                                    "subRules": {
                                                                        "left": {
                                                                            "isNull": true
                                                                        },
                                                                        "right": {
                                                                            "subRules": {
                                                                                "id": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "skin": {
                                                                    "operator": "|",
                                                                    "subRules": {
                                                                        "left": {
                                                                            "subRules": {
                                                                                "id": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        },
                                                                        "right": {
                                                                            "subRules": {
                                                                                "backgroundColor": {
                                                                                    "anyValue": true
                                                                                },
                                                                                "textColor": {
                                                                                    "anyValue": true
                                                                                },
                                                                                "parent": {
                                                                                    "operator": "|",
                                                                                    "subRules": {
                                                                                        "left": {
                                                                                            "isNull": true
                                                                                        },
                                                                                        "right": {
                                                                                            "subRules": {
                                                                                                "id": {
                                                                                                    "anyValue": true
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "factorPosition": {
                                                                    "subRules": {
                                                                        "factor": {
                                                                            "operator": "|",
                                                                            "subRules": {
                                                                                "left": {
                                                                                    "subRules": {
                                                                                        "id": {
                                                                                            "anyValue": true
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "right": {
                                                                                    "subRules": {
                                                                                        "ageSuitability": {
                                                                                            "anyValue": true
                                                                                        },
                                                                                        "parentTranslation": {
                                                                                            "subRules": {
                                                                                                "name": {
                                                                                                    "anyValue": true
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        "parent": {
                                                                                            "operator": "|",
                                                                                            "subRules": {
                                                                                                "left": {
                                                                                                    "isNull": true
                                                                                                },
                                                                                                "right": {
                                                                                                    "subRules": {
                                                                                                        "id": {
                                                                                                            "anyValue": true
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        "position": {
                                                                            "operator": "|",
                                                                            "subRules": {
                                                                                "left": {
                                                                                    "subRules": {
                                                                                        "id": {
                                                                                            "anyValue": true
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "right": {
                                                                                    "subRules": {
                                                                                        "ageSuitability": {
                                                                                            "anyValue": true
                                                                                        },
                                                                                        "parentTranslation": {
                                                                                            "subRules": {
                                                                                                "name": {
                                                                                                    "anyValue": true
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        "parent": {
                                                                                            "operator": "|",
                                                                                            "subRules": {
                                                                                                "left": {
                                                                                                    "isNull": true
                                                                                                },
                                                                                                "right": {
                                                                                                    "subRules": {
                                                                                                        "id": {
                                                                                                            "anyValue": true
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "functionCall": {
                                                                "functionName": "ANOTHER",
                                                                "parameters": [
                                                                    2
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                "outcomeVersionA": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "ageSuitability": {
                                                                    "anyValue": true
                                                                },
                                                                "parentTranslation": {
                                                                    "subRules": {
                                                                        "name": {
                                                                            "anyValue": true
                                                                        }
                                                                    }
                                                                },
                                                                "parent": {
                                                                    "operator": "|",
                                                                    "subRules": {
                                                                        "left": {
                                                                            "isNull": true
                                                                        },
                                                                        "right": {
                                                                            "subRules": {
                                                                                "id": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "outcomeVersionB": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "ageSuitability": {
                                                                    "anyValue": true
                                                                },
                                                                "parentTranslation": {
                                                                    "subRules": {
                                                                        "name": {
                                                                            "anyValue": true
                                                                        }
                                                                    }
                                                                },
                                                                "parent": {
                                                                    "operator": "|",
                                                                    "subRules": {
                                                                        "left": {
                                                                            "isNull": true
                                                                        },
                                                                        "right": {
                                                                            "subRules": {
                                                                                "id": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "parentTranslation": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "name": {
                                                                    "anyValue": true
                                                                },
                                                                "parent": {
                                                                    "operator": "|",
                                                                    "subRules": {
                                                                        "left": {
                                                                            "isNull": true
                                                                        },
                                                                        "right": {
                                                                            "subRules": {
                                                                                "id": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "poll": {
                                                    "subRules": {
                                                        "id": {
                                                            "anyValue": true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                },
                                "theme": {
                                    "subRules": {
                                        "id": {
                                            "anyValue": true
                                        }
                                    }
                                },
                                "type": {
                                    "subRules": {
                                        "id": {
                                            "anyValue": true
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "VALUE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneRelationIndex": 8,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 41,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 47,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionRating",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "value",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "pollRevision",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "rating",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 41,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_RATINGS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_TRANSLATION_RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "VALUE",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 41,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 48,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POLL_REVISION_TRANSLATION_RATING_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 48,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionTranslationRating",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "value",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "run",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "rating",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "child",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 41,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 48,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 48,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_TRANSLATION_RATINGS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneRelationIndex": 10,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 30,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "TRANSLATION_TYPE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 49,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POLL_REVISION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 49,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevisionTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "name": "pollRevision",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 5,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "type",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "ratings",
                            "relationRef": {
                                "index": 6
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 30,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 49,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 49,
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "translation"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 48,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISION_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "DEPTH",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 46,
                                    "oneRelationIndex": 6,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 19,
                                    "oneRelationIndex": 2,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_RUN_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 7,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 32,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "OUTCOME_A_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 7
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 8,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 4,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 32,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "OUTCOME_B_VERSION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 8
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 9,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 5,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneRelationIndex": 7,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 9
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 10,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 6,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 49,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POLL_REVISION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 10
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 3
                        }
                    ],
                    "index": 50,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PollRevision",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 4
                            },
                            "index": 4,
                            "isId": false,
                            "name": "depth",
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "poll",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "createdAtRun",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "outcomeVersionA",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "outcomeVersionB",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "name": "parentTranslation",
                            "relationRef": {
                                "index": 6
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 11,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 7
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 12,
                            "isId": false,
                            "name": "ratings",
                            "relationRef": {
                                "index": 8
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 13,
                            "isId": false,
                            "name": "factorPositions",
                            "relationRef": {
                                "index": 9
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 14,
                            "isId": false,
                            "name": "allTranslations",
                            "relationRef": {
                                "index": 10
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 15,
                            "isId": false,
                            "name": "opinions",
                            "relationRef": {
                                "index": 11
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 46,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 19,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 32,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 32,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 10
                            },
                            "relationTableIndex": 49,
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 11
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevision"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 12
                            },
                            "relationTableIndex": 47,
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevision"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 13
                            },
                            "relationTableIndex": 21,
                            "sinceVersion": 1
                        },
                        {
                            "index": 10,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevision"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 14
                            },
                            "relationTableIndex": 49,
                            "sinceVersion": 1
                        },
                        {
                            "index": 11,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "pollRevision"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 15
                            },
                            "relationTableIndex": 43,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POLL_REVISIONS",
                        "indexes": []
                    },
                    "operations": {
                        "createOne": {
                            "type": 0,
                            "subRules": {
                                "ageSuitability": {
                                    "anyValue": true
                                },
                                "depth": {
                                    "anyValue": true
                                },
                                "factorPositions": {
                                    "isArray": true,
                                    "subRules": [
                                        {
                                            "subRules": {
                                                "axis": {
                                                    "anyValue": true
                                                },
                                                "dir": {
                                                    "anyValue": true
                                                },
                                                "factorNumber": {
                                                    "anyValue": true
                                                },
                                                "blue": {
                                                    "anyValue": true
                                                },
                                                "green": {
                                                    "anyValue": true
                                                },
                                                "red": {
                                                    "anyValue": true
                                                },
                                                "outcomeOrdinal": {
                                                    "anyValue": true
                                                },
                                                "parent": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "isNull": true
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "skin": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "backgroundColor": {
                                                                    "anyValue": true
                                                                },
                                                                "textColor": {
                                                                    "anyValue": true
                                                                },
                                                                "parent": {
                                                                    "operator": "|",
                                                                    "subRules": {
                                                                        "left": {
                                                                            "isNull": true
                                                                        },
                                                                        "right": {
                                                                            "subRules": {
                                                                                "id": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "factorPosition": {
                                                    "subRules": {
                                                        "factor": {
                                                            "operator": "|",
                                                            "subRules": {
                                                                "left": {
                                                                    "subRules": {
                                                                        "id": {
                                                                            "anyValue": true
                                                                        }
                                                                    }
                                                                },
                                                                "right": {
                                                                    "subRules": {
                                                                        "ageSuitability": {
                                                                            "anyValue": true
                                                                        },
                                                                        "parentTranslation": {
                                                                            "subRules": {
                                                                                "name": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        },
                                                                        "parent": {
                                                                            "operator": "|",
                                                                            "subRules": {
                                                                                "left": {
                                                                                    "isNull": true
                                                                                },
                                                                                "right": {
                                                                                    "subRules": {
                                                                                        "id": {
                                                                                            "anyValue": true
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "position": {
                                                            "operator": "|",
                                                            "subRules": {
                                                                "left": {
                                                                    "subRules": {
                                                                        "id": {
                                                                            "anyValue": true
                                                                        }
                                                                    }
                                                                },
                                                                "right": {
                                                                    "subRules": {
                                                                        "ageSuitability": {
                                                                            "anyValue": true
                                                                        },
                                                                        "parentTranslation": {
                                                                            "subRules": {
                                                                                "name": {
                                                                                    "anyValue": true
                                                                                }
                                                                            }
                                                                        },
                                                                        "parent": {
                                                                            "operator": "|",
                                                                            "subRules": {
                                                                                "left": {
                                                                                    "isNull": true
                                                                                },
                                                                                "right": {
                                                                                    "subRules": {
                                                                                        "id": {
                                                                                            "anyValue": true
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "functionCall": {
                                                "functionName": "ANOTHER",
                                                "parameters": [
                                                    2
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "outcomeVersionA": {
                                    "operator": "|",
                                    "subRules": {
                                        "left": {
                                            "subRules": {
                                                "id": {
                                                    "anyValue": true
                                                }
                                            }
                                        },
                                        "right": {
                                            "subRules": {
                                                "ageSuitability": {
                                                    "anyValue": true
                                                },
                                                "parentTranslation": {
                                                    "subRules": {
                                                        "name": {
                                                            "anyValue": true
                                                        }
                                                    }
                                                },
                                                "parent": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "isNull": true
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "outcomeVersionB": {
                                    "operator": "|",
                                    "subRules": {
                                        "left": {
                                            "subRules": {
                                                "id": {
                                                    "anyValue": true
                                                }
                                            }
                                        },
                                        "right": {
                                            "subRules": {
                                                "ageSuitability": {
                                                    "anyValue": true
                                                },
                                                "parentTranslation": {
                                                    "subRules": {
                                                        "name": {
                                                            "anyValue": true
                                                        }
                                                    }
                                                },
                                                "parent": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "isNull": true
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "parentTranslation": {
                                    "operator": "|",
                                    "subRules": {
                                        "left": {
                                            "subRules": {
                                                "id": {
                                                    "anyValue": true
                                                }
                                            }
                                        },
                                        "right": {
                                            "subRules": {
                                                "name": {
                                                    "anyValue": true
                                                },
                                                "parent": {
                                                    "operator": "|",
                                                    "subRules": {
                                                        "left": {
                                                            "isNull": true
                                                        },
                                                        "right": {
                                                            "subRules": {
                                                                "id": {
                                                                    "anyValue": true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "poll": {
                                    "subRules": {
                                        "id": {
                                            "anyValue": true
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "FACTOR_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "FACTOR_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 52,
                                    "oneRelationIndex": 6,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "FACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 51,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_FACTOR_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 51,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "FactorTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "factor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "childFactors",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 52,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 51,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 51,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parentTranslation"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 52,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "FACTOR_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "FACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 51,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_FACTOR_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 52,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_FACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 3
                        }
                    ],
                    "index": 52,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Factor",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "createdAtPollRevision",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "parentTranslation",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "factorPositions",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "translations",
                            "relationRef": {
                                "index": 6
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 51,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 52,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 52,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "factor"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 55,
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "factor"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 51,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "FACTORS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POSITION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "POSITION_NAME",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 5
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 54,
                                    "oneRelationIndex": 6,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POSITION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 27,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "LANGUAGE_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 53,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POSITION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        }
                    ],
                    "index": 53,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "PositionTranslation",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": false,
                            "name": "name",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "position",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "language",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 54,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 27,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 53,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 53,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POSITION_TRANSLATIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "AGE_SUITABILITY",
                            "notNull": true,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": true,
                            "manyRelationColumnRefs": [],
                            "name": "POSITION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 4,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 50,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POLL_REVISION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 4
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 5,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 53,
                                    "oneColumnIndex": 2,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POSITION_TRANSLATION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 5
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 6,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 3,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 54,
                                    "oneRelationIndex": 4,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "PARENT_POSITION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 6
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 3
                        }
                    ],
                    "index": 54,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "Position",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 2
                            },
                            "index": 2,
                            "isId": false,
                            "name": "ageSuitability",
                            "sinceVersion": 1
                        },
                        {
                            "columnRef": {
                                "index": 3
                            },
                            "index": 3,
                            "isId": true,
                            "name": "id",
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "name": "createdAtPollRevision",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "name": "parentTranslation",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "name": "parent",
                            "relationRef": {
                                "index": 3
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 7,
                            "isId": false,
                            "name": "children",
                            "relationRef": {
                                "index": 4
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 8,
                            "isId": false,
                            "name": "factorPositions",
                            "relationRef": {
                                "index": 5
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 9,
                            "isId": false,
                            "name": "translations",
                            "relationRef": {
                                "index": 6
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 4
                            },
                            "relationTableIndex": 50,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 5
                            },
                            "relationTableIndex": 53,
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 6
                            },
                            "relationTableIndex": 54,
                            "sinceVersion": 1
                        },
                        {
                            "index": 4,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "parent"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 7
                            },
                            "relationTableIndex": 54,
                            "sinceVersion": 1
                        },
                        {
                            "index": 5,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "position"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 8
                            },
                            "relationTableIndex": 55,
                            "sinceVersion": 1
                        },
                        {
                            "index": 6,
                            "isId": false,
                            "oneToManyElems": {
                                "cascade": 1,
                                "mappedBy": "position"
                            },
                            "relationType": 0,
                            "propertyRef": {
                                "index": 9
                            },
                            "relationTableIndex": 53,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "POSITIONS",
                        "indexes": []
                    }
                },
                {
                    "columns": [
                        {
                            "index": 0,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [],
                            "name": "CREATED_AT",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 0
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 2
                        },
                        {
                            "index": 1,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 0,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 4,
                                    "oneColumnIndex": 1,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "USER_ACCOUNT_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 1
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 2,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 1,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 52,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "FACTOR_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 2
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        },
                        {
                            "index": 3,
                            "isGenerated": false,
                            "manyRelationColumnRefs": [
                                {
                                    "manyRelationIndex": 2,
                                    "oneSchemaIndex": null,
                                    "oneTableIndex": 54,
                                    "oneRelationIndex": 5,
                                    "oneColumnIndex": 3,
                                    "sinceVersion": 1
                                }
                            ],
                            "name": "POSITION_ID",
                            "notNull": false,
                            "propertyRefs": [
                                {
                                    "index": 3
                                }
                            ],
                            "sinceVersion": 1,
                            "type": 4
                        }
                    ],
                    "idColumnRefs": [
                        {
                            "index": 2
                        },
                        {
                            "index": 3
                        }
                    ],
                    "index": 55,
                    "isLocal": true,
                    "isRepositoryEntity": false,
                    "name": "FactorPosition",
                    "properties": [
                        {
                            "columnRef": {
                                "index": 0
                            },
                            "index": 0,
                            "isId": false,
                            "name": "createdAt",
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": false,
                            "name": "userAccount",
                            "relationRef": {
                                "index": 0
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": true,
                            "name": "factor",
                            "relationRef": {
                                "index": 1
                            },
                            "sinceVersion": 1
                        },
                        {
                            "index": 3,
                            "isId": true,
                            "name": "position",
                            "relationRef": {
                                "index": 2
                            },
                            "sinceVersion": 1
                        }
                    ],
                    "relations": [
                        {
                            "index": 0,
                            "isId": false,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 1
                            },
                            "relationTableIndex": 4,
                            "sinceVersion": 1
                        },
                        {
                            "index": 1,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 2
                            },
                            "relationTableIndex": 52,
                            "sinceVersion": 1
                        },
                        {
                            "index": 2,
                            "isId": true,
                            "relationType": 1,
                            "propertyRef": {
                                "index": 3
                            },
                            "relationTableIndex": 54,
                            "sinceVersion": 1
                        }
                    ],
                    "sinceVersion": 1,
                    "tableConfig": {
                        "name": "FACTOR_POSITIONS",
                        "indexes": []
                    }
                }
            ],
            "integerVersion": 1,
            "referencedSchemas": [],
            "versionString": "1.0.0"
        }
    ]
};
//# sourceMappingURL=schema.js.map