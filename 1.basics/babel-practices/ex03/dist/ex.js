// 블록 스코프 변수 (es6)
var users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; // 객체 분해 (es6), 들어오는 객체중에 no, name만 받겠다.

/*
function print(o){
    // 기본 문법
    console.log( o.no + ", " + o.name + ", " + o.email);
    // 탬플릿 문자열(es6)
    console.log( `{o.no}, {o.name}, {o.email}`);
}
*/
// const {no} = users[0];

function print(_ref) {
  var {
    no,
    name,
    email
  } = _ref;
  // 탬플릿 문자열(es6)
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
} // for(user : users)와 같이 forEach임.
// for ... of


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
