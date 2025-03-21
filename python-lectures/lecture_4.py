# Input() = A function that prompts the user to enter data
#           Returns the entered data as a string

name = input("What is your name?: ")
# This will ask a question to the user. 
age = int(input("How old are you?: "))
# On this input for age, I am not only taking the input, but I am also typecasting it to an integer.
print(f"Hello {name}, you are {age} years old.")
# We are first creating a variable that can have an input from the user, then the inputted information is printed back to the screen.
age = age + 1
# Adding one to the age variable.
print(f"Happy Birthday, you are now {age} years old.")


# Exercise 1: Rectangle Area Calculation
# Area = Width x Length

length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))
area = length * width
print(f"The area of the rectangle is: {area}cm²")
# To get the superscript, you can use the following code: numlock + alt + 0178 for ².


# Exercise 2: Shopping Chat Program
item = str(input("What item are you buying?: "))
price = float(input(f"What is the price of the {item}?: "))
quantity = int(input(f"How many {item}s are you buying?: "))
total_cost = price * quantity
print(f"The total cost for {quantity} {item}(s) is: ${total_cost:.2f}")

