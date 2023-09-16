function updateAge() {
    const birthdate = new Date("2003-01-21"); // Replace with your actual birthdate in YYYY-MM-DD format
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const birthMonth = birthdate.getMonth();
    const currentMonth = today.getMonth();
    const birthDay = birthdate.getDate();
    const currentDay = today.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    document.getElementById("age").textContent = age;
}
//calling at main html file