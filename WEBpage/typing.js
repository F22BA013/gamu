const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
        setTimeout(() => {
            document.querySelector(element).textContent += character;
        }, 100 * ++index);
    });
}

typing('#typing', '井田恵人の自己紹介ページ', );
typing('#typing2', '井田恵人の食べたものページ', );
typing('#typing3', '井田恵人の行ったところページ', );
