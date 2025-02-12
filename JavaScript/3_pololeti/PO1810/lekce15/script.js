async function fetchData(url) {
    // fetch(url, {
    //     method: 'GET'
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch((error) => console.log("Can't fetch data", error));

    try {
        let response = await fetch(url)

        let data = await response.json()

        console.log(data)
        console.log(1)
    } catch (error) {
        console.error('error:', error)
    }
}

fetchData("https://6797c48dc2c861de0c6ded19.mockapi.io/users")


function postData(url, data) {
    fetch(url, {
        method: 'POST',
        // body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.log("Can't fetch data", error));
}

// let data = {}

// postData("https://6797c48dc2c861de0c6ded19.mockapi.io/users", data)

// let options = {
//     method: 'DELETE' // nebo PUT (Update)
// }

// fetch("https://6797c48dc2c861de0c6ded19.mockapi.io/users", options)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch((error) => console.log("Can't fetch data", error))



