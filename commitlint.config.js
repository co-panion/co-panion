module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 0: 비활성화, 1: 경고(통과), 2: 에러(차단)
    
    // 제목 본문이 소문자(lower-case)가 아닐 경우 경고 발생 (커밋은 성공)
    'subject-case': [1, 'always', 'lower-case'], 
    
    // 제목 길이가 100자를 초과할 경우 경고 발생 (커밋은 성공)
    'header-max-length': [1, 'always', 100], 
    
    'subject-empty': [2, 'never'], // 내용 없는 커밋 차단
    'type-enum': [
      2,
      'always',
      // 아래 명시된 커밋 타입 접두어만 허용
      ['feat', 'fix', 'docs', 'chore', 'refactor', 'style', 'test', 'design']
    ]
  }
};