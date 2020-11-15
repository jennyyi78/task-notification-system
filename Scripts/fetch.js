const getBtn = document.getElementById('get-btn');
var id;
var dueDateTime;
var title;
const taskDates = [];
const taskTitles = [];
const sendHttpRequest = (method, url, data) => {

    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6Im85M2lhc2FKNGViajVGQkxJaVNXR1JQLWlac0g4TlRKdXlsaTRPQWtkeFUiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQvIiwiaWF0IjoxNjA1NDA3NDk3LCJuYmYiOjE2MDU0MDc0OTcsImV4cCI6MTYwNTQxMTM5NywiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiXSwiYWlvIjoiQVNRQTIvOFJBQUFBTUFiZGF5L0VHYmFBWjVmWnM1Z2c1QzhqbGxUWnNLbDRUZXdoN21FaXdFaz0iLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIChvZmZpY2lhbCBzaXRlKSIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJWYW5jZSIsImdpdmVuX25hbWUiOiJBZGVsZSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjIzLjEyNy40LjI0MyIsIm5hbWUiOiJBZGVsZSBWYW5jZSIsIm9pZCI6IjI1YmNjNDNmLWUyZDYtNGRiYS05MjY3LTViNGJmOTEwYWQ2ZCIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMEY4MUJGRTk5IiwicmgiOiIwLkFBQUFkTTFqUEN1RjFVU1IyeE00RWxuZGxMWElpOTc1MmJGSXFLMjNTTnB5VUdSMkFGNC4iLCJzY3AiOiJvcGVuaWQgcHJvZmlsZSBUYXNrcy5SZWFkV3JpdGUgVXNlci5SZWFkIFVzZXIuUmVhZEJhc2ljLkFsbCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImVyXzJValFhTC1TVjE3OW1ub0VkRktsTU1ENmRsV205ZjNnYVpKVV9xV2ciLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiIzYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQiLCJ1bmlxdWVfbmFtZSI6IkFkZWxlVkBkZXZpYW50NjY2Lm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFkZWxlVkBkZXZpYW50NjY2Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkJtMUR4V29icmtXS3ZBczhfM0lmQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiRWEwc2Nzc3k3czY3ZjlZTG9pa0R4X1FZbWdrWS03SGV5NFlUVjljZzhydyJ9LCJ4bXNfdGNkdCI6MTYwNTI0NTEwNH0.CwGnbWf-u05cvS9YqKQO4FqG399SRWMznWD8rGU5zRtOrg5Nte-6fVU_ntXuDRei2N7r73oP4Hio3ubG4bPSynF2AGcbsHqMVUx1BXsyXQfU1ew2D6ySZuQI_8M1swwWHQHuw0052XwcCkrOkEO5a6GQHDSKCCUDoKO7u0z_NSZ90GwK7JkEc6Z3RuhnXxsZ3FkrBfZXXHVVHQPQchCeiowKAN6pXdMLRdVunu5tAfY8beQXF7eNmTXlH1YGHt12GhM6QK7Db-Pcjoy_-v67m4YnyDB1aSDDFgj55HjYJo6vJ-wbiwhw18XJkSg4AA9CgTEZyjZDYT4oDs6QmmfWVw'
          }
    } ).then(response => {
       return response.json();
    });
};

function sendNotifications(dates, titles) {
    var i;
    for (i = 0; i < dates.length; i++) {
        if (checkDate(dates[i])) {
            createNotification(titles[i]);
        }
    }
}

function checkDate(date) {
    console.log(date);
    var taskDate = new Date(date);
    var today = new Date('2020-11-14T00:00:00');
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth();
    var todayDay = today.getDate();
    var year = taskDate.getFullYear();
    var month = taskDate.getMonth();
    var day = taskDate.getDate();
 
    return (todayYear === year && todayMonth === month && taskDate - today >= 86400000 )
    
}

function createNotification(title) {
    var notification = new Notification(title);
}

const getData = () => {
    sendHttpRequest('GET', 'https://graph.microsoft.com/v1.0/me/todo/lists')
    .then(responseData => {
        console.log(responseData);
        id = responseData.value[0].id;

        var request = 'https://graph.microsoft.com/v1.0/me/todo/lists/'+ id +'/tasks?$select=DueDateTime';
        sendHttpRequest('GET', request)
        .then(responseData => {
        console.log(responseData);
        var i;
        for (i = 0; i < responseData.value.length; i++){
        if (responseData.value[i].hasOwnProperty('dueDateTime')) {
            dueDateTime = responseData.value[i].dueDateTime.dateTime;
            title = responseData.value[i].title;
            taskDates.push(dueDateTime);
            taskTitles.push(title);
        }
    }
    sendNotifications(taskDates, taskTitles);
    });
    });
    
};



getBtn.addEventListener('click', getData);
