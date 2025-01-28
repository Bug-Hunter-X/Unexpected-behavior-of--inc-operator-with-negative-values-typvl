```javascript
//Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{'counter':-1}});
//The above code will not throw any error but if counter value is already 0, it will be set to -1. 
//This behavior might be unexpected in some cases and could lead to unexpected data.
```