/*
 * Bir oyun şirketi, bazı oyuncuların oyun sırasında onların yerine oynayan scriptler kullandığını ve bunun sonucunda
 * para kaybettiklerini fark etti.
 *
 * Sunucularındaki erişim loglarından, geliştiriciler her oyuncunun hangi komutları gönderdiğini görebiliyor.
 * Bu komutları analiz ettiklerinde, bu scriptlerin sürekli aynı komut dizisini kullandığını keşfettiler.
 *
 * Göreviniz, temizlenmiş erişim loglarını kullanarak botları tespit etmektir. Bir oyuncunun temizlenmiş erişim
 * logu, oyuncu tarafından gönderilen komutların boşluklarla ayrılmış bir dizisi şeklinde görünecektir.
 * Temizlenmiş erişim logunda, 3 ARDIŞIK komutun EN AZ 2 KEZ tekrar edilip edilmediğini tespit edin.
 *
 * Örneğin, aşağıdaki gibi bir erişim logumuz var:
 *
 * left right fire jump fire back forward forward jump fire back left left right
 * Bu durumda, "jump fire back" dizisinin iki kez tekrarlandığını görebiliriz.
 *
 * Parametre her zaman bir array olarak verilecektir.
 * Fonksiyonunuz tekrar eden komutu return etmelidir.
 *
 * Example
 * Input: [ "left", "right", "fire", "jump", "fire", "back", "forward", "forward", "jump", "fire", "back" ]
 * Output: "jump fire back"
 */

// Function to detect bot activity
// Bot tespiti yapan fonksiyon
function botProtection(arr) {
  // If the input is not an array, return an error
  // Eğer giriş bir dizi değilse hata ver
  if (!Array.isArray(arr)) return "Hata: Lütfen bir dizi (array) girin."; // Error: Please provide an array.

  let result = "";
  // Array to store sequences of three commands
  // Üçlü komutları saklayan dizi
  const threeSequentialCommands = [];

  // Diziyi 3'erli parçalar halinde böl ve `threeSequentialCommands` dizisine ekle
  // Split the array into 3 parts and add it to the `threeSequentialCommands` array
  for (let i = 0; i < arr.length; i++) {
    const commands = arr.slice(i, i + 3);
    if (commands.length === 3) threeSequentialCommands.push(commands);
  }

  let j = 0;
  while (j < threeSequentialCommands.length) {
    const currentValueJ = threeSequentialCommands[j]; // Şu anki üçlü komut
    let z = j + 1;

    while (z < threeSequentialCommands.length) {
      const currentValueZ = threeSequentialCommands[z]; // Karşılaştırılan üçlü komut

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
      const isBot = currentValueJ.every(
        (value, index) => value === currentValueZ[index]
      );

      if (isBot) {
        // Eğer aynı üçlü tekrar ediyorsa, bot tespit edildi
        // If the same triplet appears again, bot activity detected
        result = currentValueJ.join(" ");
        return result;
      }
      z++;
    }
    j++;
  }

  // Eğer tekrar eden üçlü bulunmazsa bot aktivitesi yoktur
  // If no repeated triplet is found, there is no bot activity
  return result;
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node bot-protection.js
console.log(
  botProtection([
    "a",
    "b",
    "c",
    "b",
    "c",
    "a",
    "a",
    "d",
    "e",
    "f",
    "c",
    "a",
    "a",
    "x",
  ])
);
// Beklenen çıktı: "c a a"
console.log(
  botProtection([
    "left",
    "right",
    "fire",
    "jump",
    "fire",
    "back",
    "forward",
    "forward",
    "jump",
    "fire",
    "back",
    "left",
    "left",
    "right",
  ])
);
// Beklenen çıktı: "fire back left"

console.log(
  botProtection([
    "up",
    "down",
    "left",
    "up",
    "down",
    "left",
    "fire",
    "jump",
    "back",
  ])
);
// Beklenen çıktı: "up down left"

console.log(
  botProtection([
    "shoot",
    "dodge",
    "shoot",
    "dodge",
    "shoot",
    "dodge",
    "jump",
    "fire",
    "back",
  ])
);
// Beklenen çıktı: "shoot dodge shoot"

console.log(
  botProtection([
    "move",
    "move",
    "attack",
    "move",
    "move",
    "attack",
    "fire",
    "fire",
    "jump",
  ])
);
// Beklenen çıktı: "move move attack"

console.log(
  botProtection([
    "left",
    "right",
    "fire",
    "jump",
    "crouch",
    "back",
    "run",
    "forward",
    "jump",
    "fire",
    "dash",
  ])
);
// Beklenen çıktı: " "

console.log(botProtection(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]));
// Beklenen çıktı: " "

console.log(botProtection(["x", "y", "z", "a", "b", "c", "d", "e", "f", "g"]));
// Beklenen çıktı: " "
