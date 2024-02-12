window.addEventListener('DOMContentLoaded', () => {


    ///Modal 

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId)
    }
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';

    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    })


    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    })

    const modalTimerId = setTimeout(openModal, 10000);
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll)
        }
    }
    window.addEventListener('scroll', showModalByScroll)

    //Классы для новостей 


    class NewsCard {
        constructor(src, alt, title, descr, date, parentSelector, ...classes) {
            this.title = title;
            this.descr = descr;
            this.src = src;
            this.alt = alt;
            this.classes = classes;
            this.date = date;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'news__item'
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="news__item-subtitle">${this.title}</h3>
                <div class="news__item-descr">${this.descr}</div>
                <div class="news__item-date">${this.date}</div>
                <div class="news__item-button">
                    <div class="button-text">Смотреть</div>
                    <div class="button-arrow"><img src="/icons/chevron-right.svg" alt="button"></div>
                </div>
                `;
            this.parent.append(element)

        }
    }

    new NewsCard(
        "img/news/news_1.png", "news",
        'Портативный NIR-сканер анализирует посевы менее чем за 1 минуту',
        'Бразильская агротехническая компания Grandeo разработала портативное устройство, которое использует определенный тип инфракрасного излучения (NIR или Near Infrared)...',
        '29 декабря 2020 год',
        '.news .container', "news__item"
    ).render();
    new NewsCard(
        "img/news/news_4.png", "news",
        'ФАО наращивает меры реагирования на распространение кукурузной лиственной..',
        'Продовольственная и сельскохозяйственная организация Объединенных Наций (ФАО) приумножает усилия по укреплению общемировых мер реагирования на нашествие кукурузной...',
        '29 декабря 2020 год',
        '.news .container', "news__item"

    ).render();
    new NewsCard(
        "img/news/news_2.png", "news",
        'Новая казахстанская технология позволяет повысить срок свежести хлеба',
        'Совершенствование снабжения населения хлебом и хлебобулочными изделиями требует всестороннего анализа и учёта особенностей формирования производственного потенциала...',
        '29 декабря 2020 год',
        '.news .container', "news__item"

    ).render();
    new NewsCard(
        "img/news/news_5.png", "news",
        'Борьба с маститом с помощью стратегии кормления',
        'Мастит поражает 15-20% коров в мире и продолжает оставаться проблемой для производителей молока. Мы предлагаем рассмотреть борьбу с маститом через стратегии кормления...',
        '29 декабря 2020 год',
        '.news .container', "news__item"

    ).render();
    new NewsCard(
        "img/news/news_3.png", "news",
        'В Алматинской области начали разводить маралов',
        'В Алматинской области намерены развивать медицинский туризм путем разведения маралов. Так, в Аксуском районе создано специальное хозяйство, куда завезено...',
        '29 декабря 2020 год',
        '.news .container', "news__item"

    ).render();
    new NewsCard(
        "img/news/news_6.png", "news",
        'Сократить посевы риса и хлопка предлагают в Казахстане',
        'В Казахстане необходимо сократить посевы риса и хлопка. Эта мера позволит сэкономить потребление воды и избежать её дефицита, заявил министр экологии геологии...',
        '29 декабря 2020 год',
        '.news .container', "news__item"

    ).render();


    //swiper 

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

