migrate((db) => {
  const collection = new Collection({
    "id": "asn4melnrg957pd",
    "created": "2023-01-22 16:48:07.864Z",
    "updated": "2023-01-22 16:48:07.864Z",
    "name": "groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6lwgykkf",
        "name": "members",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "ybwwbymo",
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
        "id": "dlajsa84",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("asn4melnrg957pd");

  return dao.deleteCollection(collection);
})
