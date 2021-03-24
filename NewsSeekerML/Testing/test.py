import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb://localhost:27017/NewsSeeker")
db = cluster["NewsSeeker"]
collection = db["MergedNews"]

results = collection.find({"title": "Drunk Bragging Trump Staffer Started Russian Collusion Investigation"})
for result in results:
    print(result)
