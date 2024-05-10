 # Promises
 A promise is an object that represents the
eventual completion or failure of an asynchronous operation. The concept is that a promise is made to
complete some kind of task or operation, such as fetching data from a server. Meanwhile, the rest of
the code continues to execute. So it's asynchronous and non-blocking. When the task is complete, the
promise is either fulfilled or rejected. It also prevents callback hell , which are multiple nested
callbacks.

Most of the time, until you get into more advanced JavaScript, you will be dealing with the response
from promises, not writing them. For instance, using the fetch API will return a promise. So you will
need to know what to do with it.


# Creating A Promise
We use the Promise constructor to create a new promise. The Promise constructor takes in a function
that has two parameters, resolve and reject . The resolve function is called when the promise is
successful and the reject function is called when the promise is not successful.

 # Handling a Promise

 If we run this code, nothing will happen because we haven't dealt with the promise yet. To do that, we
use the then method. The then method takes in a function that will be called when the promise is
resolved

# Returning Data from a Promise
To return data from a promise, we simply pass it in the resolve function.
The then method takes in a function that has a parameter for the data that is returned from the Promise.


# Handling Errors
We also have a reject function that we can call when the promise is not successful,
meaning there is some kind of error.

# finally Method
The finally method is used to execute code after the promise is resolved or rejected. It will run no matter what




# Final Takeaway 
so promise is much cleaner way to handle multiple callbacks...

we put one function inside a promise and after calling it we use .then method to invoked other function...

# Refactor Code in comments




# Promise Caining
we have a promise that resolves with a user object after 1 second. We're then logging the user
object. Whatever we return from the then callback will be passed to the next then callback. So let's
return the user's name property. We can then log the name in the next then callback.
