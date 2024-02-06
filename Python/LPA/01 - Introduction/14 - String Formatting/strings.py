for i in range(1,13):
  print("No {0:2} squared is {1:4}".format(i,i**2))


print()
for i in range(1,13):
  print("No {0:2} squared is {1:<4}".format(i,i**2))

print()
for i in range(1,13):
  print("No {0:2} squared is {1:^4}".format(i,i**2))