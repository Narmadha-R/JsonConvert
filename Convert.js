var fs=require('fs');
var lEmitter= require('readline').createInterface({
input: fs.createReadStream('India2011.csv'),
output: fs.createWriteStream('indiaa2011.json')
});
var data=[];
var arr=[];
var head =[];
var c=0;

lEmitter.on('line', function (line) {
  
  if(c == 0){
	 head = line.split(',');
	//console.log(head);
	 c++;
  }
 
  else
  {
	  var myobj={};
	  var aa = line.split(',');
	  
	  for (var j=0;j<head.length;j++){            
        
  				 
	     if(j==5)
	      

			 myobj[head[j]]=aa[j];
			
		      
	 

	if(j==12)
		  
		
			  myobj[head[j]] = aa[j];
		
	
	arr.push(myobj);
}
  });
           lEmitter.on('close',function(){
			  
		   var jso = JSON.stringify(arr);
	       fs.appendFile('indiaa2011.json',jso,function(err){
           // console.log(jso);

		   });
});