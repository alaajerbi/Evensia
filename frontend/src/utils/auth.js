function isLoggedIn() {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");
    return (token !== null && token !== undefined && userId !== null && userId !== undefined);
}

module.exports.isLoggedIn = isLoggedIn;