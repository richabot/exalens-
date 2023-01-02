var score={};
function apartmentHunting(blocks,reqs){
  
    var apartment=1;
    var nearestBlockScore=-Infinity;
    var nearestBlock=0;
    for(let i of blocks){
        score[apartment]=0
       
        for( let j of reqs){
        
            if(i[j]==true)
            {
                score[apartment]=score[apartment]+1;
            }
       
        }
        if(nearestBlockScore<score[apartment])
        {
            nearestBlockScore=score[apartment];
            nearestBlock=apartment
         
        }
        
        apartment++;

      
    }

    if(nearestBlockScore==0){
        apartment=1;
        for(let i of blocks){
            
            for(let[key]of Object.entries(i))
            {
             
                if(key==true)
                {
                    score[apartment]=score[apartment]+1;

                }
            }
            if(nearestBlockScore<score[apartment])
            {
                nearestBlockScore=score[apartment];
                nearestBlock=apartment;
            }
            apartment++;
      
        }
    }
    return nearestBlock;

}
blocks = [
{
    "gym": false,
    "school": true,
    "store": false,
},
{
    "gym": true,
    "school": false,
    "store": false,
},
{
    "gym": true,
    "school": true,
    "store": false,
},
{
    "gym": false,
    "school": true,
    "store": false,
},
{
"gym": false,
"school": true,
"store": true,
}
]
reqs = ["school","gym", "store"]

let index=apartmentHunting(blocks,reqs)
console.log("block",index)
