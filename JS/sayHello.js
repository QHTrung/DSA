// Say hello bằng nhiều ngôn ngữ
// Viết hàm sayHello(languageCode) nhận vào languageCode và trả về câu xin chào của ngôn ngữ tương ứng.

// languageCode = 'en' --> Hello

// languageCode = 'vi' --> Xin chào

// languageCode = 'fr' --> Bonjour

// languageCode = 'cn' --> Nǐn hǎo

// languageCode = 'ja' --> Konnichiwa

// languageCode = 'ko' --> Anyoung haseyo

// Trường hợp không truyền languageCode hoặc languageCode không hợp lệ thì trả về mặc định "Hello"
const sayHello = (languageCode) => {
  const languageObj = {
    en: 'Hello',
    vi: 'Xin chào',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };
  return languageObj[languageCode] || 'Hello';
};
console.log(sayHello('fr'));
console.log(sayHello('en'));
console.log(sayHello('vi'));
console.log(sayHello('frsdad'));
