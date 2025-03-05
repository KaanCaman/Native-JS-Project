/*
 * Palindrome, sondan ve bastan okundugunda ayni olan metinlere denir.
 * Verilen string parametresinin palindrome bir kelime olup olmadigini tespit eden bir fonksiyon yazin.
 * Fonksiyonunuz boolean bir deger return etmelidir.
 *
 * Example
 * Input: Level -> Output: true
 * Input: Deified -> Output: true
 *
 * Input: John -> Output: false
 */

function palindromeChecker(str) {
    // Check the type of input parameter
    // Giriş parametresinin türünü kontrol et
    if (typeof str !== "string") return false; // Exit
  
    //  Reject very short strings (less than 3 characters) as palindromes
    // Çok kısa metinleri (3 karakterden az) palindrom olarak kabul etme
    if (str.length < 3) return false; // exit
  
    // Remove all spaces and special characters, convert to lowercase
    // Tüm boşlukları ve özel karakterleri kaldır, küçük harfe çevir
    // https://regex101.com/
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
    // Reverse the cleaned string
    // Temizlenmiş metni tersine çevir
    const reverseStr = cleanedStr.split("").reverse().join("");
  
    // Compare the cleaned original string with its reverse
    // Temizlenmiş orijinal metinle tersine çevrilmiş metni karşılaştır
    return reverseStr === cleanedStr;
  }
  
  // Kodunuzu farkli girdilerle test edebilirsiniz.
  // Dosyayi calistirmak icin, Terminal >> node palindrome.js
  
  console.log(true,palindromeChecker(true));
  console.log(-1,palindromeChecker(-1));
  console.log(123,palindromeChecker(123));
  console.log([],palindromeChecker([]));
  console.log({},palindromeChecker({}));
  console.log("",palindromeChecker(""));
  console.log("a",palindromeChecker("a"));
  console.log("ab",palindromeChecker("aa"));
  
  console.log("aba",palindromeChecker("aba"));
  console.log("abba",palindromeChecker("abba"));
  console.log("TENET",palindromeChecker("TENET"));
  console.log("Racecar",palindromeChecker("Racecar"));
  console.log("Level",palindromeChecker("Level"));
  console.log("A man a plan a canal Panama",palindromeChecker("A man a plan a canal Panama"));
  console.log("Patika",palindromeChecker("Patika"));
  console.log("12321",palindromeChecker("12321"));
  console.log("Civic",palindromeChecker("Civic"));
  console.log("Aç raporunu koy, okunur o parça.",palindromeChecker("Aç raporunu koy, okunur o parça."));
  console.log("Kayık",palindromeChecker("Kayık"));
  