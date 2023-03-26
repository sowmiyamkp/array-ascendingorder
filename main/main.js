var array=[2,1,4,3];
var c;
for(i=0;i<array.length;i++)
{
	for(j=i+1;j<array.length;j++)
	{
		if(array[i]>array[j])
		{
			c=array[i];
			array[i]=array[j];
			array[j]=c;
		} 
	}

	 
}

 console.log("ascending order");
   	console.log(array); 