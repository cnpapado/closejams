import random
import math

def quickselect(l, k, pivot_fn = random.choice):
    if (len(l) == 1):
        assert k==0
        return l[0]   
    pivot = pivot_fn(l)
    less = [i for i in l if i < pivot] 
    greater = [i for i in l if i > pivot]
    pivots = [i for i in l if i == pivot]          
    
    if (k < len(less)): return quickselect(less, k, pivot_fn)
    elif (k < len(less)+len(pivots)): return pivots[0]
    else: return quickselect(greater, k-len(less)-len(pivots), pivot_fn)

def median(l):
    return quickselect(l, math.floor(len(l)/2))     
'''
def quickselect(l, k, pivot_fn=random.choice):
  """
  Select the kth element in l (0 based)
  :param l: List of numerics
  :param k: Index
  :param pivot_fn: Function to choose a pivot, defaults to random
  :return: The kth element of l
  """
  if len(l) == 1:
    assert k == 0
    return l[0]
  pivot = pivot_fn(l)
  lows = [el for el in l if el < pivot]
  highs = [el for el in l if el > pivot]
  pivots = [el for el in l if el == pivot]
  if k < len(lows):
    return quickselect(lows, k, pivot_fn)
  elif k < len(lows) + len(pivots):
    # We got lucky and guessed the median
    return pivots[0]
  else:
    return quickselect(highs, k - len(lows) - len(pivots), pivot_fn)
'''
