class CustomError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log("I am line 1");
  console.log("I am line 2");
  throw new CustomError("This is a custom error");
  console.log("I am line 3");
} catch (e) {
  //   console.log(e); // stacktrace
  // console.dir(e);
  console.log(e.message); // This is a custom error
}
