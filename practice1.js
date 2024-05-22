// 문제 1: 문자열 내 각 문자의 개수 반환
// 문제 정의:
// 주어진 문자열에서 각 문자가 몇 번 등장하는지 세어라. 결과는 객체 형태로 반환한다.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 빈 문자열이 주어질 수도 있다.
// 예시:

// 입력: "hello world"
// 출력: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}

// 입력: "hello World"
// 출력: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'W': 1, 'r': 1, 'd': 1}

function countCharacters(s) {
  // 결과를 객체 형태로 반환하기 위해 빈 객체 선언
  const count = {};
  // 입력 받은 문자열의 문자 갯수를 세기 위해 순회
  for (let i = 0; i < s.length; i++) {
    // 결과값 내에 전달 받은 문자열을 순회하면서 저장
    // 같은 아스키코드일 경우 센 갯수 증가
    if (count[s[i]]) {
      count[s[i]]++;
    } else {
      // 처음 등장한 아스키코드일 경우 1 할당
      count[s[i]] = 1;
    }
  }
  return count;
}

// 테스트 코드
function testCountCharacters() {
  const testCases = [
    {
      input: "hello world",
      expected: { h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1 },
    },
    { input: "banana", expected: { b: 1, a: 3, n: 2 } },
    { input: "", expected: {} },
    { input: "aabbcc", expected: { a: 2, b: 2, c: 2 } },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = countCharacters(input);
      const isEqual = JSON.stringify(result) === JSON.stringify(expected);
      if (!isEqual)
        throw new Error(
          `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(
            result
          )}`
        );
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice1.js 실행
testCountCharacters();
