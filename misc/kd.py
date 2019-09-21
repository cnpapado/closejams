class Node:
    def __init__(self, info, left=None, right=None):
        self.info = info
        self.left = left
        self.right = right
def kdtree(pointList, depth=0):
    if len(pointList)==0: return None
    k = len(pointList[0])
    axis = depth%k 
    pointList.sort(key = lambda x: x[axis])
    median = len(pointList)//2
    before = [i for i in pointList if i < pointList[median]]
    after = [i for i in pointList if i > pointList[median]]         
    #TODO handle points lying in median
    left = kdtree(before, depth+1)
    right = kdtree(after, depth+1)
    return Node("info", left, right)
        
