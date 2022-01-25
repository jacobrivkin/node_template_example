$(document).ready(function () {


 
    const button = document.getElementById('button');
    button.addEventListener('click', async event => {
        
        //get elements from page
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
  

        //store those elements in a data object
        const data = {
            firstName,
            lastName
        };
        
        //store as JSON
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        
        //post to database
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    });


    //when enter is pressed in the form field, submit the form
    const input = document.getElementById('lastName');
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("button").click();
        }
    });


});
