$(document).ready(function () {
    //            console.log("ready!");

    $("#button").click(function () {
        console.log("clicked");

        if ('geolocation' in navigator) {
            //console.log("geolocation available");
            navigator.geolocation.getCurrentPosition(async position => {
                console.log(position);
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                //get inside form values - store in variable
                const name = document.getElementById('name').value;

                document.getElementById("lat").textContent = lat;
                document.getElementById("long").textContent = lon;

                //add info to data to be passed to database
                const data = {
                    name,
                    lat,
                    lon
                };

                //post to database
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(data)
                };

                const response = await fetch("/api", options)
                const json = await response.json();
                console.log(json);

            });

        } else {
            console.log("geolocation NOT available");
        }
    });



    // Get the input field
    var input = document.getElementById("name");

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
