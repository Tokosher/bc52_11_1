// GET
const id = 213;
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log(error.message)
//     })

// POST
// const newResource = {
//     body: 'Some data',
//     title: 'A new title for new post',
//     userId: 11
// }
//
// function getPosts () {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status)
//             }
//             return response.json()
//         })
//         .then(data => console.log(data))
//         .catch(error => {
//             console.log(error.message)
//         })
// }
//
// const responseHandler = data => {
//     console.log(data);
//     getPosts();
// }
//
// const options = {
//     method: 'POST',
//     headers: {
//         "Content-Type": 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(newResource)
// }
//
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(responseHandler)
//     .catch(error => {
//         console.log(error.message)
//     })

// PUT
// const id = 305;
// const newResource = {
//     id,
//     body1: 'Some data',
//     title: 'A new title for new post',
//     userId: 11
// }
//
// const options = {
//     method: 'PUT',
//     headers: {
//         "Content-Type": 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(newResource)
// }
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log(error.message)
//     })

// PATCH

// const newResource = {
//     body: 'Some new updated resource data'
// }
//
// const options = {
//     method: 'PATCH',
//     headers: {
//         "Content-Type": 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(newResource)
// }
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//         getPosts();
//     })
//     .catch(error => {
//         console.log(error.message)
//     })

// DELETE
// const options = {
//     method: 'DELETE'
// }
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
//     .then(response => {
//         console.log(response)
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
