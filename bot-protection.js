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

function botProtection (arr) {
    // TODO: Implement Me
    let result = '';

    console.log(result);
    return result;
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node bot-protection.js
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
    "right"
]);
