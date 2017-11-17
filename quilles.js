class Quille {
	constructor(){
		this.score=0;

	}
	calculScore(nbQ,valeurQ){

			if (nbQ === 1) {
				this.score=this.score+valeurQ;
			} else if (nbQ>1){
				this.score=nbQ;
			} else if (this.score === 50){
				write("Victoire");
				this.score===50;
			} else if (this.score>50){
				this.score=25;
			};
		return this.score;
		
	}
}