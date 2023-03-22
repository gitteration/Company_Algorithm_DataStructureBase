function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck
    let result1 = 0,result2 = 0;

    for(const char of str1){
        result1 += char.charCodeAt()
    }
    for(const char of str2){
        result2 += char.charCodeAt()
    }
    return result1 === result2;
}
