# Information

The whole point of this exercise of, is that in JavaScript date class that we use over here is an abstraction for working with dates and times.

```ts
const date = new Date();
```

It encapsulates the complexity of date and time calculations, while providing you as a developer
a simple intuitive API for manipulating and retrieving dates. You are not concerned about how this get full year gets the current year, or how it gets the month and date:

```typescript
const date = new Date();

const currentDate = date.getDate();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
```

Here you are not bothered for example how `date.getMonth()` about the implementation. You just need to use these simple functions that you can trigger on the date object itself, and get the information you need.
The underlying logic is completely abstracted away from you. You don't have to worry about the underlying logic. All you get in the end is a clean interface, or an  API to interact with the date object.

The code to get current date, year and month is the perfect use case og abstraction.