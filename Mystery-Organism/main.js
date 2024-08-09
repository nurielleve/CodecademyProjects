// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  let organism = {
      specimenNum: num,
      dna: arr,
      mutate() {
        let num = Math.floor(Math.random() * 15);
        switch (this.dna[num]) {
          case 'A':
            this.dna[num] = ['G', 'C', 'T'][Math.floor(Math.random() * 3)];
            break;
          case 'G':
            this.dna[num] = ['A', 'C', 'T'][Math.floor(Math.random() * 3)];
            break;
          case 'C':
            this.dna[num] = ['A', 'G', 'T'][Math.floor(Math.random() * 3)];
            break;
          case 'T':
            this.dna[num] = ['A', 'C', 'G'][Math.floor(Math.random() * 3)];
            break;
          default:
            console.log('There is something wrong with this DNA!');
            break;
        }
        return this.dna; 
      },
      compareDNA(pAequor) {
        let count = 0;
        for (let i = 0; i < 15; i++) {
          if (pAequor.dna[i] === this.dna[i]) {
            count++;
          }
        }
        let percentage = Math.round((count / 15) * 100);
        console.log(`Specimen #${pAequor.specimenNum} and specimen #${this.specimenNum} have
        ${percentage} DNA in common.`);
      },
      willLikelySurvive() {
        let count = 0;
        for (let i = 0; i < 15; i++) {
          if (this.dna[i] === 'G' || this.dna[i] === 'C') {
            count++;
          }
        }
        if (Math.round((count / 15) * 100) >= 60) {
          return true;
        } else {
          return false;
        }
      }
    };
  return organism;
}

let SurivingSpecimen = [];
for (let i = 0; i < 30; i++) {
  let organism = pAequorFactory(i, mockUpStrand());
  if (organism.willLikelySurvive()) {
    SurivingSpecimen.push(organism);
  }
}

console.log(SurivingSpecimen);



