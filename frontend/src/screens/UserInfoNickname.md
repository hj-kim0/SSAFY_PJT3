// 닉네임 체크 알고리즘 작성 (임시)
// 닉네임은 6자 (12바이트) 예정
// 한글, 대소문자, 숫자 이외에 다른 문자는 아스키 코드를 통하여 경고 후 입력 불가능하도록 설정 해둘 예정

function NickNameCut(str, lengths)
{
var len = 0;
var newStr = '';

for (var number = 0; number<str.length; number++)
{
var UniNumber = str.charCodeAt(number);

    var UniNumberOut = str.charAt(number);

    if ((number >= 0) && (number < 256)) len++;
    else len += 2;

    if (len>lengths) break;
    else newStr = newStr + UniNumberOut;

}
return newStr;
}

function ByteCheck(byte, nickname) {
var obj = document.getElementById(nickname);
var e_index = 0;
if (obj.value.bytes() > byte)
{if (event.keyCode != '8')
{var chknickname = (nickname / 2);
alert('한글은' + chknickname + '자, 영문은 ' + nickname + '자까지 입력 가능합니다.');
obj.value = fnCut(ob)}
}
