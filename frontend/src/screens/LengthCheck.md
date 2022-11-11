// 닉네임 체크 알고리즘 작성
// 닉네임은 6자 (12바이트)
// maxlength는 한글, 영문 가리지 않으므로 별도의 알고리즘이 필요함

function fn_CheckByte(obj) {
const maxByte = 12;
const text_val = obj.value;
const text_len = text_val.length;

let totalByte = 0;
for (let inp = 0; inp < text_len; inp++) {
const each_char = text_val.charAt(inp);
const uni_char = encodeURI(each_char);
if (uni_char.length > 4) {
totalByte += 2;
} else {
totalByte += 1;
}
}
if (totalByte > maxByte) {
alert("최대 한글 여섯 글자, 영어 열두 글자까지 입력할 수 있습니다.");
document.getElementsById("nowByte").innerText = totalByte;
document.getElementsById("nowByte").style.color = "red";
} else {
document.getElementById("nowByte").innerText = totalByte;
document.getElementsById("nowByte").style.color = "green";
}
}

          onKeyUp={fn_CheckByte(this)}
