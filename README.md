# MongoDB $inc Operator Usage Bug

This repository demonstrates an uncommon bug related to the usage of the `$inc` operator in MongoDB's `findOneAndUpdate` method.  The bug arises from providing a string value instead of a numeric value to the `$inc` operator, resulting in unexpected behavior and potential data inconsistencies.

## Bug Description
The `$inc` operator is designed to increment a numeric field by a specified value.  Providing a string value instead leads to the operator either failing silently or producing an unexpected result.

## Solution
The solution involves ensuring that the value provided to `$inc` is always a number.  This corrects the behavior and prevents data corruption.

## How to reproduce the bug and verify the solution
1. Clone the repository
2. Run `mongod` to start your MongoDB instance.
3. Use the `bug.js` to insert initial data and attempt the erroneous update. Note the result.
4. Use the `bugSolution.js` to demonstrate the corrected version, achieving the intended update behaviour.