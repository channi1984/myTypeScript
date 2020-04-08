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

const tpArray: [string, number] = ["바나나", 1];

//객체

const user: {name:string; height:number;} = {name:'차니', height:178};

//객체 선택속성
const userNo : {name:string; height?:number} = {name:'차니'}


//타입

type types = string;
function getUser(types:types) {

}

getUser('channi');