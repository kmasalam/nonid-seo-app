export const  BreakAfterString = (str,arg) => {
    if(str){
        var res = str.slice(0, arg);
        let total = str.length;
        var another = str.slice(arg, total);
            another =  res + ' <br/>' +  another;
            return another;
    }

    return str;
  }