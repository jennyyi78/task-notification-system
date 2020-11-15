function notifyMe() {
  console.log("test");
  
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  

    else if (Notification.permission === "granted") {
     
      var notification = new Notification("Notifications Enabled!");
    }
  
  
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        
        if (permission === "granted") {
          var notification = new Notification("Notifications Enabled!");
        }
      });
    }
  
    
  }