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

function chopArray(array, numElements) {
    // TODO: Implement Me
    const result = {};

    console.log(result);
    return result;
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node chop-array.js
chopArray(['a', 'b', 1, 2, 'c', 'd', 525], 4);
chopArray([10,20,11,30,41,50], 3);
chopArray([10,20,11,30,41,50], 2);
chopArray([10,20,11,30,41,50], 1);
chopArray([10,20,11,30,41,50], 6);
