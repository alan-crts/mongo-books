#!/bin/bash

echo "Waiting for MongoDB to be ready..."

until mongosh --host localhost --port 27017 -u "${MONGO_INITDB_ROOT_USERNAME}" -p "${MONGO_INITDB_ROOT_PASSWORD}" --authenticationDatabase admin --eval "db.adminCommand('ping')" &>/dev/null; do
  echo "MongoDB is not ready yet - waiting..."
  sleep 2
done

echo "MongoDB is ready, starting import..."

mongoimport --uri "mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/library?authSource=admin" --collection books --drop --file /tmp/import/data.json --jsonArray

echo "Import completed successfully."