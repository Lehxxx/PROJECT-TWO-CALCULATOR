
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
             equation = null;

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



                }
                if(className == "enum" && numberTwo != "" && this.id != "(" && startNumThree == "" || className == "enum" && numberTwo != "" && this.id != ")" && startNumThree == "" ){
                    if(storedEnumOne == "+"){
                        equation = Number(numberOne) + Number(numberTwo);


                    }
                    if(storedEnumOne == "-" && this.id != "="){
                        equation = Number(numberOne) - Number(numberTwo);


                    }
                    if(storedEnumOne == "*" && this.id != "="){
                        equation = Number(numberOne) * Number(numberTwo);


                    }
                    if(storedEnumOne == "%" && this.id != "="){
                        equation = Number(numberOne) / Number(numberTwo);


                    }
                    if(storedEnumOne == "/" && this.id != "="){
                        equation = Number(numberOne) / Number(numberTwo) ;


                    }

                    //----------------------------------------------------------------------------

                    if(storedEnumOne == "+" && this.id == "="){
                        equation = Number(numberOne) + Number(numberTwo);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumOne == "-" && this.id == "="){
                        equation = Number(numberOne) - Number(numberTwo);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumOne == "*" && this.id == "="){
                        equation = Number(numberOne) * Number(numberTwo);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumOne == "%" && this.id == "="){
                        equation = Number(numberOne) / Number(numberTwo);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumOne == "/" && this.id == "="){
                        equation = Number(numberOne) / Number(numberTwo) ;
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    // if(this.id == "="){
                    //     equation = 

                    // }
                    

                    
                    console.log("class: 4th (enum)", equation);
                    outputText.textContent = "";

                    outputText.textContent = equation + " " + this.id;
                    


                    storedEnumTwo = this.id;
                    numberOne = equation;
                    
                    numberThree = "";
                    

                    
                    startNumThree = "true";

                }
                if(className == "number" && storedEnumTwo != "" && this.id != "(" && startNumThree == "true" && storedEnumThree == ""|| className == "number" && storedEnumTwo != "" && this.id != ")" && startNumThree == "true" && storedEnumThree == ""){
                    numberThree += this.id;

                    

                    
                    console.log("class: 5TH (number)",numberThree);
                    //come back to this one
                    

                    outputText.textContent += this.id;
                    


                    
                    
                    continueVariable = "yes"
                    


                    

                }
                if(className == "enum" && storedEnumTwo != "" && this.id != "(" && continueVariable == "yes" && storedEnumThree == "" && startNumThree == "true" || className == "enum" && storedEnumTwo != "" && this.id != ")" && continueVariable == "yes" && storedEnumThree == "" && startNumThree == "true"){
                    storedEnumThree = this.id;

                    if(storedEnumTwo == "+" && this.id != "="){
                        equation = Number(numberThree) + Number(equation);


                    }
                    if(storedEnumTwo == "-" && this.id != "="){
                        equation = Number(numberThree) - Number(equation);


                    }
                    if(storedEnumTwo == "*" && this.id != "="){
                        equation = Number(numberThree) * Number(equation);


                    }
                    if(storedEnumTwo == "%" && this.id != "="){
                        equation = Number(numberThree) / Number(equation);


                    }
                    if(storedEnumTwo == "/" && this.id != "="){
                        equation = Number(numberThree) / Number(equation);


                    }
                    //---------------------------------------------------------------------------------

                    if(storedEnumTwo == "+" && this.id == "="){
                        equation = Number(numberThree) + Number(equation);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "-" && this.id == "="){
                        equation = Number(numberThree) - Number(equation);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "*" && this.id == "="){
                        equation = Number(numberThree) * Number(equation);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "%" && this.id == "="){
                        equation = Number(numberThree) / Number(equation);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    if(storedEnumTwo == "/" && this.id == "="){
                        equation = Number(numberThree) / Number(equation);
                        outputText.textContent = this.id + " " + equation;
                        calculate.terminate();


                    }
                    

                    
                    console.log("class: 6TH (enum)", equation);
                    outputText.textContent = "";

                    outputText.textContent = equation + " " + this.id;
                    


                    storedEnumTwo = "";
                    numberOne = equation;
                   
                    continueVariable = "yes";
                    


                    startNumfour = "true";
                    numberThree = "";

                }
                /* if(className == "enum" && storedEnumTwo == "" && continueVariable == "yes" && this.id != "(" || className == "enum" && storedEnumTwo == "" && continueVariable == "yes" && this.id != ")" ){
                    storedEnumTwo = this.id;

                   

                    
                    console.log("6nd");

                    outputText.textContent = equation + this.id;
                    


                    
                    
                   
                    continueVariable = "no"
                    
                } */
             
             if(className == "number" && storedEnumThree != "" && this.id != "(" && continueVariable == "yes" && startNumfour != ""|| className == "number" && storedEnumThree != "" && this.id != ")" && continueVariable == "yes" && startNumfour != "" ){
                numberFour += this.id;

               

                
                console.log("class: 7TH (number)", numberFour);
                

                outputText.textContent += this.id;
                


                
                
               
                
                


                

            }
            if(className == "enum" && storedEnumTwo != "" && this.id != "(" && continueVariable == "yes" && storedEnumThree == ""|| className == "enum" && storedEnumTwo != "" && this.id != ")" && continueVariable == "yes" && storedEnumThree == ""){
                storedEnumTwo = this.id;

                if(storedEnumThree == "+" && this.id != "="){
                    equation = Number(numberFour) + Number(equation);
                    


                }
                if(storedEnumThree == "-" && this.id != "="){
                    equation = Number(numberFour) - Number(equation);


                }
                if(storedEnumThree == "*" && this.id != "="){
                    equation = Number(numberFour) * Number(equation);


                }
                if(storedEnumThree == "%" && this.id != "="){
                    equation = Number(numberFour) / Number(equation);


                }
                if(storedEnumThree == "/" && this.id != "="){
                    equation = Number(numberFour) / Number(equation);


                }
                //---------------------------------------------------------------------------

                if(storedEnumThree == "+" && this.id == "="){
                    equation = Number(numberFour) + Number(equation);
                    outputText.textContent = this.id + " " + equation;
                    calculate.terminate();


                }
                if(storedEnumThree == "-" && this.id == "="){
                    equation = Number(numberFour) - Number(equation);
                    outputText.textContent = this.id + " " + equation;
                    calculate.terminate();


                }
                if(storedEnumThree == "*" && this.id == "="){
                    equation = Number(numberFour) * Number(equation);
                    outputText.textContent = this.id + " " + equation;
                    calculate.terminate();


                }
                if(storedEnumThree == "%" && this.id == "="){
                    equation = Number(numberFour) / Number(equation);
                    outputText.textContent = this.id + " " + equation;
                    calculate.terminate();


                }
                if(storedEnumThree == "/" && this.id == "="){
                    equation = Number(numberFour) / Number(equation);
                    outputText.textContent = this.id + " " + equation;
                    calculate.terminate();


                }

                
                console.log("class: 8TH (enum)", equation);
                outputText.textContent = "";

                outputText.textContent = this.id;
                


                
                numberOne = equation;
               
                continueVariable = "yes"

                
                storedEnumThree == "";                
                startNumThree = "true";
                numberThree = "";

            }
        }

                


             

             


            