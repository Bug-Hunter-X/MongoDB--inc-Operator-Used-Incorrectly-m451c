```javascript
// Incorrect usage of $inc operator within a findAndUpdate operation
db.collection('myCollection').findOneAndUpdate({
  _id: ObjectId('someObjectId')
}, {
  $inc: {
    count: '1'
  }
});
```