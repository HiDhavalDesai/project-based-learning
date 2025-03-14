# Typecasting = the process of converting a variable from one data type to another.
#               str(), int(), float(), bool() = turn variable into a string, integer, float, or boolean
#               int() will round down when converting from float to int
#               float() will convert an integer or string to a float
#               bool() will convert a value to a boolean (0, "", [], {}, None = False, everything else = True)


name = "HiDhavalDesai"
age = 30
gpa = 3.0
is_student = True

# To see what type a variable is, use the type() function.
type(name)
# This will have no output; so we print it; out put will be class 'str' meaning that it's a string.
print(type(name))

# reassign gpa (float) to an integer
gpa = int(gpa)
print(gpa)

# int to floating
age = float(age)
print(age)

# age to string; there are no quotes; so it's hard to tell, but if you typecast, you will see it say string.
age = str(age)
print(age)
print(type(age))

# Strings and number behave different when we try to concatenate them together. (Add,subtract, multiply, divide them). 
# Strings will just add the number to the end; for example "2" + "5" = "25" 
# For integers it would be 2 + 5 = 7.

# Name to bool
name = bool(name)
print(name)
# The reason it shows True; is because the string is not empty. If it was an empty string, it would be False.