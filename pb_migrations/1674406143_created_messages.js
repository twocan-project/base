migrate((db) => {
  const collection = new Collection({
    "id": "ka3p54n9d4bbluh",
    "created": "2023-01-22 16:49:03.214Z",
    "updated": "2023-01-22 16:49:03.214Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jy2pmxsz",
        "name": "sender",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "xnzup83i",
        "name": "group",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "asn4melnrg957pd",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "hnfcpqp4",
        "name": "keys",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "dzqbu0i1hyfyb11",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "ingznosp",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ka3p54n9d4bbluh");

  return dao.deleteCollection(collection);
})
