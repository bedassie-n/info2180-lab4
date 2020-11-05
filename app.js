window.onload = function(){
    var searchButton = this.document.getElementById("Search");
    var searchField = this.document.getElementById("searchValue");
    var exp = /(([a-zA-Z]){3,25}|([a-zA-Z]){3,25}' '([a-zA-Z]){3,25})|''/
    searchButton.addEventListener('click', () => {
        searchField.reportValidity();
        var sanitizedSearchValue =  searchField.value.trim()
        if(exp.test(sanitizedSearchValue)){
            this.fetch('http://localhost:8080/superheroes.php?' + new URLSearchParams({
                value: sanitizedSearchValue
            }))
            .then(response => response.text())
            .then(data => {
                this.alert(data);
            })
            .catch(error => {
                this.alert(error);
            });
        } else {

        }

    })
}