/*
 * Verilen arrayi, verilen sayida elemente sahip gruplara ayristirin. Eger islem sonucunda ayrismamis element kaldiysa, kalan grubuna ekleyin.
 * Fonksiyonunuz asagidaki gibi bir obje return etmelidir.
 *
 * {
 *   grup1: [ 1, 2 ],
 *   grup2: [ 3 ,4 ],
 *   kalan: [ 5 ]
 * }
 *
 * Example
 * Input: chopArray([1,2,3,4,5], 2)
 * Output:
 * {
 *   grup1: [ 1, 2 ],
 *   grup2: [ 3 ,4 ],
 *   kalan: [ 5 ]
 * }
 */

// Array chopping function
// Dizi parçalama fonksiyonu
function chopArray(array, numElements) {
  const result = {};
  const arrayLength = array.length;

  // Check if the input is an array
  // Array olup olmadığını kontrol et
  if (!Array.isArray(array)) return "Hata: Lütfen bir dizi girin."; // Error: Please provide an array.

  // Check if numElements is a number
  // numElements'in bir sayı olup olmadığını kontrol et
  if (typeof numElements !== "number") return "Hata: Lütfen bir sayı girin."; // Error: Please provide a number.

  // Check if numElements is at least 1
  // numElements'in en az 1 olup olmadığını kontrol et
  if (numElements < 1) return "Hata: Lütfen 1 veya daha büyük bir sayı girin."; // Error: Please provide a number greater than or equal to 1.

  // If array length equals numElements, return the whole array as one group
  // Eğer dizi uzunluğu numElements'e eşitse, tek bir grup olarak dön
  if (arrayLength === numElements) return { grup1: array };

  // If array length is smaller than numElements, return it as "remaining"
  // Eğer dizi uzunluğu numElements'ten küçükse, tüm diziyi "kalan" olarak dön
  if (arrayLength < numElements) return { kalan: array };

  let i = 0;
  const remainder = arrayLength % numElements; // Kalan eleman sayısı
  const totalGroups = Math.ceil(arrayLength / numElements); // Kaç grup olacağını hesapla

  while (i < totalGroups) {
    // `(i * numElements)` determines from which element in the array to retrieve. which group?
    // `(i * numElements)`, dizide hangi elemandan itibaren alınacağını belirler. kaçıncı grup?

    if (i === totalGroups - 1 && remainder > 0) {
      result["kalan"] = array.slice(i * numElements, arrayLength);
    } else {
      result[`grup${i + 1}`] = array.slice(
        i * numElements,
        (i + 1) * numElements
      );
    }
    i++;
  }

  // console.log(result);
  return result;
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node chop-array.js
console.log(chopArray("Merhaba", 3));
console.log(chopArray([1, 2, 3, 4, 5], "a"));
console.log(chopArray([1, 2, 3, 4, 5], 0));
console.log(chopArray([21, 22, 23, 24, 25], 5));
console.log(chopArray([11, 22, 33, 44, 55], 6));

console.log(chopArray(["a", "b", 1, 2, "c", "d", 525], 4));
console.log(chopArray([10, 20, 11, 30, 41, 50], 3));
console.log(chopArray([10, 20, 11, 30, 41, 50], 2));
console.log(chopArray([10, 20, 11, 30, 41, 50], 1));
console.log(chopArray([10, 20, 11, 30, 41, 50], 6));
console.log(chopArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
