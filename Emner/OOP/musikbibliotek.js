/* Musikbibliotek */

class Song {
    constructor(id, title, artist, duration, genre){
        this.id = id,
        this.title = title,
        this.artist = artist,
        this.duration = duration,
        this.genre = genre
    }

    getDetails() {
        console.log(`ID: ${this.id}, Title = ${this.title}, Artist: ${this.artist}, Duration: ${this.duration}, Genre: ${this.genre}`)
    }

    updateGenre(newGenre) {
        this.genre = newGenre
    }
}

