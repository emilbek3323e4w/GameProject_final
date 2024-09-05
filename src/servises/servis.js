export const MovUrl='https://api.rawg.io/api/';
export const apiKey='key=322d6919d3f644b28fe2dd00d66d35f1';


export const handleGenerateApi=(endpoint)=>{
    return `${MovUrl}${endpoint}?${apiKey}`
}


export const handleShortList=(arr)=>{
    if(arr.length>10){
        return arr.slice(0,5)
    }else {
        return arr
    }
}