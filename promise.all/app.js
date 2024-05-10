//use of promise.all


// we create a function that will take an endpoint and return data from it 

function getData(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', endpoint);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error: Something went wrong');
                }
            }
        };
        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
}

//Now, let's store each promise response in a variable:

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');


//now pass these promise  to promise.all()

Promise.all([moviesPromise, actorsPromise, directorsPromise])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));