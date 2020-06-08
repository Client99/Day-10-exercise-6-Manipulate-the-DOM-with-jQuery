//Exercise 1
// Create an array with random names and yours
let array_names = ["Eszti", "Adam", "Peti", "Zoli"];

// Using forEach to add each name to the <ul> list
let i = 0;
let myAppend = array_names => {
    array_names.forEach((name) => {

        append_list = `<li class="li_${i}">${name}</li>`;
        $('ul').append(append_list);
        if (array_names[i] === "Zoli") {
            $(`.li_${i}`).css('font-weight', 'bold');
        }
        console.log(append_list);
        console.log(name);
        i = i + 1;
    });
}

// let myAppend = myNumbers => {
//     myNumbers.forEach((array_names) => {
//         i = i + 1;
//         append_list = `<li class="li_${i}">${array_names}</li>`;
//         $('ul').append(append_list);
//         if (array_names === "Zoli") {
//             $(`.li_${i}`).css('font-weight', 'bold');
//         }
//         console.log(append_list);
//         console.log(myNumbers[i]);
//     });
// }

myAppend(array_names);

//Exercise 2
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};
// Add a new block at the end of the page, the title should be in a heading,

append_div = `<div class="div"></li>`;
$('main').append(append_div);
$('.div').css('padding', '5px');
$('.div').css('padding-left', '20px');
$('.div').css('border', '3px', 'solid', 'salmon');
$('.div').css('background-color', 'moccasin');

append_title = `<h2 class="title">${additionalBlock.title}</li>`;
$('.div').append(append_title);


/// the text should be in a paragraph block
append_text = `<p class="text">${additionalBlock.text}</p>`;
$('.title').append(append_text);
$('.text').css('font-size', '18px');


let color = "purple";
// number: 10
let number = 10;
// word: cool
let word = "cool";