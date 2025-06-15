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

// function getDigits(array) {
//   return new Promise((resolve, reject) => {
//     const evenNumber = array.every((element) => element % 2 === 0);
//     if (evenNumber) {
//       resolve("Ура");
//     } else {
//       reject("Не ура");
//     }
//   });
// };

// getDigits([2, 4, 6, 9, 8, 10, 12])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error); 
//   });

//Напишіть функцію, яка приймає URL зображення і повертає проміс, який завантажує це зображення. 
// Якщо завантаження успішне, проміс виконується з завантаженим зображенням, а в разі помилки - відхиляється 
// з повідомленням про помилку.
// function getImgUrl(url) {
//   const promise = new Promise((resolve, reject) => {
//   const img = document.createElement("img");
//   img.onload = resolve(img);
//   img.onerror = reject("pu pu pu pu")
//   img.src = url;
//   });
//   return promise;
// }

// getImgUrl(
//   "https://st2.depositphotos.com/1093689/5763/i/450/depositphotos_57636887-stock-photo-indian-man-leaning-on-a.jpg"
// )
//   .then((result) => {
//     document.body.appendChild(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //Напишіть функцію, яка отримує масив об'єктів  і повертає проміс, 
// //який виконується з масивом імен, 
// //відсортованих за алфавітом.
// const people = [
//   { name: "John", age: 25 },
//   { name: "Anna", age: 30 },
//   { name: "Peter", age: 40 },
//   { name: "Mary", age: 35 },
// ];
// function getSortPeoples(array) {
//   const promise = new Promise((resolve, reject) => {
//     const newArray = [];
//     array.forEach((item) => {
//       newArray.push(item.name);
//     });
//     newArray.sort((a, b) => a.localeCompare(b));
//     resolve(newArray);
//   });
//   return promise;
// };

// getSortPeoples(people)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Випадковий проміс
//Створіть функцію randomPromise, яка повертає проміс, який випадковим чином виконується або відхиляється.
//Використайте метод then, щоб обробити виконання проміса та вивести повідомлення "Проміс виконано".
//Використайте метод catch, щоб обробити помилку, якщо проміс відхиляється, і вивести повідомлення "Помилка проміса".
//Використайте метод finally для виведення повідомлення "Робота з промісом завершена" незалежно від того, чи було виконання успішним,
//чи виникла помилка.

// function randomPromise() {
//   const randomPromise = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random()*2);
//     if (random === 1) {
//       resolve("Проміс виконано");
//     } else {
//       reject("Проміс не виконано");
//     }
//   });
//   return randomPromise;
// }
// randomPromise()
// .then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log("Робота з промісом завершена");
// })

// function newPromise(text, delay) {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(text);
//     }, delay)
//   })
//   return promise;
// }
// const firstPromise = newPromise("smth", 2000);
// const secondPromise = newPromise("nth", 4000);
// const thirdPromise = newPromise("eth", 1000)
// // Promise.all([firstPromise, secondPromise])
// // .then((result) => {
// //   console.log(result);
// // });
// Promise.race([firstPromise, secondPromise, thirdPromise])
// .then((result) => {
//   console.log(result)
// });


const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
};
function race(horseName, delay) {
  const promise = new Promise((resolve) => {
    setInterval(() => {
      resolve(`Horse ${horseName} finished in ${delay}`)
    }, delay);
  });
  return promise;
};

const firstHorse = race("Secretariat", Math.floor(Math.random() * 1500));
const secondHorse = race("Eclipse", Math.floor(Math.random() * 1300));
const thirdHorse = race("Australian", Math.floor(Math.random() * 300));
const forthHorse = race("Fox", Math.floor(Math.random() * 700));
refs.startBtn.addEventListener("click", () => {
  Promise.race([firstHorse, secondHorse, thirdHorse, forthHorse])
  .them((result) => {
    console.log(result);
  })
})