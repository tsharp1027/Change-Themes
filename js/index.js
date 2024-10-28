function changeTheme(){
    const selectedTheme = document.querySelector('input[name="change-theme"]:checked');
    if (selectedTheme){
        const themeValue = selectedTheme.value;
        const heading = document.querySelector('h1');
        if (themeValue === 'October') {
            heading.style.color = '#FFA500';
        } else if (themeValue === 'November') {
            heading.style.color = '#A52A2A';
        }
    }
}