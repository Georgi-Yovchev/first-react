export const carForm = (data) => {
    if (data["brand"].length < 3) {
        throw new Error("Car brand should be atleast 3 characters long");
    }

    if (data["model"].length < 3) {
        throw new Error("Car model should be atleast 3 characters long");
    }

    if (data["price"] <= 0) {
        throw new Error("Price should be bigger than 0");
    }

    if (!data["image"].startsWith("http")) {
        throw new Error("Image URL should start with 'http'");
    }

    if (data["year"] < 1980) {
        throw new Error("Year should be bigger than 1980");
    }

    if (data["engine"].length < 3) {
        throw new Error("Engine should be atleast 3 characters long");
    }

    if (data["mileage"] <= 0) {
        throw new Error("Mileage should be bigger than 0");
    }

    if (data["phoneNumber"].length !== 10) {
        throw new Error("Phone number should be 10 digits long");
    }
    if (data["description"].length < 30) {
        throw new Error("Description should be atleast 30 characters long");
    }
};

export const registerFornm = (data) => {
    if (data.password !== data.repassword) {
        throw new Error("Passwords do not match");
    }

    if (data.username.length < 5) {
        throw new Error("Your username should be atleast 5 characters long");
    }

    if (data.password.length < 4) {
        throw new Error("Your password should be atleast 4 characters long");
    }
};
