const getBtn = document.getElementById('get-btn');
var id;

const sendHttpRequest = (method, url, data) => {

    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik5zMGRWS0M4LXZ1VE5pMjQ3bzAyTXVzRm1MVm5HWjNuOFZ1T1lVTDl1UG8iLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzYzY2Q3NC04NTJiLTQ0ZDUtOTFkYi0xMzM4MTI1OWRkOTQvIiwiaWF0IjoxNjA1MzkzODUyLCJuYmYiOjE2MDUzOTM4NTIsImV4cCI6MTYwNTM5Nzc1MiwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iLCJ1cm46bWljcm9zb2Z0OnJlcTEiLCJ1cm46bWljcm9zb2Z0OnJlcTIiLCJ1cm46bWljcm9zb2Z0OnJlcTMiXSwiYWlvIjoiRTJSZ1lCQytVaEs2YytmY0hDbFRNZFBuNlpYWDkycmxTUGx2dUYyZkpzUjRMNS9YVEIwQSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggZXhwbG9yZXIgKG9mZmljaWFsIHNpdGUpIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlZhbmNlIiwiZ2l2ZW5fbmFtZSI6IkFkZWxlIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjMuMTI3LjQuMjQzIiwibmFtZSI6IkFkZWxlIFZhbmNlIiwib2lkIjoiMjViY2M0M2YtZTJkNi00ZGJhLTkyNjctNWI0YmY5MTBhZDZkIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRjgxQkZFOTkiLCJyaCI6IjAuQUFBQWRNMWpQQ3VGMVVTUjJ4TTRFbG5kbExYSWk5NzUyYkZJcUsyM1NOcHlVR1IyQUY0LiIsInNjcCI6Im9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiZXJfMlVqUWFMLVNWMTc5bW5vRWRGS2xNTUQ2ZGxXbTlmM2dhWkpVX3FXZyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjNjNjNjZDc0LTg1MmItNDRkNS05MWRiLTEzMzgxMjU5ZGQ5NCIsInVuaXF1ZV9uYW1lIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXBuIjoiQWRlbGVWQGRldmlhbnQ2NjYub25taWNyb3NvZnQuY29tIiwidXRpIjoia1Qwdy1STHM5VXFPd2hPeFU4OHBBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJFYTBzY3NzeTdzNjdmOVlMb2lrRHhfUVltZ2tZLTdIZXk0WVRWOWNnOHJ3In0sInhtc190Y2R0IjoxNjA1MjQ1MTA0fQ.pKRpgNiCcC8oGOoJ8iwn6R_4I-Nsjqd46nW_GNwyVyrLyLbLMRkbJGA9uoZK_nHF4ySTkFLYHzLaXlESU_WZZyNyNgzvdwu-kFj-bfoDFbh9CF9WrkCJbNd3FL46uV-R3h75YHdDwt8MYQYxPIXM4EeIv400L0F0hFMGG_9jIxslvrrovqFtNazU7usAV3TtZRtYwiWmu1Hkh3VLbdJ_vspl2mqilRsJ9ffPUBXrdiOmHU17gkJN79KVN_oyBUgV3mQAR6g5xkD3lvKmCz7pxdLX7PIcLpVlLllRZRn1uLlo2Xt4XQ4YvPTwi5GHjytfCSdRevadDxeoAy1d3bJcyg'
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
    });
    // sendHttpRequest('GET', 'https://graph.microsoft.com/v1.0/me/todo/lists/' + id + '/tasks?$select=DueDateTime')
    // .then(responseData => {
    //     console.log(responseData);
    // });
};


getBtn.addEventListener('click', getData);
