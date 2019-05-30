export function twoFer(name=null){
    if (name === null ){
        return "One for you, one for me."
    }
    else{
        return `One for ${name}, one for me.`
    }

}