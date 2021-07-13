# GOLD-IN-SEQUENCE

Finds the goldern number in a sequence.
IN A GIVEN SEQUENCE, A NUMBER IS SAID TO BE
A GOLDERN NUMBER IF THAT NUMBER IS DIVISIBLE
BY THE PRECEDING NUMBER IN THE SEQUENCE.

FOR INSTANCE:
in the sequence: 2, 4, 6, 8, 10,
the number 4 is said to be the goldern number
because it is the only number divisible by its preceding number (2).

// There are three functions in the index.js file

1. getGoldern(min, max)

   - This takes two parameters ('min' and 'max')
   - min is the smallest number in the sequence (or the starting point)
   - max is the largest number in the sequence (or the ending point)

2. locateGoldern(min, max, step)

   - This takes three parameters ('min' , 'max' and step)
   - min is the smallest number in the sequence (or the starting point)
   - max is the largest number in the sequence (or the ending point)
   - step is the constant difference between the numbers

3. catchGold(sequence)
   - This takes one parameter
   - sequence is an array of the sequence of numbers

They all seek to solve the same problem
