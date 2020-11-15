var id;
var dueDateTime;
var title;
const taskDates = [];
const taskTitles = [];
const sendHttpRequest = (method, url, data) => {

    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6ImlDX1AzLWlEV25lMU9INEdSSGdMT1oxZmtPQWxLdFBVUUhzVEtMM1pBWFkiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQvIiwiaWF0IjoxNjA1NDY2NTUwLCJuYmYiOjE2MDU0NjY1NTAsImV4cCI6MTYwNTQ3MDQ1MCwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiXSwiYWlvIjoiRTJSZ1lMZ3BJcDJ0OXFZb1QvN2g5MU1UTDVqbm5zMjJTMG5YMUk3ZHJjYjl3RjdxK21FQSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggZXhwbG9yZXIgKG9mZmljaWFsIHNpdGUpIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlZhbmNlIiwiZ2l2ZW5fbmFtZSI6IkFkZWxlIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjMuMTI3LjQuMjQzIiwibmFtZSI6IkFkZWxlIFZhbmNlIiwib2lkIjoiMjViY2M0M2YtZTJkNi00ZGJhLTkyNjctNWI0YmY5MTBhZDZkIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRjgxQkZFOTkiLCJyaCI6IjAuQUFBQWRNMWpQQ3VGMVVTUjJ4TTRFbG5kbExYSWk5NzUyYkZJcUsyM1NOcHlVR1IyQUY0LiIsInNjcCI6Im9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIGVtYWlsIiwic3ViIjoiZXJfMlVqUWFMLVNWMTc5bW5vRWRGS2xNTUQ2ZGxXbTlmM2dhWkpVX3FXZyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjNjNjNjZDc0LTg1MmItNDRkNS05MWRiLTEzMzgxMjU5ZGQ5NCIsInVuaXF1ZV9uYW1lIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXBuIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXRpIjoidVZNM0RsWXhqVXlaNlBpRzFuMUlBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJFYTBzY3NzeTdzNjdmOVlMb2lrRHhfUVltZ2tZLTdIZXk0WVRWOWNnOHJ3In0sInhtc190Y2R0IjoxNjA1MjQ1MTA0fQ.ETB4iv5g7BH1HbwsDjfOHfWiHi9qfNqoJPct-utK2V5RPVb9qgVc8LYsq54GzVbbTP2-qnCp66KYUoPRS73ZvIYtrpM2oJHNHcqcgGB_cgRsPD9-v_sBnr0P-r4bQftkgUx1dSCvqAYX954wOoto9viWa6gvuSHU-qUFNA_rLBHR6MUIPs2ZywM8KpGMAm88XzAH5BR2z-1RGdVxD2hxLnMpTWVImubO7wzS6ZNia15meaO9xWIuInTBrD6RHccrmI6U87ub6TE0fePzV_pqyam1u0ci0-6I8_U2YcSeC77S-q5w66E0l3SAVRwOm1L4_yWWYS8u4PSnT8oU4TNC7A'
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