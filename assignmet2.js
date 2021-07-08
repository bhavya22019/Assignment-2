                                              ////////PROBLEM 1

for(i=1;i<=100; i=i+1)
	{
  
		if(((i%3) == 0) && ((i%5) != 0)) {
					
    console.log('Fizz')
  
		}

  		else if (((i%3) != 0) && ((i%5) == 0)){

    						console.log('Buzz')
  
		}
		
else if (((i%3) == 0) && ((i%5) == 0)){

						 console.log('FizzBuzz')
		
}

		else{

			console.log(i)
  
		}

}

                

                          			//////////PROBLEM-2

s="aba abab aba abab"

w=''

r=''

for (i of s){

	  if (i==' ') {
		
    if (r==w) {
			
      console.log(w)
		
    }
	
    		w=''
			
r=''

 	 }

	  else{

		    w=w+i 

		    r=i+r
  
	}

}