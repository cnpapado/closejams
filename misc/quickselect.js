module.exports = {
quickselect: function quickselect(l, k, pivot_func = function(a) {return Math.floor(Math.random()*(a.length-1))+1}) {
	//console.log(pivot_func(l));	
	//if (foo++ > 20) return -1;	
	if (l.length == 1) {
		//console.log("here");
		if (k!=0) throw RangeError();
		return l[0]; //cornercase (DEBUG)		
	}	
	pivot = pivot_func(l); //returns pivot index
	//console.log("pivot is: ", l[pivot])
	let greater = [], less = [], pivots = [];	
	for (i in l) {
		if (l[i] < l[pivot]) less.push(l[i]);
		else if (l[i] == l[pivot]) pivots.push(l[i]);			
		else greater.push(l[i]);
	}
	//console.log(less, "w l=",less.length, pivots, "w l=", pivots.length,greater,"w l=", greater.length);
	if (k < less.length) { /*console.log("less", k);*/ return quickselect(less, k, pivot_func); }
	else if (k < less.length + pivots.length) { /*console.log("pivots");*/ return pivots[0]; }	
	else { /*console.log("greater");*/ return quickselect(greater, k-less.length-pivots.length, pivot_func); }
},

median: function (l) {
	quickselect(l, Math.floor(l.length/2));
}


}
