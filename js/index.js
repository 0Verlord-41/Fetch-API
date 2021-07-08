console.log('Hello')

let myBtn = document.getElementById('myBtn');

let content = document.getElementById('content');

//Fetch from Local Text file
// function getData(){
//     let url = "test.txt";
//     fetch(url).then((response) => {
//         console.log('First then');
//         return response.text();
//     }).then((data) => {
//         console.log('Second then');
//         console.log(data);
//     })
// }

//GET Request using Fetch api
// function getData(){
//     let url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         console.log('First then');
//         return response.json();
//     }).then((data) => {
//         console.log('Second then');
//         console.log(data);
//         let str = "";
//         data.forEach(element => {
//             let uistr = `<li>${element.login}</li>`;
//             str += uistr;
//         });
//         userList.innerHTML = str;
//     })
// }
// console.log('Before getData');
// getData();
// console.log('After getData');

//Fetch from api and create List with eventListener
// myBtn.addEventListener('click', function(e){
//     let userList = document.getElementById('userList');
//     function getData(){
//         setTimeout(function(){
//             let url = "https://api.github.com/users?per_page=10";
//         fetch(url).then((response) => {
//             console.log('url');
//             return response.json();
//         }).then((data) => {
//             console.log('Second then');
//             console.log(data);
//             let str = "";
//             data.forEach(element => {
//                 let uistr = `<li class="box" id="box">${element.login}</li>`;
//                 str += uistr;
//             });
//             userList.innerHTML = str;
//         })
//         }, 5000);
//     }
//     getData();
    // // e.preventDefault()
//});

// Fetch from api and create div flexbox
// let userList = document.getElementById('secondaryWrapper');
//     function getData(){
//             let url = "https://api.github.com/users?per_page=9";
//         fetch(url).then((response) => {
//             console.log('url');
//             return response.json();
//         }).then((data) => {
//             console.log('Second then');
//             console.log(data);
//             let str = "";
//             data.forEach((element,index) => {
//                 let uistr = `<div class="container-box">
//                                 <img src="${element.avatar_url}" class="" alt="...">
//                                 <h3>BOX ${index}</h3>
//                                 <p>${element.login}.</p>
//                             </div>`;
//                 str += uistr;
//             });
//             userList.innerHTML = str;
//         })
//     }
//     getData();

//Fetch from api and create div flexbox with cards
let userList = document.getElementById('secondaryWrapper');
    function getData(){
            let url = "https://api.github.com/users?per_page=12";
        fetch(url).then((response) => {
            console.log('url');
            return response.json();
        }).then((data) => {
            console.log('Second then');
            console.log(data);
            let str = "";
            data.forEach((element,index) => {
                let uistr = `<div class="card container-box">
                                <a href="${element.html_url}" target="_blank">
                                <img src="${element.avatar_url}" alt="Avatar" style="width:100%">
                                <div class="container">
                                <h4><b>${element.login}</b></h4> 
                                </div>
                                </a>
                            </div>`;
                str += uistr;
            });
            userList.innerHTML = str;
        })
    }
    getData();

//POST Request
function postData() {
    let urlPost = "https://jsonplaceholder.typicode.com/posts"; //
    fetch(urlPost,{
        method: 'POST',
        body: JSON.stringify({
            title: 'Admiral',
            body: 'Admirable',
            userId: 999,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }).then((response) => response.json())
    .then((json) => console.log(json));
}
postData();

//Harry Bro Post Request
// function postDataReq(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"harglry347485945","salary":"123","age":"23"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }
// postDataReq()