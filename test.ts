//기본타입

//불리언

const isType: boolean = true;

//숫자

const score: number = 100;

//문자열

const named: string = '차니';

//Null Undefined

const nullValue: null = null;
const unValue: undefined = undefined;

//배열

const arrNum: number[] = [0, 1, 2, 3, 4, 5];
const arrString: string[] = ["바나나", "귤", "사과"];

//튜플

let tpArray: [string, number];
tpArray = ['a',1]
//tpArray = ['a',1,2] 2개의 배열만 허용합니다
//toolbar = [1,'a'] 타입이 맞지 않습니다.

//객체

const user: { name: string; height: number; } = { name: '차니', height: 178 };

//객체 선택속성
const userNo: { name: string; height?: number } = { name: '차니' }


//타입

type types = string;
function getUser(types: types) {

}

getUser('channi');

//인터페이스
interface IUser {
    name: string,
    age: number,
    isValid: boolean
}

let userArr: IUser[] = [
    {
        name : 'Neo',
        age : 85,
        isValid: true
    }
]

//읽기 전용 배열

let arrA: readonly number[] = [1,2,3,4];

//arrA[0] = 1; 수정할 수 없습니다.

