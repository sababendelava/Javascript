/*
წარმოიდგინე რომ არ არსებობს String კონსტრუქტორი , 

მასივის დახმარებით შექმენით MyString კლასი , რომელსაც ექნება ტექსტის ზომის
დაბრუნების ფუნქციონალი , ექნება concat მეთოდი რომელსაც გადაეცემა ტექსტი და აბრუნებს
გადაცემული ტექსტის და საწყისი სტრინგის გაერთიანების ახალ სტრინგს . 

ასევე ექნება მეთოდი elementAt(index) რომელიც გადაცემული ინდექსით დააბრუნებს შესაბამის ქარაქტერს 

და ექნება მეთოდი subText(startingIndex) რომელიც დააბრუნებს საბსტრინგს გადაცემული ინდექსიდან ბოლომდე

*/

class Mystring{
    constructor(text,text1){
        this.text = text;
        this.text1 = text1;
    }

    findLength(){
        console.log(this.text.length);
    }
    findCharAt(x){
        console.log(this.text.charAt(x));
    }
    textConcat(){
        console.log(this.text.concat(this.text1));
    }
    subText(x,y){
        console.log(this.text.substring(x,y));
    }

}

let text = new Mystring("text","concatText");

text.findLength();
text.findCharAt(0);
text.textConcat();
text.subText(0,7);