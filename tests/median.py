import numpy
import sys 
import os
sys.path.append(os.path.abspath("/mnt/MyData/UbuntuDesktop/ClosestPair/this_flask/misc/"))
from 'quickselect.py' import *

with open("quickselect.in") as f:
    lines=f.readlines()
    for index, line in enumerate(lines):
        if index%2==0:
            k = int(line)
            continue
        a = numpy.fromstring(line, dtype=int, sep=',')
        out = open("quickselect2.out", 'wb')
        out.write(quickselect(a, k))
        #print(copy.quickselect(a,k)) 
        print(numpy.partition(a, k)[k])
