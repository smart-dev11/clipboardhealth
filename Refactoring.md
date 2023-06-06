# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Simplified `if` conditions:
Instead of usinged multiple nested `if` statements, I used `OR(||)` operator to assign the candidate value in a single line. This reduces unnecessary nesting and improves readability.

2. Early return for `null` event
I checked null event at the start of function. So it immediately returns the default TRIVIAL_PARTITION_KEY when event is null. And this avoids the need for unnecessary checks and improves the code's clarity.

3. Reorganized code
I updated logic to follow a more logical flow.
1) Handle the case where `event` is null. 2) Calculate `candiate` based on `event.partitionKey` exists or not. 3) Necessary type checks and hasing operation.

4. Removed redundant checks
I removed the redundant check for candidate being null or undefined.

5. Create `generateHash` function.
I found the repeated logic to generate has so I create a reusable function. This improves readability and reusability.
