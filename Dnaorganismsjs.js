// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)] ;
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand;
  }
  /* factory format function that produces objects */
  const pAequorFactory = function(specimenNum,dna){
      return{
          specimenNum:specimenNum,
          dna:dna,
          /* function that mutates the dna of two objects */
          mutate(){
             b=Math.floor(Math.random()*15);
             c=this.dna[b];
             x= returnRandBase();
            if (c!=x){
               this.dna[b]=x;
            }
          },
           /* function that calculates the similarity rate between two dna's with 15 bases each */
            compare(objj){
               let cn = 0;
                for (let i=0; i<=15;i++){
                       if (objj.dna[i]==newObj.dna[i]){
                           cn++;
                    }
                }
                per = ((cn)/15)*100;
                return `The similarity percentage in DNA of  of specimen ${objj.specimenNum} 
                and specimen ${newObj.specimenNum} is at ${Math.round(per)} %!`;
            },
            /* Calculates the chances that organism has to survive*/
             willLikelySurvive(){
                 let ct=0;
                 this.dna.forEach(function(par) { if (par=='C'||par=='G'){ ct++}});
                 p = (ct/15)*100;
                 if (p>=60){
                    return Math.round(p);
                 }else{
                    return `Does not have many chances to live`;
                }
            }
         }
    }
   
  
  const newObj = pAequorFactory(1,mockUpStrand());
  newObj.mutate();
  const secObj = pAequorFactory(2,mockUpStrand());
  /*console.log(newObj.compare(secObj));*/
  /*console.log(newObj.willLikelySurvive())*/
  
  const arrayOrganisms=[];
  for (let u=0; u<=29; u++){
     let a=pAequorFactory(u,mockUpStrand());
     let y=a.willLikelySurvive();
     if (y >=60 ){
       arrayOrganisms.push(a);
     }else{
       while (typeof y == 'string') {
       a=pAequorFactory(u,mockUpStrand());
       y=a.willLikelySurvive();
       }
     }
     console.log(y);
     arrayOrganisms.push(a);
  }
  console.log(arrayOrganisms);
  
  
  
  
  
  
  