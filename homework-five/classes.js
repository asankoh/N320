document.getElementsByTagName('h1')[0].innerHTML = 'Library Catalog'
document.getElementsByTagName("h2")[0].innerHTML = "Catalog Items:"
document.getElementsByTagName("h2")[1].innerHTML = "Updated Catalog Items:"
let catalogDiv = document.getElementsByTagName("div")[0];

class Media {
    constructor(id, title, pub_year, value){
        this.id = id;
        this.title = title;
        this.pub_year = pub_year;
        this.value = value;
    }
}

class Book extends Media{
    constructor(id, title, pub_year, value,author, genre){
        super(id, title, pub_year, value)
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends Media{
    constructor(id, title, pub_year, value,director, runtime){
        super(id, title, pub_year, value)
        this.director = director;
        this.runtime = runtime;
    }
}

class CD extends Media{
    constructor(id, title, pub_year, value,artist, songs_number){
        super(id, title, pub_year, value)
        this.artist = artist;
        this.songs_number = songs_number;
    }
}

class Catalog{ 
    constructor(){
        this.itemList = [];
    }

     addItem(...items){
     this.itemList.push(...items)
    }

    removeItem(itemID){
        this.itemList.filter((items) =>{
            return items.id !== itemID
        })
    }

    totalValue(){
        let total = total.value;
        this.items.reduce((accum, total) =>{
            return accum + total
        },0)
    }

    displayCatalog(){
        let commonInfo = `${items.title} - ${items.pub_year}  - ${items.value}`

        this.itemList.forEach(items =>{
            document.getElementsByTagName('div')[0].innerHTML += `${commonInfo}`;
       
            if(items.author){
                document.getElementsByTagName('div')[0].innerHTML += `Author: ${items.author}`
                document.getElementsByTagName('div')[0].innerHTML += `Genre: ${items.genre}`
            } 
        })

    }
    
}

let catalog = new catalog;

var bookOne = new Book('Big Nate', 2009, 10.99, 'Unknown', "Fiction")

catalog.addItem("bookOne")

catalog.displayCatalog(catalogDiv[0])