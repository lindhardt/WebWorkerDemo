function messageHandler(event) {
    var msg = event.data; // Input data must be JSon

    switch (msg.command) {
        case "DOWORK":
            self.postMessage("Doing work " + msg.data);
            break;
        case "DOMOREWORK":
            self.postMessage("Doing more work " + msg.data);
            break;
        case "FINISH":
            self.postMessage("Shutting down " + msg.data);
            self.close();
            break;
    }

}

self.addEventListener("message", messageHandler, false);
