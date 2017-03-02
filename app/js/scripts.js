function myFunc(a,b) {
	for(var i = a; i <= b; i++) {
		if(i % 2 === 0) {
			console.log(i);
		}
	}
}

myFunc(1,10);