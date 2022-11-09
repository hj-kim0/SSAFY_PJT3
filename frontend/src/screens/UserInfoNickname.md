// 닉네임 체크 알고리즘 작성
// 닉네임은 6자 (12바이트)
// 한글, 대소문자, 숫자 이외에 다른 문자는 아스키 코드를 통하여 경고 후 입력 불가능하도록 설정 해둘 예정

function CheckCharacter(obj) {
var exceptCHA = ~!@#$%^&\*()\_+=-`{}[]\|:;'<>,.?/;

if (exceptCHA.test(obj.value)) {
alert("닉네임에 특수문자는 사용하실 수 없습니다.");
obj.value = obj.value.substring(0, obj.value.length - 1);
}
}
onKeyUp={CheckCharacter(this)}
onKeyDown={CheckCharacter(this)}
