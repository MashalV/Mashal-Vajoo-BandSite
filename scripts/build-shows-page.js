    // const shows = [
    // {
    //     Date: "Mon Sept 09 2024", 
    //     Venue: "Ronald Lane", 
    //     Location: "San Francisco, CA",
    // },
    // {
    //     Date: "Tue Sept 17 2024", 
    //     Venue: "Pier 3 East", 
    //     Location: "San Francisco, CA" ,
    // },
    // {
    //     Date: "Sat Oct 12 2024", 
    //     Venue: "View Lounge",  
    //     Location: "San Francisco, CA", 
    // },
    // {
    //     Date: "Sat Nov 16 2024", 
    //     Venue: "Hyatt Agency", 
    //     Location: "San Francisco, CA", 
    // },
    // {
    //     Date: "Fri Nov 29 2024",
    //     Venue: "Moscow Center", 
    //     Location: "San Francisco, CA" ,
    // },
    // {
    //     Date: "Wed Dec 18 2024", 
    //     Venue: "Press Club",
    //     Location: "San Francisco, CA",
    // },];
    const showList = []; 

    const showContainer = document.getElementById("show-container");
    console.log(showContainer);


    const api = new BandSiteAPI("a265f27c-0b7a-40cc-8749-eb2b4ced6032"); 

    async function asyncCall (){

        try {
        const data = await api.getShows();
        data.forEach (data => {
            const showsInfo = {
            date: data.date,
            place: data.place,
            location: data.location,
            };
            showList.push(showsInfo);
        });
        renderShows();
        
        } catch (error) {
        console.error(error);
        }

    };

    asyncCall (); 

    


    function createDiv(className, text = "") {
        const div = document.createElement("div");
        div.className = className;
        div.innerText = text;
        return div;
        }
    
    function formatDate(date) {
        const format = { 
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        };

        const formattedDate = new Date(date).toLocaleDateString('en-US', format);

        return formattedDate.replace(/,/g,'');

    }

    function displayShows (data) {
        const showListEl = createDiv ("showList");

        const dateEl = createDiv ("showList__date");
        showListEl.append(dateEl); 

        const dateTitleEl = createDiv ("showList__date--title", "DATE");
        dateEl.append(dateTitleEl); 

        const dateTitleTabletEl = createDiv ("showList__date--titleTablet");
        dateEl.append(dateTitleTabletEl); 

        const dateDetailsEl = createDiv ("showList__date--details", formatDate(data.date));
        dateEl.append(dateDetailsEl); 

        const venueEl = createDiv ("showList__venue");
        showListEl.append(venueEl);

        const venueTitleEl = createDiv ("showList__venue--title", "VENUE");
        venueEl.append(venueTitleEl); 

        const venueTitleTabletEl = createDiv ("showList__venue--titleTablet");
        venueEl.append(venueTitleTabletEl); 

        const venueDetailsEl = createDiv ("showList__venue--details", data.place);
        venueEl.append(venueDetailsEl); 

        const locationEl = createDiv ("showList__location");
        showListEl.append(locationEl);

        const locationTitleEl = createDiv ("showList__location--title", "LOCATION");
        locationEl.append(locationTitleEl); 

        const locationTitleTabletEl = createDiv ("showList__location--titleTablet");
        locationEl.append(locationTitleTabletEl); 

        const locationDetailsEl = createDiv ("showList__location--details", data.location);
        locationEl.append(locationDetailsEl); 

        const btnEl = createDiv ("showList__btn");
        showListEl.append(btnEl);
        
        const btnTixEl = createDiv ("showList__btn--tix", "BUY TICKETS");
        btnEl.append(btnTixEl);

        showContainer.append(showListEl);

    }

    function renderShows() { 
        showContainer.innerHTML = '';
        showList.forEach(displayShows);
    }
