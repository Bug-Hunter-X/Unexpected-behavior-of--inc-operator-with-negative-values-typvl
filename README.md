# MongoDB $inc Operator Unexpected Behavior
This example demonstrates an unexpected behavior of the `$inc` operator in MongoDB when used to decrement a counter below 0.  The `$inc` operator, while convenient for incrementing or decrementing numeric fields, doesn't inherently handle boundary conditions like preventing negative values.

The `bug.js` file shows the problematic code, and `bugSolution.js` presents a solution to ensure the counter remains non-negative.

## Bug
The primary issue is that `$inc` will simply decrement the counter, even if the result is negative. This might lead to data inconsistency if you expect the counter to always be non-negative.

## Solution
The solution involves using the `$min` operator in conjunction with `$inc` to keep the counter from going below zero.