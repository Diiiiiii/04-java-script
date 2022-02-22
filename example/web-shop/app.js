fetch("./products.json")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            console.log("Error!");
        }
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error);
    });