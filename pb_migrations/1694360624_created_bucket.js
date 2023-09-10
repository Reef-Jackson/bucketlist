/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qv6vixzx69irq66",
    "created": "2023-09-10 15:43:44.658Z",
    "updated": "2023-09-10 15:43:44.658Z",
    "name": "bucket",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ef3iwrfc",
        "name": "bucket_text",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "38qvatfq",
        "name": "completion",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("qv6vixzx69irq66");

  return dao.deleteCollection(collection);
})
