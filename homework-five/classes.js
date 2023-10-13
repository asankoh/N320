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
        this.itemList.reduce((accum, item) =>{
            return accum + item.value
        },0)
    }

    displayCatalog(){
        
      //  let commonInfo = `${items.title} - ${items.pub_year}  - ${items.value}`

        this.itemList.forEach(items =>{
          //  document.getElementsByTagName('div').innerHTML += `${commonInfo}`;
          //  console.log(commonInfo)
            if(items.author){
               return `${this.title} - ${this.value} - (Author: ${this.author},Genre: ${this.genre})`
            } else if(items.director){
                return `${this.title} - ${this.value} - (Director: ${this.director},Runtime: ${this.runtime})`
            }else{
                return `${this.title} - ${this.value} - (Artist: ${this.artist},Number of Songs: ${this.songs_number})`
            }
        })

    }
    
}

var bookOne = new Book(1, 'Big Nate', 2009, 10.99, 'Unknown', "Fiction")
var cdOne = new CD(2, "Dangerous", 2000, 80.99, "Michael Jackson", 12)
var dvdOne = new DVD(3, "Halloween", 1978, 8.99, "John Carpenter", 98)


console.log(bookOne)

let catalog = new Catalog();

catalog.addItem(bookOne, cdOne, dvdOne)
catalog.displayCatalog(catalogDiv)

let updatedCatalog = new Catalog();
updatedCatalog.addItem(bookOne, cdOne, dvdOne)
updatedCatalog.removeItem(2);
