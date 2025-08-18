   
      fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Or .text(), .blob(), etc., depending on the response type
      })
     .then(json => {
        console.log('API Response:', json);
        console.log('User ID:', json.userId);
        console.log('Title:', json.title);
        console.log('Completed:', json.completed);
    })
    .catch(error => console.error('Error:', error));
   