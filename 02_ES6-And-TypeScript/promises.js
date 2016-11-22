
// function doAsyncTask(cb) {
//   setTimeout(() => {
//     console.log("Async Task Calling Callback");
//     cb();
//   }, 1000);
// }

// doAsyncTask(() => console.log("Callback Called"));

/******* ES6 Promise Example ***********/

// NORMAL PROMISE EXAMPLE
// const hasError = false;

// function doAsyncTask() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async Task Calling Callback");
//       if (hasError) {
//         reject('Error!!')
//       } else {
//         resolve('Done!');
//       }
//     }, 1000);
//   });
//   return promise;
// }

// doAsyncTask().then(
//   (val) => console.log(val),
//   (err) => console.log(err)
// );


// IMMEDIATELY RESOLVED PROMISE EXAMPLE
// let promise = Promise.resolve('done')
//   .then(
//     (val) => {
//       // console.log(val);
//       // return 'done2';
//       throw new Error('fail');
//     }
//     // (err) => console.log(err)
//   )
//   .then(
//     (val) => console.log(val),
//     (err) => console.error(err)
//   );

// Refactor of above using .catch after chaining for cleaner code - RECOMMENDED
let promise = Promise.resolve('done')
    .then((val) => {throw new Error('fail')})
    .then((val) => console.log(val))
    .catch((err) => console.log(err));

// promise.then((val) => console.log(val));
// let promise = Promise.reject('error');










