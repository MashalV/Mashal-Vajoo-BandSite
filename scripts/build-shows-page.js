    const shows = [
    {
        Date: "Mon Sept 09 2024", 
        Venue: "Ronald Lane", 
        Location: "San Francisco, CA",
    },
    {
        Date: "Tue Sept 17 2024", 
        Venue: "Pier 3 East", 
        Location: "San Francisco, CA" ,
    },
    {
        Date: "Sat Oct 12 2024", 
        Venue: "View Lounge",  
        Location: "San Francisco, CA", 
    },
    {
        Date: "Sat Nov 16 2024", 
        Venue: "Hyatt Agency", 
        Location: "San Francisco, CA", 
    },
    {
        Date: "Fri Nov 29 2024",
        Venue: "Moscow Center", 
        Location: "San Francisco, CA" ,
    },
    {
        Date: "Wed Dec 18 2024", 
        Venue: "Press Club",
        Location: "San Francisco, CA",
    },];

    const showContainer = document.getElementById("show-container");
    console.log(showContainer);


    function createDiv(className, text = "") {
        const div = document.createElement("div");
        div.className = className;
        div.innerText = text;
        return div;
        }

    function displayShows (show) {
        const showListEl = createDiv ("showList");

        const dateEl = createDiv ("showList__date");
        showListEl.append(dateEl); 

        const dateTitleEl = createDiv ("showList__date--title", "DATE");
        dateEl.append(dateTitleEl); 

        const dateTitleTabletEl = createDiv ("showList__date--titleTablet");
        dateEl.append(dateTitleTabletEl); 

        const dateDetailsEl = createDiv ("showList__date--details", show.Date);
        dateEl.append(dateDetailsEl); 

        const venueEl = createDiv ("showList__venue");
        showListEl.append(venueEl);

        const venueTitleEl = createDiv ("showList__venue--title", "VENUE");
        venueEl.append(venueTitleEl); 

        const venueTitleTabletEl = createDiv ("showList__venue--titleTablet");
        venueEl.append(venueTitleTabletEl); 

        const venueDetailsEl = createDiv ("showList__venue--details", show.Venue);
        venueEl.append(venueDetailsEl); 

        const locationEl = createDiv ("showList__location");
        showListEl.append(locationEl);

        const locationTitleEl = createDiv ("showList__location--title", "LOCATION");
        locationEl.append(locationTitleEl); 

        const locationTitleTabletEl = createDiv ("showList__location--titleTablet");
        locationEl.append(locationTitleTabletEl); 

        const locationDetailsEl = createDiv ("showList__location--details", show.Location);
        locationEl.append(locationDetailsEl); 

        const btnEl = createDiv ("showList__btn");
        showListEl.append(btnEl);
        
        const btnTixEl = createDiv ("showList__btn--tix", "BUY TICKETS");
        btnEl.append(btnTixEl);

        showContainer.append(showListEl);

    }

    console.log (showContainer);

    function renderShows() { 
        showContainer.innerHTML = '';
        shows.forEach(displayShows);
    }


    renderShows(); 