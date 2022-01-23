$(document).ready(function () {
    //            console.log("ready!");

    getData();




    async function getData() {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data);


        //for loop to iterate through the data
        for (item of data) {

            //set up a system to show the data
            const root = document.createElement("div");
            root.classList.add("box"); //add a class to the data
            const fname = document.createElement("p");
            const lname = document.createElement("span");

            //in this context, the dot notation shows the name of the element in the database
            fname.textContent = 'name: ' + item.firstName + " ";
            lname.textContent = item.lastName;
            fname.append(lname);
            root.append(fname);

            $("#results").append(root);

        }
    }

});
