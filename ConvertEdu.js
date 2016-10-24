var fs=require('fs');
var lEmitter = require('readline').createInterface({
input: fs.createReadStream('India2011.csv'),
output: fs.createWriteStream('indiaa20112.json')
});

var objarr=[];
var head =[];
var c=0;
lEmitter.on('line', function (line) 
{
  
  if(c == 0){
     head =line.split(',');
    //console.log(head);
     c++;
  }
 
  else
  {
	  myobj={};
      var aa = line.split(',');
      for (var j=0;j<head.length;j++) {            

      if(j == 3)
          {            
	     myobj[head[j]]=aa[j];
			}
          if(j==14)
          {        
              myobj[head[j]]=aa[j];
          }
          if(j==15)
          {             
              myobj[head[j]]=aa[j];
          }
		  if(j==16)
          {        
              myobj[head[j]]=aa[j];
          }
          if(j==17)
          {             
              myobj[head[j]]=aa[j];
          }
		  if(j==18)
          {        
              myobj[head[j]]=aa[j];
          }
          if(j==19)
          {             
              myobj[head[j]]=aa[j];
          }
		  if(j==20)
          {        
              myobj[head[j]]=aa[j];
          }
          if(j==21)
          {             
              myobj[head[j]]=aa[j];
          }
		   if(j==22)
          {             
              myobj[head[j]]=aa[j];
          }

      }
      		  objarr.push(myobj);

   
	 
  }
	  });
	  
 lEmitter.on('close',function(){
		   var jso = JSON.stringify(objarr);
	       fs.appendFile('indiaa20112.json',jso,function(err){
            //console.log(jso);

		   });
});