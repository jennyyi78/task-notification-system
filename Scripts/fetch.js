var id;
var dueDateTime;
var title;
const taskDates = [];
const taskTitles = [];
const sendHttpRequest = (method, url, data) => {

    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik9PQU9CckJUWHZTdElXS2N0MnktS2xKUGdERFY2Nl91dlQ0VG9SUG1xRWsiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQvIiwiaWF0IjoxNjA1NDMzNzc5LCJuYmYiOjE2MDU0MzM3NzksImV4cCI6MTYwNTQzNzY3OSwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiXSwiYWlvIjoiRTJSZ1lKQU92dm1XWCs3YlorNGpUcyswNTU2TUxuY0phRXIrbVgvamVPMldiNTYvaW9RQSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggZXhwbG9yZXIgKG9mZmljaWFsIHNpdGUpIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlZhbmNlIiwiZ2l2ZW5fbmFtZSI6IkFkZWxlIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjMuMTI3LjQuMjQzIiwibmFtZSI6IkFkZWxlIFZhbmNlIiwib2lkIjoiMjViY2M0M2YtZTJkNi00ZGJhLTkyNjctNWI0YmY5MTBhZDZkIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRjgxQkZFOTkiLCJyaCI6IjAuQUFBQWRNMWpQQ3VGMVVTUjJ4TTRFbG5kbExYSWk5NzUyYkZJcUsyM1NOcHlVR1IyQUY0LiIsInNjcCI6Im9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIGVtYWlsIiwic3ViIjoiZXJfMlVqUWFMLVNWMTc5bW5vRWRGS2xNTUQ2ZGxXbTlmM2dhWkpVX3FXZyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjNjNjNjZDc0LTg1MmItNDRkNS05MWRiLTEzMzgxMjU5ZGQ5NCIsInVuaXF1ZV9uYW1lIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXBuIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXRpIjoiN2lBN2NNRzR4VU9BUS1pOGZqWTZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJFYTBzY3NzeTdzNjdmOVlMb2lrRHhfUVltZ2tZLTdIZXk0WVRWOWNnOHJ3In0sInhtc190Y2R0IjoxNjA1MjQ1MTA0fQ.AoNEJaeydhbGxcGP0fJU81TeCU-brtCXxlRs2E2A4m7ETIR_exwpkcYhz_eshxsBVKFWInoim-PFPJeCnRunF9GPL5HuMt1Lyf-PVs2tAo5D8ccwIJCCmFgKCSsUshlX-6qev2xWWOt3SXqKEcvRHeL6jEsTy7QuLJRJgDuxgjRs_4r6qV3gY89d1b7kiHn1JvR12FDbDeHJFxxQG2wRR-ofMc3E-JwqekJbqE98rpWQKjIKQHyc3EVMV7MftljT-UQUzlR55t2hMqfnU5t-7dF6eXL187fCWYpNqkfJh1lLYri8IqX7Le8uAXoVmYq1LaTU0kiuLqfU_2_VN3COeQ'
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