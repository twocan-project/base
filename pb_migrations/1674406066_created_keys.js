migrate((db) => {
  const collection = new Collection({
    "id": "dzqbu0i1hyfyb11",
    "created": "2023-01-22 16:47:46.046Z",
    "updated": "2023-01-22 16:47:46.046Z",
    "name": "keys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wh0bwast",
        "name": "owner",
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
        "id": "4ltnsnmy",
        "name": "key",
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
  const collection = dao.findCollectionByNameOrId("dzqbu0i1hyfyb11");

  return dao.deleteCollection(collection);
})
