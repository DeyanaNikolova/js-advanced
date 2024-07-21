class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase();
        if(!this.possibleArticles[articleModel]){
            throw new Error('This article model is not included in this gallery!');
        }

        if(!this.listOfArticles.some(x => x.articleName == articleName)){
            const article = {
                articleModel,
                articleName,
                quantity
            }
            this.listOfArticles.push(article);
           
        } else if(this.listOfArticles[articleModel] == articleModel && article.articleName == articleName){
            artticle.quantity += Number(quantity);
                   
        }
        
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest ( guestName, personality){

        if(this.guests.some(x => x.guestName == guestName)){
            throw new Error(`${guestName} has already been invited.`);
        }
        const guest = {
            guestName, 
            points: 0, 
            purchaseArticle: 0
        }
        if(personality == 'Vip'){
            guest.points = 500;
        } else if(personality == 'Middle'){
            guest.points = 250;
        }else{
            guest.points = 50;
        }
        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){

        const articleToBuy = this.listOfArticles.find(x => x.articleName == articleName);

        if(!articleToBuy || articleToBuy.articleModel != articleModel){
            throw new Error('This article is not found.');
        }

        if(articleToBuy.quantity == 0){
            return `The ${articleName} is not available.`;
        }
        const guest = this.guests.find(x => x.guestName == guestName);
        
        if(!guest){
            return 'This guest is not invited.';
        } else if(guest.points < this.possibleArticles[articleModel]){
            return 'You need to more points to purchase the article.';
        }else{
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle ++;
            articleToBuy.quantity -=1;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo (criteria){
        const result = [];
        if(criteria === 'article'){
            result.push(`Articles information:`);
            this.listOfArticles.forEach(x=>{
                result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`);
            });
           
        }else{
           result.push(`Guests information:`);
           this.guests.forEach(x=>{
            result.push(`${x.guestName} - ${x.purchaseArticle} `);
           });
        }
        return result.join('\n');
    }
}
        

// input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// input 4
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

