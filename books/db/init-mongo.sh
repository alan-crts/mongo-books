#!/bin/bash

# Attends que MongoDB soit prêt
echo "Attente du démarrage de MongoDB..."
sleep 5

# Utilise les variables d'environnement pour la connexion
mongoimport --uri "mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/library?authSource=admin" --collection books --drop --file /tmp/import/data.json --jsonArray
