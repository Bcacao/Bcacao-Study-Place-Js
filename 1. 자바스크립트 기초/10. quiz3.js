var inputA = 0;
var star = '';
var inputB = 0;

inputA=+prompt('정사각격을 그립니다. \n높이는 얼만입니까?');
inputB=+prompt('정사각격을 그립니다. \n밑변의 길이얼만입니까?');

for (var j = 0; j < inputA; j++) {
    
    for (var i = 0; i < 3; i++) {
        star += '*  '
    }
    star += '\n'
}
alert(star);