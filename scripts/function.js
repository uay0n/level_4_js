// function.js
// 1.내장함수
//alert('이 사이트는 포트폴리오용 사이트입니다.');
//const q1 = prompt('1+1?');
//alert ('사용자가 입력한 답은'+q1+'입니다') //사용자가 입력한 답은 ?입니다.
//print();
const printBtn = document.querySelector('#print_btn');
console.log(printBtn);
//v1. 사용자정의함수를 이벤트함수내에서 호출한 방식(2개 이상 반복일 경우)
//printBtn.addEventListener('click',printFunc)

//v2. 이벤트함수(addEventListener) 내에서 직접 사용자함수를 만드는 방식(반복안될때)
//이벤트의 객체가 정해진 상태로 하기 떄문에 내부 내장함수엔 함수명을 따로 작성안함.
//printBtn.addEventListener('click',function(){print()});

//v3. 내장함수에 함수명이 안들어가는데 function 키워드를 써야하는지 의문으로 생긴 새로운 함수
//화살표 함수 ()=>{} (2번 이상 반복되지 않을 때) 
printBtn.addEventListener('click',()=>{print()});

//랜덤> 동적 애니메이션이나 게임에 들어갈 때 사용(로또, 숫자 랜덤게임 등)
const num1 = Math.random();//0~1 랜덤한 숫자 생성 내장함수
const num2 = Math.floor(Math.random()*10)+1;
console.log(num1,num2);

//typeof 변수생성 = (함수1(함수2)); 함수2부터 처리->함수 1처리 ->변수대입
//const num3 = Number(prompt('NCS시험점수는? 0~100점 사이로 숫자만 입력해주세요.'));
//console.log(num3);
//console.log(typeof(num3)); //데이터타입확인 함수



//2.사용자정의함수
function printFunc(){ print(); }

//3. 함수 스코프, 변수 범위
let b = 20; //전역
let c = 30; //전역

function test(){ 
    let a = 10;//함수 내부에서 선언된 지역변수
    return console.log(a+b); //ok
}
test();
//console.log(a);//error
console.log(b+c);//ok

//4.함수의 매개변수
//반복되는 함수 내에 달라지는 매개값이 있을 때 사용
//동화 : 헨젤과 그레텔이 집을 찾아오는 반복 방법
function story1 (boy='헨젤', girl='그레텔', mapData){ //함수생성(매개변수생성)
    let person = [boy,girl]
    let result = person[0]+'과(와)'+person[1]+'이 '+mapData+'을(를) 따라 집을 찾아갔습니다.';
    //헨젤과 그레텔이 조약돌을 이용해 집을 찾아갔습니다.
    return console.log(result);
}
story1('봄','여름','조약돌')//함수생성(매개변수 값 대입)
story1('undefined',' undefined','빵부스러기')//함수생성(매개변수 값 대입)

//동화2 : story2 함수 생선, 매개벼수 달라지는 데이터 기준으로 추가 생성(이름은 자유)
//나무꾼은 금도끼를 잃어버렸습니다.
//나무꾼은 쇠도끼를 잃어버렸습니다.
//집이 달라서 person,result 뒤에 숫자를 붙일 필요없음
function story2 (man,material){
    let person = man;
    let result = man+'은 '+material+'를 잃어버렸습니다.';
    return console.log(result)
}
story2('나무꾼','금도끼')
story2('나무꾼','쇠도끼')
story2('주인공')//앞 매개변수 문자대입, 뒤 매개변수 안적어서 기본값 처리

//카페 키오스크
//아이스아메리카노 1잔 주문완료
//function 간편버전 => 이벤트 내에서 주 사용
//''+변수+'' '간편버전' `문자${변수}`
function cafeKiosk(menu, number=1){
    const order = `${menu} ${number}잔 주문완료`;
    return console.log(order);
}
cafeKiosk('코코아','2')

//ICE, HOT, 메뉴, 메뉴개수까지 선택가능한 함수 만들기
//출력 예) ICE 카페라떼 2잔 주문 완료
//출력 예) HOT 카페라떼 1잔 주문 완료
function cafeKiosk2(temp, menu, number=1){
    const order = `${temp} ${menu} ${number}잔 주문완료`;
    return console.log(order)
}
cafeKiosk2 ('ICE','카페라떼','2')
cafeKiosk2 ('HOT','카페라떼')

//변수버전
function cafeKiosk3(te, me, num=1){
    const temp = ['ICE', 'HOT']
    const menu = ['아메리카노', '카페라떼', '녹차라떼', '초코라떼']
    const order = `${temp[te]} ${menu[me]} ${num}잔 주문완료`
    return console.log(order);
}
cafeKiosk3(0,0,1)//ICE 아메리카노 1잔 주문완료
cafeKiosk3(1,2,4)//HOT 녹차라떼 4잔 주문완료

//5.함수리턴
//함수 내부 실행 데이터를 사용자가 원하는 방식으로 출력되게 만드는 키워드
function japangi(drink, num=1){
    const order = `${drink} ${num}개 주문완료`;
    return order //order변수에 저장된 값만 함수 외부로 반환(종료)
    return; //리턴 뒤에 아무것도 안적으면 함수만 강제 종료
    return console.log('잔액이 부족합니다.'); //리턴 뒤 콘솔실행하고 함수 종료
    console.log(order);//리턴 아래 써있는 명령은 절대 실행안됨
}
japangi('생수'); //함수 내부 리턴에서 출력함수가 정해졌을 때 데이터만 전달방식
console.log(japangi('사이다')); 
//함수 내부 리턴에서 출력함수가 정해지지 않고 데이터만 반환했을 때 함수 밖에서 출력함수를 정하는 방식
printBtn.textContent = japangi('콜라');
//값만 가지고 와서 내가 어디에 출력할지 고르는 것