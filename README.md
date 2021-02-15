
# ioet Exercise

## Description

The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked.

## Instructions of how to run the program locally.
1. First, clone the repo, open it in VSC and run ```npm install``` in your terminal in order to install Mocha.

2. Second, in order to execute the program type
```node main.js``` in your terminal.

3. Third, if you want to run the tests, just type ```npm test```.

## Solution

To solve this, I used the divide and conquer methodology structuring my solution in directories. One is called **files** where I keep the data the program needs, I have another one called **functions** where are the functionalities I will need for my solution and last but not least, I have a **test** directory where I made the unit tests for *calculateProfitsPerHour()* function.

[![Program-Structure.png](https://i.postimg.cc/fykDkPDg/Program-Structure.png)](https://postimg.cc/64sDmY7d)


The approach I used to solve this was to, read the data.txt file to generate an key-value object (dictionary) and also store the table information into a JSON object: 

[![files.jpg](https://i.postimg.cc/WpJ2RQYh/files.jpg)](https://postimg.cc/w3gKLbpp)

With these two objects, I was able to iterate them and get the pieces of data I would need to calculate the amount of hours the employee has worked and of course the profit it will earn. Since I didn't use a library, I slice some strings in order to get the hour values and compared them in order to know if the begining and ending hour are in the range of ACME's table schedule and get the payment per hour.

Obtaining the following output for the five sets of data:

### Results

[![results.png](https://i.postimg.cc/qvvSrKBj/results.png)](https://postimg.cc/crPXMrnn)

## Tests

 [![tests.png](https://i.postimg.cc/0QgrhDRB/tests.png)](https://postimg.cc/Y43pW4S6)