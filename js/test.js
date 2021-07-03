console.log('Hello')

let myBtn = document.getElementById('myBtn');

let content = document.getElementById('content');

let userList = document.getElementById('secondaryWrapper');
    function getData(){
            let url = "https://api.github.com/users?per_page=9";
        fetch(url).then((response) => {
            console.log('url');
            return response.json();
        }).then((data) => {
            console.log('Second then');
            console.log(data);
            let str = "";
            data.forEach((element,index) => {
                let uistr = `<div class="card container-box">
                                <img src="${element.avatar_url}" alt="Avatar" style="width:100%">
                                <div class="container">
                                <h4><b>${element.login}</b></h4> 
                                <p>Architect & Engineer</p> 
                                </div>
                            </div>`;
                str += uistr;
            });
            userList.innerHTML = str;
        })
    }
    getData();