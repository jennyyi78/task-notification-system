
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
           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkpWT05PcVJaNTBoTHoyQlRhS2F5UFprSnFlcmJsb056TDV2RmxCWWZNOWciLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQvIiwiaWF0IjoxNjA1NDExNzE5LCJuYmYiOjE2MDU0MTE3MTksImV4cCI6MTYwNTQxNTYxOSwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiXSwiYWlvIjoiRTJSZ1lHQ2VteW94MTlWRHFGNzdyT01WMlpQSGo4amZXbHFUcHNTbWFuSTdZRlBxL0FvQSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggZXhwbG9yZXIgKG9mZmljaWFsIHNpdGUpIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlZhbmNlIiwiZ2l2ZW5fbmFtZSI6IkFkZWxlIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjMuMTI3LjQuMjQzIiwibmFtZSI6IkFkZWxlIFZhbmNlIiwib2lkIjoiMjViY2M0M2YtZTJkNi00ZGJhLTkyNjctNWI0YmY5MTBhZDZkIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRjgxQkZFOTkiLCJyaCI6IjAuQUFBQWRNMWpQQ3VGMVVTUjJ4TTRFbG5kbExYSWk5NzUyYkZJcUsyM1NOcHlVR1IyQUY0LiIsInNjcCI6Im9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiZXJfMlVqUWFMLVNWMTc5bW5vRWRGS2xNTUQ2ZGxXbTlmM2dhWkpVX3FXZyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjNjNjNjZDc0LTg1MmItNDRkNS05MWRiLTEzMzgxMjU5ZGQ5NCIsInVuaXF1ZV9uYW1lIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXBuIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXRpIjoidkU5Z1JXVE8xMHVxdS1QcGpLb3hBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJFYTBzY3NzeTdzNjdmOVlMb2lrRHhfUVltZ2tZLTdIZXk0WVRWOWNnOHJ3In0sInhtc190Y2R0IjoxNjA1MjQ1MTA0fQ.yKP2Tri-tcBz4x4UntKJTgMFU1LPxEGXfDDqNeVp_tTMSHlB83etugjQRNBeT-azrUDM9ZSL1IO_7OsYtR3-FODiuU1wiowMwLksFOL1CLFLH8yjHXjYF74-nr7RW6qqyarLIiClVMjyOdBb85gdlKo7NJzm5NeBDb3i_JABqq0VLLHwrI8jNkXdZy7JaYzhp4AkVUgYm3mB3hMl9_oAR3WKRFiG9U_IZEW2cW-t-9IVmZeBzg1XchnY27jpYXuoF5dpqCcwmgipcwSZdE33xSARcbT6L7mlhDiMJUNrxriusTmP_JeyGk_hE5BwvKwCp9jrRB8tN8Xld2kHzM3n-g'
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
    
    return (todayYear === year && todayMonth === month && taskDate - today >= 5 )
    
}

function createNotification(title) {
    var notification = new Notification(getTaskMessage(title));
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
