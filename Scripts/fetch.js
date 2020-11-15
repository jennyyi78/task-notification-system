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
           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6ImJBb3RyUHpPYUVDb0ZyS19HakdCQTZMNkp0WlgyLXFzajJYT3VaaXFVT3MiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQvIiwiaWF0IjoxNjA1Mzk5MjEzLCJuYmYiOjE2MDUzOTkyMTMsImV4cCI6MTYwNTQwMzExMywiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiXSwiYWlvIjoiRTJSZ1lMaXo2dkxzT1h2TlZtaWtlQ1RWL3NueGlYdlhaZTdpdXorMnc4eGlScXJhMTMwQSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggZXhwbG9yZXIgKG9mZmljaWFsIHNpdGUpIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlZhbmNlIiwiZ2l2ZW5fbmFtZSI6IkFkZWxlIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjMuMTI3LjQuMjQzIiwibmFtZSI6IkFkZWxlIFZhbmNlIiwib2lkIjoiMjViY2M0M2YtZTJkNi00ZGJhLTkyNjctNWI0YmY5MTBhZDZkIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRjgxQkZFOTkiLCJyaCI6IjAuQUFBQWRNMWpQQ3VGMVVTUjJ4TTRFbG5kbExYSWk5NzUyYkZJcUsyM1NOcHlVR1IyQUY0LiIsInNjcCI6Im9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiZXJfMlVqUWFMLVNWMTc5bW5vRWRGS2xNTUQ2ZGxXbTlmM2dhWkpVX3FXZyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjNjNjNjZDc0LTg1MmItNDRkNS05MWRiLTEzMzgxMjU5ZGQ5NCIsInVuaXF1ZV9uYW1lIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXBuIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXRpIjoidWZQU3RnZEtaa080MDVHVzNCSXNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJFYTBzY3NzeTdzNjdmOVlMb2lrRHhfUVltZ2tZLTdIZXk0WVRWOWNnOHJ3In0sInhtc190Y2R0IjoxNjA1MjQ1MTA0fQ.Ktw2ul9MxBFfB4gexjkewQkP_6OJ4LIRglgczFtnMaKhxwvQl65BWU9hck-5kidutd2AhpXMmEXO1iMBO4o7c6AXaJqqFbFPqBbF03umE2HS9hysrarFx4-LWdec00vVyN5DQYT6eCiGOhZpYe5x0_koQb-0f_V2Alm4in_j7uQhd7amqh5bpSyzb-Lok9eB4-rqZD3EFS2IsFmrsqFRIJrtjiQy4Wn8miYq6GWIeoMCiAYmHNjn6xesST85sVsf62ceUv9ztJm_cRDwcewg5q0Q0NanWT-NYkiAKJtp_cGrhtxZUJRj3Fpcb8BvVXa83AcJlpVRb3zO2_KO65STtA'
          }
    } ).then(response => {
       return response.json();
    });
};

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
    });
    });
    
};


getBtn.addEventListener('click', getData);
