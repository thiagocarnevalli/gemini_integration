const API_HOST = "http://localhost:3000" // When testing local it should correspond to http://localhost:${SERVER_DEFAULT_PORT}. Check .env 


export async function generateText(userInput) {
    let data = {
        "message":  userInput
    };

   let response = await fetch(API_HOST + "/submit",{
        method: "POST",
        headers: 
        {'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    });

    return await response.text()
}