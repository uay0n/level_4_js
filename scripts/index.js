// index.js
// 1. 변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1');
const result1p = document.querySelector('.result1');
let replaceData = itemPrice.toLocaleString('ko-kr');//데이터 종류 변경변수
//------------------------------------------연습(웹은행에 150만원이 입금)
let bankMoney = 15000000;
let moneyDeta =  bankMoney.toLocaleString('ko-kr')
const bank = document.querySelector('.money1')

// 출력 테스트 콘솔
console.log(itemPrice);
console.log(titleBig,result1p,replaceData);
console.log(bankMoney,moneyDeta,bank);

// 실행 결과
result1p.textContent = replaceData+'원'
bank.textContent = moneyDeta+'입금'

//---------------------------------------
// 2. 배열
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1>li') //querySelectorAll>한번에 다 잡는.
const study1Dt = document.querySelectorAll('.study>dt')
const study1Dd = document.querySelectorAll('.study>dd')

console.log(list1Li);
console.log(study1Dt,study1Dd);
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

list1Li[0].textContent = money[0].toLocaleString('ko-kr')+'원';
list1Li[1].textContent = money[1].toLocaleString('ko-kr')+'원';
list1Li[2].textContent = money[2].toLocaleString('ko-kr')+'원';

list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itemPriceOriginal[0].toLocaleString('ko-kr')+'원';

study1Dt[0].textContent= itemName[2];
study1Dd[0].textContent= itemPriceOriginal[2];
study1Dt[1].textContent= itemName[3];
study1Dd[1].textContent= itemPriceOriginal[3];

let food = ['계란', '스테이크', '샐러드', '김치', '단무지', '쌀밥', '콩나물국'];

//계란, 콩나물국, 김치 출력
//스테이크 -> 연어로 변경

console.log(food[0]);
console.log(food[6]);
console.log(food[3]);

food[1] = '연어';
console.log(food[1]);


//---------------------------------------
// 3. 객체
// 객체명 = {속성:값, 속성:값}; //객체 생성하기
// 격체명.속성; //원하는 객체 불러오기

const movie /* 객체 */ = {
    name /* 속성 */:'스파이더맨', 
    price:12000,
}

//객체.속성
console.log(movie.name);
console.log(movie.price);

//------------------------------------------객체+cgv DB 연결
const cgv = document.querySelector('.cgv'); //document>바디
const cgvPoster = cgv.querySelector('img'); //바로 cgv내에 있는 img를 잡으라는 의미
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate, cgvGenre)

// cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name; 
cgvAge.textContent = movieDb[0].age; 
cgvRate.textContent = movieDb[0].reservation_rate; 
cgvGenre.textContent = movieDb[0].genre; 

//----------------------------------------객체변수 연습
const dessertTray = {
    top:['파랑마카롱', '분홍마카롱', '초록마카롱', '노랑마카롱'],
    middle:['슈크림', '머핀', '에그타르트'],
    bottom:['방울토마토', '청포도', '오렌지'],
}

console.log(dessertTray);
console.log(dessertTray.top[3]);
console.log(dessertTray.middle[0]);
console.log(dessertTray.bottom[1]);

dessertTray.bottom[2] = '망고';
console.log(dessertTray.bottom[2]);

//----------------------------------------증감연산자
// 무조건 1씩 증가, 감소하는, ++a, a++, --a, a--

let num = 1;
console.log(num); //1 (변수가 처음 대입된 값 테스트)

num++; //1증가
console.log(num); //2 (위 연산 후 실행 테스트)

num--; //1감소
console.log(num); //1

//----------------------------------------증감연산자,2개의 변수 활용
let number1 = 10;
let number2;

console.log(number1,number2);//초기값 테스트

number2 = number1++;
//증감연산자를 변수 뒤에 붙이면
//기존 변수값(number)이 대입(=)을 만나 number2로 먼저 보내고
//++로 number1을 나중에 증가시킨다 (후처리)
console.log(number1,number2);