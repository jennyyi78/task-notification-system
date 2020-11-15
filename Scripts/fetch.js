var id;
var dueDateTime;
var title;
const taskDates = [];
const taskTitles = [];
const sendHttpRequest = (method, url, data) => {

    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6ImZOdi1ZaGRidGJXYjItNjB4a1F4YXJrS0NVSl9qWU9jZzdxY1NyMmtUcFUiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQvIiwiaWF0IjoxNjA1NDI5NTk5LCJuYmYiOjE2MDU0Mjk1OTksImV4cCI6MTYwNTQzMzQ5OSwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiXSwiYWlvIjoiQVNRQTIvOFJBQUFBeUUyK1p2aFkzVmU3a3lqN014Z2o2dk44Z0Y3STRWWCt1Q3BWVWVXS2pydz0iLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIChvZmZpY2lhbCBzaXRlKSIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJWYW5jZSIsImdpdmVuX25hbWUiOiJBZGVsZSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjIzLjEyNy40LjI0MyIsIm5hbWUiOiJBZGVsZSBWYW5jZSIsIm9pZCI6IjI1YmNjNDNmLWUyZDYtNGRiYS05MjY3LTViNGJmOTEwYWQ2ZCIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMEY4MUJGRTk5IiwicmgiOiIwLkFBQUFkTTFqUEN1RjFVU1IyeE00RWxuZGxMWElpOTc1MmJGSXFLMjNTTnB5VUdSMkFGNC4iLCJzY3AiOiJvcGVuaWQgcHJvZmlsZSBUYXNrcy5SZWFkV3JpdGUgVXNlci5SZWFkIFVzZXIuUmVhZEJhc2ljLkFsbCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImVyXzJValFhTC1TVjE3OW1ub0VkRktsTU1ENmRsV205ZjNnYVpKVV9xV2ciLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiIzYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQiLCJ1bmlxdWVfbmFtZSI6IkFkZWxlVkBkZXZpYW50NjY2Lm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFkZWxlVkBkZXZpYW50NjY2Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IklZNGNFYjJSR1VhRVlIZkdGaXhCQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiRWEwc2Nzc3k3czY3ZjlZTG9pa0R4X1FZbWdrWS03SGV5NFlUVjljZzhydyJ9LCJ4bXNfdGNkdCI6MTYwNTI0NTEwNH0.OzZtvsdL_B_t43A5bH323Vnt5qDIQDEkg8xRAXyyb2RlmW7QttaYS4y9ErRh2g_MKhgTQZZUGzMng8JH41HllRqnTY9eqJNe6hi-jeGgKfF6gLvVSddC08DFumiXOOqnL5jRtJRIDZEaGF3QDAzhgqXh68vYlGe5udSi6cuQAuTz8HWM8DNbUQ71ZdREtWvAUpVqTgyxLAC2VBs6XkefeEwQDSGYEEWhNoi_5VI2lznrw0YUEA9-5JfaVyXm2mAMvofujZKuesmLYQCchlKHQ6hrbQNumVTx_0e699unhUotJJAT3S4lKd-fRfNT1OcM2lYrcz0SpXSSnAdNov1xTw'
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
    var taskDate = new Date(date);
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth();
    var todayDay = today.getDate();
    var year = taskDate.getFullYear();
    var month = taskDate.getMonth();
    var day = taskDate.getDate();
    
    return (todayYear === year && todayMonth === month && taskDate - today > 0 )
    
}

function createNotification(title) {
    var notification = new Notification(getTaskMessage(title));
    // Grace added an alert - you may want to comment it out
    // alert(getTaskMessage(title));
}


const getData = () => {
    sendHttpRequest('GET', 'https://graph.microsoft.com/v1.0/me/todo/lists')
    .then(responseData => {
        //console.log(responseData);
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

// I just wanted to add a clock feature because that's so cool
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

const THIRTY_MINUTES = 30 * 60000; // 60000 ms in a minute
window.setTimeout(getData, 1000) // tales one sec for it to first execute
window.setInterval(getData, THIRTY_MINUTES); // executes every 