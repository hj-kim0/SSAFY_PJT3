// 닉네임 바이트 체크 > 중복 체크 함수 작성
// 닉네임은 6자 (12바이트)
// maxlength는 한글, 영문 가리지 않으므로 별도의 알고리즘이 필요함

class CheckByte extends Component {
render() {
let strValue = obj.value;
let strLen = strValue.length;
let totalByte = 0;
let len = 0;
let oneChar = "";
let str2 = "";

    for (var i = 0; i < strLen; i++) {
      oneChar = strValue.charAt(i);
      if (encodeURIComponent(oneChar).length > 4) {
        totalByte += 2;
      } else {
        totalByte++;
      }

      if (totalByte <= maxByte) {
        len = i + 1;
      }
    }

    if (totalByte > maxByte) {
      alert("닉네임은" + maxByte + "를 초과하여 입력할 수 없습니다!");
      str2 = strValue.substr(0, len);
      obj.value = str2;
      CheckByte(obj, 5000);
    }

}
}

// 닉네임 중복 체크입니다.
