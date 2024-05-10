// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log('Promise consumed..');
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');



// we can refactor our post project 

/* 

function createPost(post) {
                          return new Promise((resolve, reject) => {
                    setTimeout(() => {
                    posts.push(post);
                    let error = true;
                    if (!error) {
                    resolve();
                    } else {
                    reject('Error: Something went wrong');
                    }
                    }, 2000);
                    });
}

//To handle promises, we use the then method, which takes in a function that will be called when the
// promise is resolved. We will simply pass in the getPosts function as the then method.


         createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts);


*/




/* 
Promise Chaining


promise
          .then((user) => {
                  console.log(user);
                  return user.name;
          })
          .then((name) => {
                    console.log(name);
                    return name.length;
          })
          .then((nameLength) => console.log(nameLength))
          .catch((error) => console.log(error)




*/