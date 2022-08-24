const reasonItems = document.querySelectorAll('.why-choose-us .reasons .reason-item');

reasonItems.forEach((itemElement) => {

    itemElement.addEventListener('click', () => {

        reasonItems.forEach((item) => item.classList.remove('active'));

        itemElement.classList.add('active');
    
    });

});