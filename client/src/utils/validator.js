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
        throw new Error("Image URL should satrt with http:// or https://");
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
