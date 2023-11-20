//Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
// const divNumbers = document.querySelector(".numbers")
// for (let i = 100; i >= 50; i=i-10) {
//     const paragr = document.createElement("p")
//     paragr.innerText = i 
//     divNumbers.append(paragr)
//     console.log(paragr);
//     }

//     Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
// const strArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Nam", "perferendis", "debitis", "reiciendis", "enim", "rerum", "animi", "vero", "obcaecati", "fuga"]
// const divStringsContainer = document.querySelector(".strings_container")
// for (let i = 0; i < strArray.length; i++) {
//     console.log(i);
//  const forParagraf = document.createElement("p")   
//  forParagraf.innerText = strArray[i]
// divStringsContainer.append(forParagraf)
//     }
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const arr = [
{first_name: "Nik",
last_name: "Dok",
age: 32
},
{ first_name: "Oliver",
last_name: "Kreiser",
age: 18 },
{ first_name: "Sam",
last_name: "Davidson",
age: 12 },
{first_name: "Mila",
last_name: "Klaus",
age: 15}
]
const divContainer = document.querySelector(".users_container")
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].age>=18) { 
        const karten = document.createElement ("div")
        karten.innerText = `${arr[i].first_name} ${arr[i].last_name}, Возраст: ${arr[i].age} `
  divContainer.append(karten)
        
    }
}