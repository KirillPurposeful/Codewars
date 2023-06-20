//Ninety Nine Thousand Nine Hundred Ninety Nine
export function numberToEnglish(x: number): string {
    const ones: string[] = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens: string[] = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens: string[] = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const suffixes: string[] = ['', 'thousand', 'million', 'billion', 'trillion'];
  
    if (!Number.isInteger(x) || x < 0 || x > 99999) {
      return '';
    }
  
    if (x === 0) {
      return 'zero';
    }
  
    function convert(num: number): string {
      if (num < 10) {
        return ones[num];
      } else if (num < 20) {
        return teens[num - 10];
      } else if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + convert(num % 10) : '');
      } else {
        return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + convert(num % 100) : '');
      }
    }
  
    const groups: number[] = [];
    let num = x;
    while (num > 0) {
      groups.push(num % 1000);
      num = Math.floor(num / 1000);
    }
  
    let result: string = '';
    for (let i = 0; i < groups.length; i++) {
      if (groups[i] !== 0) {
        result = convert(groups[i]) + ' ' + suffixes[i] + ' ' + result;
      }
    }
  
    return result.trim();
  }
//Reverse words
  export function reverseWords(str: string): string {
    const words = str.split(" ");
    const reversedWords = words.map(word => reverseString(word));
    return reversedWords.join(" ");
  }
  
  function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }

  