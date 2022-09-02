class pokerhands {
    cards;
    hand = 99;  // The highest level hand win, wth 1 being the highest and 99 being the lowest
    number = 0; // After hand the highest number cards win, woth 14(high A) being the highest and 1(low A) being the lowest
    hasWildCard = false;
    suit1 = 0;  
    suit2 = 0;

    contructor(cards) {
        this.cards = cards;
    }

    newHand(cards) {
        this.cards = cards;
        this.hand = 99;  // The highest level hand win, wth 1 being the highest and 99 being the lowest
        this.number = 0; // After hand the highest number cards win, woth 14(high A) being the highest and 1(low A) being the lowest
        this.hasWildCard = false
        this.suit1 = 0;
        this.suit2 = 0;
    }

    handtoString (pNumber) {
        let lReturn = "";
        switch (pNumber) {
            case 99 : 
                lReturn = "Undetermined";
                break;
            case 1:
                lReturn = "Fife of a kind";
                break;
            case 2:
                lReturn = "Straight flush";
                braek;               
            case 3:
                lReturn = "Four of a kind";
                break;
            case 4:
                lReturn = "Full house";
                break;
            case 5:
                lReturn = "Flush";
                break;
            case 6:
                lReturn = "Straight";
                break;                
            case 7:
                lReturn = "Three of a kind";
                break;                
            case 8:
                lReturn = "Two pair";
                break;
            case 9:
                lReturn = "Oner pair";
                break;
            case 10:
                lReturn = "High card";
                break;
            default: 
                lReturn = "Undetermined";
        }
        return lReturn;
    }

    numberToString(pNumber) {
        let lReturn = "";

        return lReturn;

    }

    cardsStrToNumArray(cards) {
        const cardNumbers = []; // array containing numbers
        // move cards to array

        return(cardNumbers);
    }

    cardsStrToSuitArray(cards) {
        const cardSuits = []; // array containing Suits
        // move cards to array.

        return(cardSuits);
    }

    evaluateHand () {
        const cardSuits = this.cardsStrToSuitArray(this.cards);
        const cardNumbers = this.cardsStrToNumArray(this.cards);  
        const numberCounts = this.countNumbers(cardNumbers);
        const suitCount = this.countSuits(cardSuits);

        // Begin testing for highest level hand and continue to lowest level hand
        // Return the first hand that evaluates to true
        if (this.isFiveOfAKind) {
            return 1;
        }
        if (this.isStraightFlush) {
            return 2;
        }        
        return 0;
              
    }

    isFiveOfAKind(numberCounts) {
        let lReturn = false;
        for (let i=0; i<numberCounts.length; i++) {
            if (numberCounts[i] == 4 && this.hasWildCard); {
                lReturn = true;
                this.number = i;
                this.hand = 1;
            }
        }
        return lReturn;
    }

    isStraightFlush(suitCount, cardCount, cardNumbers) {
        let lReturn = false;
        if (this.isFlush(suitCount) && this.isStraight(numberCount,cardNumbers)) {
            lReturn = true;
            this.hand = 2;
        }
        return lReturn;

    }

    isFourOfAKind(numberCount) {
        let lReturn = false;
            // To do
        return lReturn;

    }

    isFullHouse(numberCount) {
        let lReturn = false;
            // To do
        return lReturn;    

    }

    isFlush(suitCount) {
        let lReturn = false;
        // To do

        return lReturn
    }

    isStraight(numberCount, cardNumbers) {
        let lReturn = false;
        // To do

        return lReturn;
    }

    isThreeOfAKind(numberCount) {
        let lReturn = false;
        // To do

        return lReturn;
    }

    isTwoPair(numberCount) {
        let lReturn = false;
        // To do

        return lReturn;
    }

    isOnePair(numberCount) {
        let lReturn = false;
        // To do 

        return lReturn;
    }

    isHighCard(numberCount) {
        let lReturn = false;
        // To do

        return lReturn;
    }

    countSuits(cardSuits) {
                    //  S,C,H,D
        const lSuits = [0,0,0,0];
        for (let i=0; i<cardSuits.length; i++) {
            switch (cardSuits[i]) {
                case "S":
                    lSuits[0] += 1;
                    break;
                case "C":
                    lSuits[1] += 1;
                    breakl;
                case "H":
                    lSuits[2] += 1;
                    break;
                case "D":
                    lSuits[3] += 1;
                    break;
                case "X":
                    // Wildcard
                    this.hasWildCard = true;
                    break;
                default:


            }
        }
        return lSuits;

    }

    countNumbers(cardNumbers) {
                        //0,A,2,3,4,5,6,7,8,9,10,J,Q,K,A 
        const lNumbers = [0,0,0,0,0,0,0,0,0,0,0 ,0,0,0,0]
        for (let i = 0; i < cardNumbers.length; i++) {
            switch (cardNumbers[i]) {
                case 'X':
                    //wildcard
                    this.hasWildCard = true;
                    break;
                case '2':
                    lNumber[2] += 1;
                    break;
                case '3':
                    lNumber[3] += 1; 
                    break;
                case '4':
                    lNumber[4] += 1;
                    break;
                case '5':
                    lNumber[5] += 1; 
                    break;  
                case '6':
                     lNumber[6] += 1;
                    break;
                case '7':
                    lNumber[7] += 1; 
                    break;
                case '8':
                    lNumber[8] += 1;
                    break;
                case '9':
                    lNumber[9] += 1; 
                    break; 
                case '10':
                    lNumber[10] += 1;
                    break;
                case 'J':
                    lNumber[11] += 1; 
                    break;
                case 'Q':
                    lNumber[12] += 1;
                    break;
                case 'K':
                    lNumber[13] += 1; 
                    break; 
                case 'A':
                    lNumber[1] += 1; 
                    lNumber[14] += 1; 
                    break; 
                deafault;               

            }            
        }
        return lNumber;
    }




}