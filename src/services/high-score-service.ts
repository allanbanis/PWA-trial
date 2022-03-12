const VAR_HIGH_SCORE="HIGH_SCORE"

export function getHighScore():Number{
    return parseInt(localStorage.getItem(VAR_HIGH_SCORE)??"0");
}


export function setHighScore(score:number):void{
    localStorage.setItem(VAR_HIGH_SCORE, score.toString());
}