


        const maxtakes = 5  //valore modificabile solo dalla dichiarazione
        let casualNumber=0  //numero random generato da math.random
        let takes=0  //tentativi
        let giusto=false   //booleana per verificare la correttezza della risposta
        const min=0   //valore modificabile solo dalla dichiarazione
        const max=100 //valore modificabile solo dalla dichiarazione
        let x=1
        let altobasso=0
        let tentativi=0
        let img=0
        
        
        function generateRandomInteger(min, max) {   //applico i parametri 0 e 100 (qui 1 è escluso)
                casualNumber = Math.random()
                casualNumber = casualNumber * max + casualNumber  //moltiplichiamo per max in modo da ottenere il valore generato compreso fra 1 e 100
                casualNumber=parseInt(casualNumber)
                return casualNumber
        }
        casualNumber=generateRandomInteger(min,max)

    
        //Il RETURN serbe a non far continuare l'esecuzione del codice. 


        let puls =document.querySelector("#button")   //il metodo QUERYSELECTOR ci permette di prendere un elemento html e, tramite un SELETTORE CSS, operare nello script su una variabile

            puls.addEventListener("click",checkGuess)  //aggiunta di event listener al click

            function checkGuess(){   //FUNZIONE EL


                if (takes<maxtakes && takes!=4){
                    let guess=document.querySelector("#guess").value   //attribizione valore di #guess a "guess"
                    guess=parseInt(guess)
                    console.log(guess)
                    

                    if (guess>max || guess<min || isNaN(guess)) {   //controllo input di valori ammessi
                        

                        altobasso=document.getElementById("altobasso")
                        altobasso.innerHTML="Per favore, inserisci un numero valido. L'inserimento di un numero maggiore/minore dei margini consentiti o di un campo vuoto non è consentito. "
                        return;
                    }

                    takes+=1
                
                    if(guess===casualNumber){    //numero uguale (indovinato)
                        
                        tentativi=document.getElementById("tentativi")
                        altobasso=document.getElementById("altobasso")
                        altobasso.innerHTML="Bravo. Hai indovinato il numero ("+casualNumber+")."
                        tentativi.innerHTML="Fine."

                        console.log("Fine")
                        puls.removeEventListener("click", checkGuess);   //rimozione EL per rendere inattivo il pulsante
                        giusto=true
                        return
                        }
                    
                    if(guess>casualNumber){   //numero maggiore

                        altobasso=document.getElementById("altobasso")
                        tentativi=document.getElementById("tent")

                        altobasso.innerHTML="Troppo alto, prova un numero più basso!"
                        tentativi.innerHTML=5-takes
                        return
                        

                    }else{      //numero minore

                        tentativi=document.getElementById("tent")
                        altobasso=document.getElementById("altobasso")

                        altobasso.innerHTML="Troppo basso, prova un numero più alto!"
                        tentativi.innerHTML=5-takes
                        return
                        }
                }


                else{   //fine controllo e assegnazione punteggi

                    tentativi=document.getElementById("tentativi")
                    tentativi.innerHTML="Fine."
                    altobasso.innerHTML="Tentativi esauriti, non sei riuscito ad indovinare il numero misterioso ("+casualNumber+")."

                    puls.removeEventListener("click", checkGuess);
                    
                    return
                }
            }
            

