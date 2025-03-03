# Variables = A container for a value (four different data types - string, integer, float, boolean)
#             A variable behaves as if it was the value it contains.

first_name = "John"   #string
last_name = "Doe"   #string
age = 27    #integer
height = 1.83   #float
is_alive = True   #boolean
income = 50000.00 #float
food = "pizza" #string
email = "fakeemail@gmail.com" #string
quantity = 3 #integer 

print(first_name)
# No quotes here, because we are not printing the variable name, but the value it contains.

# A variable with some text is called an f-string; f means format.
print (f"Hello my name is {first_name}")
print(f"I like {food}")
print(f"My email is {email}")
print(f"I am {age} years old.")
