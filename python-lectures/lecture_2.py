# Variables = A container for a value (four different data types - string (names/words), integer(whole numbers, no decimals), float(numbers with decimals), boolean(true or false))
#             A variable behaves as if it was the value it contains.

first_name = "John"   #string
last_name = "Doe"   #string
age = 27    #integer
height = 1.83   #float
height2 = 200 #integer (height in cm)
is_alive = True   #boolean; will only display true or false; will be capitalized. Booleans are more likely used for if-statements.
income = 50000.00 #float
food = "pizza" #string
email = "fakeemail@gmail.com" #string
quantity = 3 #integer 
students = 30 #integer

print(first_name)
# No quotes here, because we are not printing the variable word, so we just write the variable.

# A variable with some text is called an f-string; f means format.
# This is called formatted string literals, a string with F or f before the opening quotes marks, which allows us to embed expressions inside string literals, using curly braces {}.

print (f"Hello my name is {first_name} {last_name}.")
print(f"I like {food} so I bought {quantity}")
print(f"My email is {email}")
print(f"I am {age} years old. And my income is {income}.")
print(f"There are {students} students in the class. And they are all alive: {is_alive}")
print(f"The average height of the students is {height} meters, and {height2} centimeters.")

# This is me testing some stuff
agenheight = height2+age
print(f"{height2} + {age} = {agenheight}")


# This is a true/false if-statement we will learn more about later.
if is_alive == True:
    print("The student is alive.")
else:
    print("The student is not alive")



# Small assignment; create four variables
user_name = "HiDhavalDesai"
year = 2023
age = 20
is_working = True
income = 1000000000.00

print(f"My name is {user_name}. I am {age} years old. I am working: {is_working}. My income is {income}.")