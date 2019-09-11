class KdTree {
	constructor(k, pointList) {
		if (k <= 0) throw new RangeError("Number of dimentions must be positive.");
		this.root = new Node(k, pointList);		
	}
	
	search(x) {
		if (this.k == 1) {
			if (this._location == undefined) return this;
			if (x > this._location) { return search(this.right); }
			else if (x < this._location) { return search(this.left); }
			else return this;
		} else {
			if (this._location == undefined) return this;
			if (x[this.axis] > this._location[this.axis]) { return search(this.right); }
			else if (x[this.axis] < this._location[this.axis]) { return search(this.left); }
			else return this;		
		}
	}
			

	
	
	//static heapSort(arr) {}

}

class Node {
	constructor(k, pointList, _parent = null, depth=0) {
		this._parent = _parent;			
		if (pointList.length == 0) {
			return null;
		}
		this.k = k;
		this.axis = depth%k;
	
		let axial_compare = makeComparator(this.axis, this.k);
		pointList.sort(axial_compare);  //reduce sorting?! nth_elem??		
	
		this.median = Math.floor((pointList.length-1) / 2);
		this._location = pointList[this.median];
	
		this.left = new Node(k, pointList.slice(0,this.median), this, depth+1);  //dont copy?!
		this.right = new Node(k, pointList.slice(this.median+1, pointList.length), this, depth+1);		
	}	
}



function makeComparator(i,k) {
	if (k == 1) {  //pointList is a list of integers, not lists so we won't use double brackets 
		return function(a,b) {
			if (a<b) {
				return -1;
			}
			if (a>b) {
				return 1;
			}
			return 0;
  		};

	} else {
		return function(a,b) {
			if (a[i]<b[i]) {
				return -1;
			}
			if (a[i]>b[i]) {
				return 1;
			}
			return 0;
  		};
	}
}


