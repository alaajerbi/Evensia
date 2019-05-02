function isLoggedIn() {
    let token = localStorage.getItem("token");
    return (token !== null && token !== undefined);
}

module.exports.isLoggedIn = isLoggedIn;