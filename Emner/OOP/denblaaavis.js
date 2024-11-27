/* Øvelsestime opgasver */


class Ad {
    constructor(id, title, description, price, priceInUSD){
        this.id = id,
        this.title = title,
        this.description = description,
        this.price = price,
        this.priceInUSD = priceInUSD
    }

    getDetails() {console.log(`Annonce id: ${this.id}, Titel : ${this.title}, Pris: ${this.price}, `  ) }

    calculatePricePerWord() { 
        const words = this.description.split(' ').length;
        const pricePerWord = this.price / words; 
        return pricePerWord.toFixed(2);
    }

    applyDiscount(percentage) {
        const discountAmount = (this.price * percentage) / 100
        newPrice = this.price - discountAmount;
        this.price = newPrice
    }
}

class Admanager {
        constructor(){
        this.ads = []
}

    addAd(ad) { 
        this.ads.push(ad)
    }

    removeAd(id) {
        const initialLength = this.ads.length; 

        this.ads = this.ads.filter(ad => ad.id !== id); 
        
        if (this.ads.length === initialLength) {
            console.log(`No ad found with ID: ${id}`);
        } else {
            console.log(`Ad with ID: ${id} has been removed.`);
        }
    }

    listAds(){
        console.log(`Current ads: `)
        this.ads.forEach((ad, index) => {
            console.log(`Ad ${index + 1}: `)
            ad.getDetails();
        });
    }
}

const ad1 = new Ad(1, "Nanna", "bing bong ching chong", 187, 26.71)
const ad2 = new Ad(2, "Viggo", "bing bong ching chong", 125, 26.71)



const minAd = new Admanager()

ad1.getDetails();
ad2.getDetails();

minAd.addAd(ad1);
minAd.addAd(ad2);

minAd.removeAd(1);
minAd.listAds();

