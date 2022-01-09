$(document).ready(function () {
    //            console.log("ready!");

    getData();

    async function getData() {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data);

        for (item of data) {
            const root = document.createElement("div");
            const mood = document.createElement("p");
            const geo = document.createElement("span");

            mood.textContent = 'name: ' + item.name + ", ";
            geo.textContent = item.lat + ", " + item.lon;

            mood.append(geo);
            root.append(mood);

            $("#results").append(root);

        }

    }

});
