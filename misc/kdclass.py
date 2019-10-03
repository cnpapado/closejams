class Kdtree:
   class Node:
      def __init__(self, pointList, depth=0, left=None, right=None):
         if len(pointList)==0: return None
         k = len(pointList[0])
         axis = depth%k 
         pointList.sort(key = lambda x: x[axis])
         median = len(pointList)//2
         before = [i for i in pointList if i < pointList[median]]
         after = [i for i in pointList if i > pointList[median]]         
         #TODO handle points lying in median
         self.left = Kdtree.Node(before, depth+1)
         self.right = Kdtree.Node(after, depth+1)
      def traverse(self):
         if self == None: return
         print("hey")
         self.right.traverse()   
   def __init__(self, pointList):
      self.root = Kdtree.Node(pointList)
   def traverse(self):
      self.root.traverse()    
