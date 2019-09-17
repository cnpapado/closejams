import sys
import numpy
try: 
   n = int(sys.argv[1])
except IndexError:
   n = 20;
try: 
   filename = str(sys.argv[2])
except IndexError:
   filename = "in.txt"

with open(filename,'wb') as f:
   for i in range(n):
      l = numpy.random.randint(200)+1
      a = numpy.random.randint(-300,400,size=l)
      numpy.savetxt(f, [numpy.random.randint(0, l)], fmt='%d')
      numpy.savetxt(f, [a], delimiter=',', fmt='%d')
f.close()



