const SearchNachAreas = () => {
    // Hier kann man die "area" ja gut mit dem Input bzw button klick füllen.. "American" steht nur als Platzhalter
	let area = "American";
	let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;

    fetch(url)
    .then(response => response.json)
    .then(data => {
        console.log(data)
    })
	return <section>areas</section>;
};

export default SearchNachAreas;
