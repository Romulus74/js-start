'use strict';
        function sum(num1, num2){
            return num1 + num2;
        }

        function subtract(num1, num2){
            return num1 - num2;
        }

        function divide(num1, num2){
            return num1 / num2;
        }

        function multiplication(num1, num2){
            return num1 * num2;
        }

        function mathOperation(arg1, arg2, operation){        
            switch(operation) { 
            case "Сумма":
                return sum(arg1, arg2);                
            case "Разность":
                return subtract(arg1, arg2);                
            case "Деление":
                return divide(arg1, arg2);                
            case "Умножение":
                return multiplication(arg1, arg2);                
            }
        }
        let myArg1 = Number(prompt("Введите первое число:"));
        let myArg2 = Number(prompt("Введите второе число:"));
        let myOperation = prompt("Введите название математического действия(Сумма, Разность, Деление или Умножение)");
        let result = mathOperation(myArg1, myArg2, myOperation);
            alert(result); 