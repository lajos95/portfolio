const gyikName = document.querySelectorAll('.gyik-name');

gyikName.forEach((item) => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const isVisible = answer.classList.contains('visible');
        
        gyikName.forEach((conitem) => {
            const otherAnswer = conitem.nextElementSibling;
            if (otherAnswer.classList.contains('visible') && conitem !== item) {
                otherAnswer.classList.remove('visible');
                otherAnswer.classList.add('hidden');
                
                conitem.querySelector('span').textContent = '+';
                setTimeout(() => {
                if (!otherAnswer.classList.contains('visible')) {
                    otherAnswer.style.display = 'none';
                }
            }, 1000);
            
        }
            /*conitem.nextElementSibling.classList.add('hidden');
            conitem.nextElementSibling.classList.remove('visible');
            conitem.querySelector('span').textContent = '+';*/
        });
        if (isVisible) {
            answer.classList.remove('visible');
            answer.classList.add('hidden');
            item.querySelector('span').textContent = '+';
            setTimeout(() => {
                if(!answer.classList.contains('visible')) {
                    answer.style.display = 'none';
                }
            
            }, 1000);
        } else {
            answer.style.display = 'block';
            setTimeout(() => {
                answer.classList.remove('hidden');
                answer.classList.add('visible');
                item.querySelector('span').textContent = '-';
            }, 10);
        }
    });
});






