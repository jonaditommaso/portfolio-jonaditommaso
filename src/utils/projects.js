const JONES = "'Jones Magazine' is a news portal that will inform you about health, science, technology, business, finance, the price of the dollar, the current time and temperature, and soccer (information from the big five of Argentina, the table of positions and a forum to create conversations --comments in development--). It also has a library that will allow you to view, filter (by name or author) and buy books. You have a purchase gateway and a fake payment with Stripe. To buy you must log in with Google. The news consumed is from its own API. The app is SPA (managing navigation with React Router), and it was made using the MERN stack."
const AMAZON = "'Amazon.com - Own Implementation' is the renowned e-commerce site with my own implementation of styles and events. In principle, the user's location will be consulted, information that will be stored to show which country is being ordered from, and to show the street and city when you are about to make the purchase. Products displayed in the home and throughout the app are static and are the only products available. Each product has its rating, its price, its name, its image, and a button that say 'add to cart'. This action is not possible if you are not logged in. Once you add a product to the cart, the number of products will be displayed in the header. There you will go to the checkout, you can remove products from the cart, and the subtotal will be displayed. The purchase is made by entering a fake card number via Stripe, the order is shown to the user, and it is stored in a Firebase database. The app is SPA, managing navigation with React Router. To find out what other technologies I used, see the CV."
const COVID = "'Covid-19 Data In Real Time' is an information portal on the progress of the coronavirus in the world in real time. The data extracted from the disease.sh API is displayed in an attractive, compact way for easy interpretation and not to overload the user with information. It consists of a map (Open Street Map) that shows the selected information, which by default is the number of cases. You can also select the number of dead and recovered, in the latter the color of the circles changes to green. The larger the data number, the larger the circle. Each circle represents a country, you can select it, see its name, and the data of that country. The map shows a world image by default, you can select a country in alphabetical order with the slide button that says “worldwide”. On the right, a list of the countries with the most cases of covid, ordered in descending order. And below the list a graph (chart.js) with the evolution of the covid in recent months (cases, recovered and deaths)."
const POKEMON = "'Pokémon Search Game' is an app that consumes PokéAPI data, in order to search for pokemons, display their data and fight with them. There will be no way to interact with the app if you are not logged in. The login has a username, password and its validation. If you try to access any path of the app without being logged in, you will be redirected to the login. Pokémon music is available to listen and mute in a very practical and clean way. It is allowed to do an individual search, and a search of all the pokemons. The individual search allows you to enter the name of the pokemon or its number. If the search does not match any pokemon, a legend will appear to warn the user. You can hear the description of the pokemon with Speech Synthesis. On the other hand, the button that quotes ‘See all Pokemons’ will show a list of twenty pokemons. The 'Next' button will show the next twenty, and so on. Each pokemon shows its photo, its name, its number, its type, its weight, its attack, its defense, and its ability. You can also filter the pokemons by type."

export const projects = [
    {
        alt: "pokemon",
        codeDirection: "https://github.com/jonaditommaso/pokemon-search-game",
        description: POKEMON,
        href: "https://pokemon-search-game-jonaditommaso.vercel.app/",
        image: "/assets/img/pokemon.png",
        title: "Search all the Pokémon you want, fight with them and remember the old days!",
    },
    {
        alt: "amazon" ,
        codeDirection: "https://github.com/jonaditommaso/amazon-clone",
        description: AMAZON,
        href: "https://amazon-own-implementation-jonaditommaso.vercel.app/",
        image: "/assets/img/amazon.png" ,
        title: "Add products to the cart, buy them and verify your invoice!",
    },
    {
        alt: "jones",
        codeDirection: "https://github.com/jonaditommaso/jones-magazine",
        description: JONES,
        href: "https://jones-magazine.vercel.app/",
        image: "/assets/img/jones.png",
        title: "Check the news, create conversations, and buy books. All in one!",
    },
    {
        alt: "covid",
        codeDirection: "https://github.com/jonaditommaso/covid-19-tracker",
        description: COVID,
        href: "https://covid19-real-time-monitoring-jonaditommaso.vercel.app/",
        image: "/assets/img/covid.png",
        title: "Find out about the cases, deaths and recovered from coronavirus in the world!",
    }
]