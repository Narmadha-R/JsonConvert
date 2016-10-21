var fs=require('fs');
var fetch = require('readline').createInterface({
input: fs.createReadStream('India2011.csv')
//output: fs.createWriteStream('india2011.json')
});

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

      if(j == 3)
          {            
	      obj[head[j]]=aa[j];
			}
          if(j==14)
          {        
              obj[head[j]]=aa[j];
          }
          if(j==15)
          {             
              obj[head[j]]=aa[j];
          }
		  if(j==16)
          {        
              obj[head[j]]=aa[j];
          }
          if(j==17)
          {             
              obj[head[j]]=aa[j];
          }
		  if(j==18)
          {        
              obj[head[j]]=aa[j];
          }
          if(j==19)
          {             
              obj[head[j]]=aa[j];
          }
		  if(j==20)
          {        
              obj[head[j]]=aa[j];
          }
          if(j==21)
          {             
              obj[head[j]]=aa[j];
          }
		   if(j==22)
          {             
              obj[head[j]]=aa[j];
          }

      }
      
     //console.log(obj);
      var jso=JSON.stringify(obj);
      fs.appendFile('india20112.json',jso,function(err){
		   console.log(jso);
	  });
    
  }

});