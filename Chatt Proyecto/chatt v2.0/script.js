function uploadPDF() {
    // Get the file input and form element
    var pdfInput = document.getElementById('pdfInput');
    var form = document.getElementById('myForm');

    // Create FormData and append the file
    var formData = new FormData(form);
    formData.append('file', pdfInput.files[0]);


    // const options = {
    //     headers: {
    //         "x-api-key": "sec_d5OePCrGjy8XqJ6E2izS2FgA7l8h2dtg",
    //         ...formData.getHeaders(),
    //     },
    // };
    // Replace 'YOUR_CHATPDF_API_ENDPOINT' with the actual ChatPDF API endpoint
    var url = 'https://api.chatpdf.com/v1/sources/add-file';

    fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
            "x-api-key": "sec_d5OePCrGjy8XqJ6E2izS2FgA7l8h2dtg"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}





function chat() {

    var url = 'https://api.chatpdf.com/v1/chats/message';



    const data = {
        sourceId: "src_lmPg1MsxLAHeGMGmawVit",
        messages: [
            {
                role: "user",
                content: document.getElementById("my-message").value,
            },
        ],
    };


    console.log(data)
    fetch(url, {
        headers: {
            "x-api-key": "sec_d5OePCrGjy8XqJ6E2izS2FgA7l8h2dtg",
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: data,
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}


function sendMessage() {


    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;
    if(message === "quien es el mejor jugador de todos los tiempos?"){
            document.getElementById("ress").innerHTML = "Con certeza es <b>Cristiano Ronaldo</b>"

        return false;

    }

    // Replace 'YOUR_CHAT_API_ENDPOINT' with the actual chat API endpoint
    var chatApiEndpoint = 'https://api.chatpdf.com/v1/chats/message';

    // Make a POST request to the chat API
    fetch(chatApiEndpoint, {
        method: 'POST',
        headers: {
            "x-api-key": "sec_d5OePCrGjy8XqJ6E2izS2FgA7l8h2dtg",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sourceId: "src_lmPg1MsxLAHeGMGmawVit",
            sourceId: "src_EuV38vCpccxXEl7rqzfIQ",
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("ress").innerHTML = data.content
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("ress").innerHTML = error
        });
}