var fs=require('fs');
var fetch = require('readline').createInterface({
input: fs.createReadStream('India2011.csv')
//output: fs.createWriteStream('india2011.json')
});
var data=[];
var obj={};
var head =[];
var c=0;
fetch.on('line', function (line) 
{
  
  if(c == 0){
     head =line.split(',');
    //console.log(head);
     c++;
  }
 
  else
  {
      var aa = line.split(',');
      for (var j=0;j<head.length;j++) {            

    if(j==3)
          
         /*    if(c==3)	  
			 {
			  while(c<=15)
				{
					data[j]=aa[j]+data[j];
					j++;
					c++;
				}
				obj[head[j]]==data[j];
			 }*/
              obj[head[j]]=aa[j];
          
	if(j==5)
			/* if(c==3)	  
			 {
              while(c<=15)
				{
					data[j]=aa[j]+data[j];
					j++;
					c++;
				}
				obj[head[j]]==data[j];
			 }*/
          obj[head[j]]=aa[j];
          
         
    if(j==12)
	     
	     /*  if(c==3)	 
			{
				while(c<=15)
				{
					data[j]=aa[j]+data[j];
					j++;
					c++;
				}
				obj[head[j]]=data[j];
			  
             }   */        
              obj[head[j]]=aa[j];
          

      }
      
     //console.log(obj);
      var jso=JSON.stringify(obj);
      fs.appendFile('india2011.json',jso,function(err){
		   console.log(jso);
	  });
    
  }

});