import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../../core/config/config';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.services';
@Component({
  selector: 'draw-card',
  templateUrl: './drawcard.component.html',
  styleUrls: ['./drawcard.component.css']
})
export class DrawCardComponent implements OnInit {
  
  private deckItems=[];
  private deckId:string='';
  private isShow:boolean = false;
  private isTryAgain:boolean = true;
  private item1:any;
  private item2:any;
  private message:string='';
  constructor(private route: ActivatedRoute,
              private cardService:CardService ) {}

  ngOnInit() {
    this.deckItems = []; 
    this.isShow = false;
    this.isTryAgain = true;
    this.message ='';
    this.getDecks();
  }
  
  getDecks()
  {
       this.cardService.getDecks().subscribe(data=>{
           if(data!=null)
           {
               this.deckId = data.deck_id;
               this.drawDecks(this.deckId);
           }
       })
  }
  drawDecks(deckId:string)
  {
      this.cardService.getDrawDeck(deckId).subscribe(data=>{
          if(data!=null)
          {
            this.deckItems = data.cards;
            this.item1 = this.deckItems[0];
          }
      })
  }
  tryAgain()
  {
      this.deckItems =[];
      this.item1="";
      this.item2="";
      this.message='';
      this.getDecks();
      this.isShow = false;
      this.isTryAgain = true;

  }
  highCard()
  {
      this.item2 = this.deckItems[1];
      this.isShow = true;
       let value1 = this.item1.value;
      let value2 = this.item2.value;
      if((value1 =="ACE" || value1 =="KING" || value1 =="QUEEN" || value1 =="JACK") && value2<=10)
      {
         this.message = 'Better Luck next time';
         this.isTryAgain = false;
      }
      else if(value1<=10 && (value2 =="ACE" || value2 =="KING" || value2 =="QUEEN" || value2 =="JACK"))
      {
           this.message = 'Congratulations won the game';
           this.isTryAgain = true;
      }
      else if(value1<value2)
      {
          this.message = 'Congratulations won the game';
          this.isTryAgain = true;
      }
      else if(value1 == "ACE" && (value2 =="KING" || value2 =="QUEEN" || value2 =="JACK"))
      {
         this.message = 'Better Luck next time';
         this.isTryAgain = false;
      }
      else if((value1 =="KING" || value1 =="QUEEN" || value1 =="JACK") && value2 == "ACE")
      {
          this.message = 'Congratulations won the game';
           this.isTryAgain = true;
      }
      else if(value1 == "KING" && (value2 =="QUEEN" || value2 =="JACK"))
      {
          this.message = 'Better Luck next time';
          this.isTryAgain = false;
      }
      else if(value1 == "QUEEN" && (value2 =="JACK"))
      {
          this.message = 'Better Luck next time';
          this.isTryAgain = false;
      }
      else if(value1 == "JACK" && (value2 =="KING" || value2 =="QUEEN" || value2 =="ACE"))
      {
           this.message = 'Better Luck next time';
           this.isTryAgain = false;
      }
  }
  lowerCard()
  { 
      this.item2 = this.deckItems[1];
      this.isShow = true;
      let value1 = this.item1.value;
      let value2 = this.item2.value;
      if((value1 =="ACE" || value1 =="KING" || value1 =="QUEEN" || value1 =="JACK") && value2<=10)
      {
           this.message = 'Congratulations won the game';
           this.isTryAgain = true;
      }
      else if(value1<=10 && (value2 =="ACE" || value2 =="KING" || value2 =="QUEEN" || value2 =="JACK"))
      {
           this.message = 'Better Luck next time';
         this.isTryAgain = false;
      }
      else if(value2<value1)
      {
          this.message = 'Congratulations won the game';
         this.isTryAgain = true
      }
      else if(value2>value1)
      {
          this.message = 'Better Luck next time';
         this.isTryAgain = false;
      }
      else if(value1 == "ACE" && (value2 =="KING" || value2 =="QUEEN" || value2 =="JACK"))
      {
         this.message = 'Congratulations won the game';
         this.isTryAgain = true;
      }
      else if((value1 =="KING" || value1 =="QUEEN" || value1 =="JACK") && value2 == "ACE")
      {
         this.message = 'Better Luck next time';
         this.isTryAgain = false;
      }
      else if(value1 == "KING" && (value2 =="QUEEN" || value2 =="JACK"))
      {
         this.message = 'Congratulations won the game';
         this.isTryAgain = true;
      }
      else if(value1 == "QUEEN" && (value2 =="JACK"))
      {
           this.message = 'Congratulations won the game';
         this.isTryAgain = true;
      }
      else if(value1 == "JACK" && (value2 =="KING" || value2 =="QUEEN" || value2 =="ACE"))
      {
           this.message = 'Better Luck next time';
           this.isTryAgain = false;
      }
      
    

  }
  ngOnDestroy() {
    this.deckId ='';
    this.message = '';
    this.isShow = false;
    this.isTryAgain = true;
    this.deckItems = [];
  }

}
