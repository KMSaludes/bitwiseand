function bitwise_and (bitwise_and){
    var ret_val=["5.13"]&["3.11"].split(".");
    for(x=0; x<ret_val.length; x++){
        ret_val[x]=parseInt(ret_val[x])+bitwise_and;
    }
    return ret_val;
}
/*
how to use:
bitwise_and["5.3"]["13.11"];
*/