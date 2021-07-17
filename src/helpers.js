const getContrastYIQ = (hextcolor) =>{
    var r= parseInt(hextcolor.substr(0,2),16);
    var g= parseInt(hextcolor.substr(2,2),16);
    var b= parseInt(hextcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b+114))/1000;
    return ( yiq >=128) ? 'black' : 'white'
}

export {
    getContrastYIQ
}