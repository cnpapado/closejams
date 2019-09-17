import numpy
with open("quickselect.in") as f:
    lines=f.readlines()
    for index, line in enumerate(lines):
        if index%2==0:
            k = int(line)
            continue
        a = numpy.fromstring(line, dtype=int, sep=',')
        out = open("quickselect.out", 'wb')
        #out.write(int(2))
        #print(copy.quickselect(a,k)) 
        print(numpy.partition(a, k)[k])
