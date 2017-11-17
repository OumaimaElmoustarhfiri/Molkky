chai.should();

describe('Décrit le jeu du MOLKKY', () => {
  let résultat;
  let MonQuilles;

  beforeEach(() => {
    MonQuilles = new Quille();
  });

  it('1 Quille tombée', () => {
    résultat=MonQuilles.calculScore(1,12);
    résultat.should.equal(12);
  });

  it('n Quilles tombées',() => {
    résultat=MonQuilles.calculScore(5,56);
    résultat.should.equal(5);
  });

  it('50 points "VICTOIRE"',() => {
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat.should.equal(50);

  });

  it('SCORE > 50',() => {
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat=MonQuilles.calculScore(1,10);
    résultat.should.equal(60);
  });

  
});
