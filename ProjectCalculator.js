
            //declare
            const lBracket = document.getElementById('(');
            const RBracket = document.getElementById(')');
            const percent = document.getElementById('%');
            const AC = document.getElementById('AC');

            const one = document.getElementById('1');
            const two = document.getElementById('2');
            const three = document.getElementById('3');
            const subtract = document.getElementById('-');

            const four = document.getElementById('4');
            const five = document.getElementById('5');
            const six = document.getElementById('6');
            const multiply = document.getElementById('*');

            const seven = document.getElementById('7');
            const eight = document.getElementById('8');
            const nine = document.getElementById('9');
            const slash = document.getElementById('/');

            const zero = document.getElementById('0');
            const period = document.getElementById('.');
            const equals = document.getElementById('=');
            const plus = document.getElementById('+');

            const outputText = document.getElementById('outputText');
            const result = document.getElementsByClassName('.result');
            const cornerOutput = document.getElementById('cornerOutput');
            //-----------------------------------------------------------------
            document.addEventListener("keyup", (event)=> {
                if (event.keyCode === 48){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    zero.click();
                }
                if (event.keyCode === 49){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    one.click();
                }
                if (event.keyCode === 50){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    two.click();
                }
                if (event.keyCode === 51){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    three.click();
                }
                if (event.keyCode === 52){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    four.click();
                }
                if (event.keyCode === 53){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    five.click();
                }
                if (event.keyCode === 54){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    six.click();
                }
                if (event.keyCode === 55){
                    
                    // your code to Run
                    console.log("0 pressed");
                    seven.click();
                }
                if (event.keyCode === 56){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    eight.click();
                }
                if (event.keyCode === 57){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    nine.click();
                }
                if (event.keyCode === 219){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    LBracket.click();
                }
                if (event.keyCode === 221){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    RBracket.click();
                }
                if (event.keyCode === 189){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    subtract.click();
                }
                if (event.keyCode === 106){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    multiply.click();
                }
                if (event.keyCode === 189){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    dash.click();
                }
                if (event.keyCode === 190){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    period.click();
                }
                if (event.keyCode === 187){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    equals.click();
                }
                if (event.keyCode === 107){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    plus.click();
                }
                //---------------------------------------------------


                if (event.keyCode === 96){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    zero.click();
                }
                if (event.keyCode === 97){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    one.click();
                }
                if (event.keyCode === 98){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    two.click();
                }
                if (event.keyCode === 99){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    three.click();
                }
                if (event.keyCode === 100){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    four.click();
                }
                if (event.keyCode === 101){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    five.click();
                }
                if (event.keyCode === 102){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    six.click();
                }
                if (event.keyCode === 103){
                    
                    // your code to Run
                    console.log("0 pressed");
                    seven.click();
                }
                if (event.keyCode === 104){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    eight.click();
                }
                if (event.keyCode === 105){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    nine.click();
                }
                
                if (event.keyCode === 109){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    subtract.click();
                }
                if (event.keyCode === 110){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    period.click();
                }
                if (event.keyCode === 111){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    slash.click();
                }
                if (event.keyCode === 13){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    equals.click();
                }
                if (event.keyCode === 191){
                    event.preventDefault();
                    // your code to Run
                    console.log("0 pressed");
                    slash.click();
                }
                
                

                  

                });
              
















            
            

            //EVENT LISTENERS
             lBracket.addEventListener('click', calculate);
             RBracket.addEventListener('click', calculate);
             percent.addEventListener('click', calculate);
             AC.addEventListener('click', calculate);

             one.addEventListener('click', calculate);
             two.addEventListener('click', calculate);
             three.addEventListener('click', calculate);
             subtract.addEventListener('click', calculate);

             four.addEventListener('click', calculate);
             five.addEventListener('click', calculate);
             six.addEventListener('click', calculate);
             multiply.addEventListener('click', calculate);

             seven.addEventListener('click', calculate);
             eight.addEventListener('click', calculate);
             nine.addEventListener('click', calculate);
             slash.addEventListener('click', calculate);

             zero.addEventListener('click', calculate);
             period.addEventListener('click', calculate);
             equals.addEventListener('click', calculate);
             plus.addEventListener('click', calculate);
             className = "";
             storedEnumOne = "";
             storedEnumTwo = "";
             storedEnumThree = "";
             numberOne = "";
             numberTwo = "";
             numberThree = "";
             numberFour = "";
             numberFive = "";
              startNumTwo = "";
              startNumThree = "";
              startNumfour = "";
              startNumfive = "";
             equation = null;
             equation2 = null;

             numberVariable = "";
             continueVariable = "";


            //add clicked buttons to the display
             function calculate(){
                //output clicked num
                
                //check if clicked is a number
                classNameVAR = document.getElementById(this.id);
                className = classNameVAR.className
                console.log(className);
                
                
                

                if(className == "number" && startNumTwo == ""){
                    outputText.textContent += this.id;
                    numberOne += this.id


                    console.log("class: 1st (number)", numberOne);




                }

                 //check if clicked is a enum
                if(className == "enum" && numberTwo == "" && this.id != "(" || className == "enum" && numberTwo == "" && this.id != ")" ){
                    outputText.textContent = "";
                    


                    storedEnumOne = this.id;

                    startNumTwo = "true";


                    console.log("class: two (enum)", storedEnumOne);

                }
                //START SECOND NUMBER INPUT
                if(startNumTwo == "true" && className == "number" && startNumThree == ""){
                    outputText.textContent += this.id;
                    
                    numberTwo += this.id

                    console.log("class: 3rd (number)", numberTwo);

                }
                if(this.id == "AC"){
                    outputText.textContent = "";
                    cornerOutput.textContent = "";



                }
                if(className == "enum" && numberTwo != "" && this.id != "(" && startNumThree == "" || className == "enum" && numberTwo != "" && this.id != ")" && startNumThree == "" ){
                    if(storedEnumOne == "+"){
                        equation = Number(numberOne) + Number(numberTwo);

                        equation2 = numberOne + "" + storedEnumOne + "" + numberTwo;


                    }
                    if(storedEnumOne == "-" && this.id != "="){
                        equation = numberTwo - Number(numberOne);

                        equation2 = numberOne + "" + storedEnumOne + "" + numberTwo;


                    }
                    if(storedEnumOne == "*" && this.id != "="){
                        equation = numberTwo * Number(numberOne);

                        equation2 = numberOne + "" + storedEnumOne + "" + numberTwo;


                    }
                    if(storedEnumOne == "%" && this.id != "="){
                        equation = numberTwo / Number(numberOne);

                        equation2 = numberOne + "" + storedEnumOne + "" + numberTwo;


                    }
                    if(storedEnumOne == "/" && this.id != "="){
                        equation = numberTwo / Number(numberOne);

                        equation2 = numberOne + "" + storedEnumOne + "" + numberTwo;


                    }

                    //----------------------------------------------------------------------------

                    if(storedEnumOne == "+" && this.id == "="){
                        equation = Number(numberOne) + Number(numberTwo);
                        outputText.textContent = this.id + " " + equation;

                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        
                        calculate.terminate();


                    }
                    if(storedEnumOne == "-" && this.id == "="){
                        equation = numberTwo - Number(numberOne);
                        outputText.textContent = this.id + " " + equation;

                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    if(storedEnumOne == "*" && this.id == "="){
                        equation = numberTwo * Number(numberOne);
                        outputText.textContent = this.id + " " + equation;

                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    if(storedEnumOne == "%" && this.id == "="){
                        equation = numberTwo / Number(numberOne);
                        outputText.textContent = this.id + " " + equation;

                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    if(storedEnumOne == "/" && this.id == "="){
                        equation =  numberTwo / Number(numberOne);
                        outputText.textContent = this.id + " " + equation;

                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    // if(this.id == "="){
                    //     equation = 

                    // }
                    

                    
                    console.log("class: 4th (enum)", equation);
                    outputText.textContent = "";

                    outputText.textContent = equation + " " + this.id;

                    cornerOutput.textContent = equation2;
                    


                    storedEnumTwo = this.id;
                    
                    
                    numberThree = "";
                    

                    
                    startNumThree = "true";

                }
                if(className == "number" && storedEnumTwo != "" && this.id != "(" && startNumThree == "true" && storedEnumThree == ""|| className == "number" && storedEnumTwo != "" && this.id != ")" && startNumThree == "true" && storedEnumThree == ""){
                    numberThree += this.id;

                    

                    
                    console.log("class: 5TH (number)",numberThree);
                    //come back to this one
                    

                    outputText.textContent += this.id;
                    


                    
                    
                    continueVariable = "yes"

                   
                    startNumThree = "true";
                    startNumfive = "true";
                    


                    

                }
                if(className == "enum" && storedEnumTwo != "" && this.id != "(" && continueVariable == "yes" && storedEnumThree == "" && startNumThree == "true" && startNumfour == "" && startNumfive == "true" || className == "enum" && storedEnumTwo != "" && this.id != ")" && continueVariable == "yes" && storedEnumThree == "" && startNumThree == "true" && startNumfour == "" && startNumfive == "true"){
                    storedEnumThree = this.id;

                    if(storedEnumTwo == "+" && this.id != "="){
                        equation = Number(numberThree) + Number(equation);

                        equation2 = outputText.textContent;


                    }
                    if(storedEnumTwo == "-" && this.id != "="){
                        equation = equation - Number(numberThree);

                        equation2 = outputText.textContent;


                    }
                    if(storedEnumTwo == "*" && this.id != "="){
                        equation = Number(numberThree) * equation;

                        equation2 = outputText.textContent;


                    }
                    if(storedEnumTwo == "%" && this.id != "="){
                        equation = equation / Number(numberThree);

                        equation2 = outputText.textContent;


                    }
                    if(storedEnumTwo == "/" && this.id != "="){
                        equation = equation / Number(numberThree);

                        equation2 = outputText.textContent;


                    }
                    //---------------------------------------------------------------------------------

                    if(storedEnumTwo == "+" && this.id == "="){
                        equation = Number(numberThree) + Number(equation);
                        outputText.textContent = this.id + " " + equation;
                        
                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "-" && this.id == "="){
                        equation = equation - Number(numberThree);
                        outputText.textContent = this.id + " " + equation;
                        
                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "*" && this.id == "="){
                        equation = equation * Number(numberThree);
                        outputText.textContent = this.id + " " + equation;
                        
                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "%" && this.id == "="){
                        equation =  equation / Number(numberThree);
                        outputText.textContent = this.id + " " + equation;
                        
                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "/" && this.id == "="){
                        equation =  equation / Number(numberThree);
                        outputText.textContent = this.id + " " + equation;
                        
                        equation2 = this.id + " " + equation;
                        cornerOutput.textContent = equation2;
                        calculate.terminate();


                    }
                    
                    

                    
                    console.log("class: 6TH (enum)", equation);
                    outputText.textContent = "";

                    outputText.textContent = equation + " " + this.id;

                    cornerOutput.textContent = equation2;
                    


                    storedEnumTwo = "";
                    
                   
                    continueVariable = "yes";
                    


                    startNumfour = "true";
                    
                    numberThree = "";
                    numberFour = ""

                }
                /* if(className == "enum" && storedEnumTwo == "" && continueVariable == "yes" && this.id != "(" || className == "enum" && storedEnumTwo == "" && continueVariable == "yes" && this.id != ")" ){
                    storedEnumTwo = this.id;

                   

                    
                    console.log("6nd");

                    outputText.textContent = equation + this.id;
                    


                    
                    
                   
                    continueVariable = "no"
                    
                } */
             
             if(className == "number" && storedEnumThree != "" && this.id != "(" && continueVariable == "yes" && startNumfour != "" && startNumfive != ""|| className == "number" && storedEnumThree != "" && this.id != ")" && continueVariable == "yes" && startNumfour != "" && startNumfive != ""){
                numberFour += this.id;

               

                
                console.log("class: 7TH (number)", numberFour);
                

                outputText.textContent += this.id;
                


                
                startNumfive = "full";
               
                
                


                

            }
            if(className == "enum" && storedEnumTwo == "" && this.id != "(" && continueVariable == "yes" && storedEnumThree != "" && startNumfour != "" && startNumfive != "true"|| className == "enum" && storedEnumTwo == "" && this.id != ")" && continueVariable == "yes" && storedEnumThree != "" && startNumfour != "" && startNumfive != "true"){
                storedEnumTwo = this.id;

                if(storedEnumThree == "+" && this.id != "="){
                    equation = Number(numberFour) + Number(equation);

                    equation2 = outputText.textContent;
                    


                }
                if(storedEnumThree == "-" && this.id != "="){
                    equation = equation - numberFour;

                    equation2 = outputText.textContent;


                }
                if(storedEnumThree == "*" && this.id != "="){
                    equation =  equation * Number(numberFour);

                    equation2 = outputText.textContent;


                }
                if(storedEnumThree == "%" && this.id != "="){
                    equation = equation / Number(numberFour) ;

                    equation2 = outputText.textContent;


                }
                if(storedEnumThree == "/" && this.id != "="){
                    equation = equation / Number(numberFour);

                    equation2 = outputText.textContent;


                }
                //---------------------------------------------------------------------------

                if(storedEnumThree == "+" && this.id == "="){
                    equation = Number(numberFour) + Number(equation);
                    outputText.textContent = this.id + " " + equation;
                    
                    equation2 = this.id + " " + equation;
                    cornerOutput.textContent = equation2;
                    calculate.terminate();


                }
                if(storedEnumThree == "-" && this.id == "="){
                    equation =  equation - Number(numberFour);
                    outputText.textContent = this.id + " " + equation;
                    
                    
                    equation2 = this.id + " " + equation;
                    cornerOutput.textContent = equation2;
                    calculate.terminate();


                }
                if(storedEnumThree == "*" && this.id == "="){
                    equation = equation * Number(numberFour) ;
                    outputText.textContent = this.id + " " + equation;
                    
                    equation2 = this.id + " " + equation;
                    cornerOutput.textContent = equation2;
                    calculate.terminate();


                }
                if(storedEnumThree == "%" && this.id == "="){
                    equation = equation / Number(numberFour) ;
                    outputText.textContent = this.id + " " + equation;
                    
                    equation2 = this.id + " " + equation;
                    cornerOutput.textContent = equation2;
                    calculate.terminate();


                }
                if(storedEnumThree == "/" && this.id == "="){
                    equation = equation / Number(numberFour) ;
                    outputText.textContent = this.id + " " + equation;
                    
                    equation2 = this.id + " " + equation;
                    cornerOutput.textContent = equation2;
                    calculate.terminate();


                }

                
                console.log("class: 8TH (enum)", equation);
                outputText.textContent = "";

                outputText.textContent = equation + " " + this.id;
                cornerOutput.textContent = equation2;
                


                
               
               
                continueVariable = "yes"

                
                storedEnumThree = "";                
                startNumThree = "true";
                numberThree = "";
                startNumfour = "";
                startNumfive = "";

            }
        }

                


             

             


            