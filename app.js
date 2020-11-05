window.onload = function(){
    var searchButton = this.document.getElementById("Search");
    //var searchField = this.document.getElementById("searchValue");
    searchButton.addEventListener('click', () => {
        //var sanitizedSearchValue =  searchField.value
        this.fetch('http://localhost:8080/superheroes.php?')
        .then(response => response.text())
        .then(data => {
            this.alert(data);
        })
        .catch(error => {
            this.alert(error);
        });
    })
}