// const meow = true;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (meow) {
//       resolve("Meow!");
//     } else {
//       reject(new Error("Not a meow!"));
//     }
//   }, 5000);
// });
// promise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error(error);
// });

// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5)
//     },3000);
// })
// newPromise
// .then((result) => {
//     console.log(result);
//     return result*3
// })
// .then((result) => {
//     console.log(result);
//     return result+2;
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error("meow");
// });

function getDigits(array) {
  return new Promise((resolve, reject) => {
    const evenNumber = array.every((element) => element % 2 === 0);
    if (evenNumber) {
      resolve("Ура");
    } else {
      reject("Не ура");
    }
  });
};

getDigits([2, 4, 6, 9, 8, 10, 12])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); 
  });
