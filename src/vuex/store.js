import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            rename: {
                'name': 'Имя',
                'taste': 'Вкус',
                'size': 'Объем',
                'strength': 'Крепость',
                'country': 'Страна',
                'manufacturer': 'Производитель',
                'price': 'Цена',
                'id': 'Артикул',
                'material': 'Материал',
                'brightness': 'Жжение',
                'Brightness': 'Яркость вкуса',
                'type': 'Тип',
                'discont': 'Скидка',
            },
            renameForSend: {
                'name': 'Имя',
                'taste': 'Вкус',
                'size': 'Объем',
                'strength': 'Крепость',
                'country': 'Страна',
                'manufacturer': 'Производитель',
                'price': 'Цена',
                'id': 'Артикул',
                'material': 'Материал',
                'type': 'Тип',
                'discont': 'Скидка',
            },

            heightBrouser: null,
            detailItem: {},
            showOrdering: false,
            showDetailItem: false,
            showOld: true,
            item: {
                liquid: {
                    name(){return 'Жидкость'},
                    link(){return '/catalogue/liquid'},
                    categ(){
                        return [
                            ['size', 'Размер'],
                            ['type', 'Тип'],
                            ['strength', 'Крепость'],
                            ['Brightness', 'Яркость вкуса'],
                        ]
                    },
                    items: [
                        {
                            name: 'Kasta',
                            img: '/liq_Kasta.jpg',
                            strength: '60mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '10/10',
                            price: 350,
                            id: '01001',
                            descript: 'Прекрасная Жидкость крепостью 60 мг, аналогов больше нет',
                        },
                        {
                            name: 'Tunguska Wild',
                            img: '/liq_Tunguska Wild.jpg',
                            strength: '18mg',
                            type: 'Обычный',
                            size: '30мл',
                            Brightness: '8/10',
                            price: 380,
                            id: '01002',
                            descript: '18мг не солевого, обычного никотина подарят вам множество эмоций и ярких пуфоф',
                        },
                        {
                            name: 'Electrojam',
                            img: '/liq_ElectrojamS.jpg',
                            strength: '45mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '10/10',
                            price: 350,
                            id: '01003',
                            descript: 'Очень качественная, яркая по вкусу жидкость премиум сегмента. Не забываемо',
                        },
                        {
                            name: 'Full Day',
                            img: '/liq_Full Day.jpg',
                            strength: '50mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '7/10',
                            price: 350,
                            id: '01004',
                            descript: '50 мг солевого никотина и яркие вкусы не оставят вас равнодушным',
                        },
                        {
                            name: 'Tunguska Strong',
                            img: '/liq_Tunguska Strong.jpg',
                            strength: '20mg',
                            type: 'Гибридный',
                            size: '30мл',
                            Brightness: '8/10',
                            price: 350,
                            id: '01005',
                            descript: 'Премиум жидкость с первым гибридным никотином. 20 мг, из них половина соль, а вторая щёлочь - во истину божественно',
                        },
                        {
                            name: 'Indojuice',
                            img: '/liq_Indojuice.jpg',
                            strength: '40mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '7/10',
                            price: 350,
                            id: '01006',
                            descript: 'Крутая соль крепостью 40 мг порадует вас не простыми, а индонезийскими ароматизаторами! Нереальный вкус напомнит многим любимый малайзийские аромы.',
                        },
                        {
                            name: 'Wave',
                            img: '/liq_Wave.jpg',
                            strength: '40mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '10/10',
                            price: 400,
                            id: '01007',
                            descript: 'Wave - от Smoke kitchen легенда вейпинга, не нуждающаяся в представлении. 40 мг солевого никотина',
                        },
                        {
                            name: 'Jam',
                            img: '/liq_Jam.jpg',
                            strength: '40mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '10/10',
                            price: 400,
                            id: '01008',
                            descript: 'Легенда Smoke kitchen, 40 мг яркой соли и дичайшие вкусы',
                        },
                        {
                            name: 'Content',
                            img: '/liq_Content.jpg',
                            strength: '45mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '10/10',
                            price: 400,
                            id: '01009',
                            descript: 'Content - ещё одна разновидность Smoke Kitchen. 45 мг соли',
                        },
                        {
                            name: 'Onix',
                            img: '/liq_Onix.jpg',
                            strength: '50mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '7/10',
                            price: 350,
                            id: '01010',
                            descript: 'Последний оплот 50мг солевого никотина, яркая крепость и дикий вкусовой взрыв не оставит вас в стороне',
                        },
                        {
                            name: 'Target',
                            img: '/liq_Target.jpg',
                            strength: '20mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '6/10',
                            price: 350,
                            id: '01011',
                            descript: '20мг солевого никотина, яркие вкусы',
                        },
                        {
                            name: 'Lops',
                            img: '/liq_Lops.jpg',
                            strength: '50mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '7/10',
                            price: 350,
                            id: '01012',
                            descript: 'Кто не любит мультики? Особенно, когда это легендарные мультфильмы на основе ярчайших ароматизаторов и 50 мг солевого никотина',
                        },
                        {
                            name: 'Husky series',
                            img: '/liq_Husky series.jpg',
                            strength: '20mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '10/10',
                            price: 400,
                            id: '01013',
                            descript: 'Яркая линейка представленная в двух вариантах Mint и double ice series крепостью от 20 до 45 мг солевого никотина, их отличительная черта - замораживающий до мозга холодок в каждой банке',
                        },
                        {
                            name: 'Dinner',
                            img: '/liq_DinnerS.jpg',
                            strength: '20mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '15/10',
                            price: 750,
                            id: '01014',
                            descript: 'Кто не любит немного Англии? Оригинальная премиум жидкость крепостью 20 мг солевого никотина и ОЧЕНЬ яркими ароматизаторами не оставит вас в стороне',
                        },
                        {
                            name: 'Lumberjack',
                            img: '/liq_Lumberjack.jpg',
                            strength: '50mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '7/10',
                            price: 350,
                            id: '01015',
                            descript: 'Легендарный дровосек с очень яркими, манящими вкусами и шикарной крепостью в 50 мг солевого никотина',
                        },
                        {
                            name: 'Ice paradise',
                            img: '/liq_Ice paradise.jpg',
                            strength: '20mg',
                            type: 'Обычный',
                            size: '20мл',
                            Brightness: '6/10',
                            price: 350,
                            id: '01016',
                            descript: 'Волшебная жидкость от дяди Вовы славящаеся своими вкусовыми качествами и разнообразием никотина.',
                        },
                        {
                            name: 'Nictech',
                            img: '/liq_Nictech.jpg',
                            strength: '60mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '8/10',
                            price: 400,
                            id: '01017',
                            descript: 'Ещё одна легенда, равно как и каста обладает Дикой, неповторимой крепостью 60 мг, а так же очень яркими вкусами. Линейка безумно огромна!',
                        },
                        {
                            name: 'Belly Love',
                            img: '/liq_Belly Love.jpg',
                            strength: '50mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '7/10',
                            price: 350,
                            id: '01018',
                            descript: 'Кто не любит красивых девочек? Особенно, когда они представляют яркую, сочную фруктовую линейку с преобладанием 50 мг солевого никотина',
                        },
                        {
                            name: 'Brusko',
                            img: '/liq_Brusko.jpg',
                            strength: '20mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '12/10',
                            price: 400,
                            id: '01019',
                            descript: 'Не нуждается в представлении. Более 20 вкусов в линейке, разнообразие крепости от 20 до 50 мг солевого никотина не оставит никого в здравом уме ! Это безумно круто',
                        },
                        {
                            name: 'Indo Drinks',
                            img: '/liq_Indo Drinks.jpg',
                            strength: '20mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '7/10',
                            price: 350,
                            id: '01020',
                            descript: 'Волшебство Индонезии продолжает покорять нас. В этот раз от Indo представлены множество вкусов разнообразных коктейлей и невообразимых миксов крепостью 20 мг солевого , и яркими индонезийскими ароматизаторами',
                        },
                        {
                            name: 'Indonji',
                            img: '/liq_Indonji.jpg',
                            strength: '40mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '9/10',
                            price: 300,
                            id: '01021',
                            descript: 'Вы когда нибудь оказывались в диких, тропических джунглях ? С этой волшебной бестией вас ждёт незабываемое путешествие в тропический рай, наполненный яркими вкусами и разнообразием крепости от 18 мг обычного никотина до 40 солевого. Выбор за тобой',
                        },
                        {
                            name: 'Starbuzz',
                            img: '/liq_Starbuzz.jpg',
                            strength: '12mg',
                            type: 'Щелочный',
                            size: '30мл',
                            Brightness: '4/10',
                            price: 60,
                            id: '01022',
                            descript: 'Древняя как тварь жидкость на основе щелочного никотина крепость от 9 до 18 мг. Неплохой вкус, хорошая насыщенность',
                        },
                        {
                            name: 'Trix Salt',
                            img: '/liq_Trix Salt.jpg',
                            strength: '35mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '10/10',
                            price: 400,
                            id: '01023',
                            descript: 'Ещё одна легенда от smoke kitchen крепостью 35 мг и яркими вкусовыми эффектами',
                        },
                        {
                            name: 'Sweet Shot',
                            img: '/liq_Sweet Shot.jpg',
                            strength: '35mg',
                            type: 'Солевой',
                            size: '30мл',
                            Brightness: '5/10',
                            price: 250,
                            id: '01024',
                            descript: 'Волшебство этой линейки заключается не в разнообразии вкусов, которые представлены в основном в кондитерке- от блинчиков с ореховой пастой до волшебства персиковых кремовых булочек, а в вариации крепости от 25 до 45 мг солевого никотина',
                        },
                        {
                            name: 'Jam Monster',
                            img: '/liq_Jam Monster.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '11/10',
                            price: 900,
                            id: '01025',
                            descript: 'Оригинальная премиум жидкость прямиком из USA, не путать с русским, из мытищей. Оригинал Америка с диким невообразимым вкусом тоста и фруктовых, масляных добавок.',
                        },
                        {
                            name: 'Made In USSR',
                            img: '/liq_Made In USSR.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '120мл',
                            Brightness: '8/10',
                            price: 350,
                            id: '01026',
                            descript: 'Данная жидкость вернут вас в детство подарив вам множество незабываемых моментов... пирожок с повидлом из школьной столовой, яркий вкус липучего Ириса.. наша рекомендация !',
                        },
                        {
                            name: 'Frankly Monkey',
                            img: '/liq_Frankly Monkey.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: 'мл',
                            Brightness: '6/10',
                            price: 300,
                            id: '01027',
                            descript: 'Бюджетная, но тем не менее вкусная жидкость крепостью 3 мг порадует своих ценителей доступностью и приемлимым вкусом',
                        },
                        {
                            name: 'The Chilerz',
                            img: '/liq_The Chilerz.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '60мл',
                            Brightness: '9/10',
                            price: 300,
                            id: '01028',
                            descript: 'Яркая премиум жидкость дарящая прекрасный охлаждающий эффект и радующая насыщенным вкусом',
                        },
                        {
                            name: 'Dinner',
                            img: '/liq_DinnerO.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '60мл',
                            Brightness: '6/10',
                            price: 1200,
                            id: '01029',
                            descript: 'Старший брат солевого малыша, та же самая премиум Англия. 60 мл, очень яркий вкус и отличное насыщение 3 мг никотина',
                        },
                        {
                            name: 'Acid Sour',
                            img: '/liq_Acid Sour.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '5/10',
                            price: 200,
                            id: '01030',
                            descript: 'Бюджетная линейка неплохой по вкусу жидкости представленная с большим ассортиментом вкусовой палитры, примечательна своей кислинкой в каждой банке!',
                        },
                        {
                            name: 'One Fleek',
                            img: '/liq_One Fleek.jpg',
                            strength: '?mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '1/10',
                            price: 100,
                            id: '01031',
                            descript: 'Очень бюджетная линейка жидкостей сомнительного качества, количество никотина неизвестно',
                        },
                        {
                            name: 'Sort',
                            img: '/liq_Sort.jpg',
                            strength: '?mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '1/10',
                            price: 100,
                            id: '01032',
                            descript: 'Супебюджетная жидкость сомнительного качества. Из достоинств-цена, количество никотина неизвестно',
                        },
                        {
                            name: 'Tunguska',
                            img: '/liq_Tunguska.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '8/10',
                            price: 400,
                            id: '01033',
                            descript: 'Серия Milk Cream - очередное творение наших мастеров жижаделия, примечательно очень ярким вкусом молочных йогуртов, и не только. Наша рекомендация !',
                        },
                        {
                            name: 'Electrojam',
                            img: '/liq_ElectrojamO.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '9/10',
                            price: 400,
                            id: '01034',
                            descript: 'Прекрасный премиум продукт, с огромным количеством вкусов и дичайшим, ярким паром',
                        },
                        {
                            name: 'Lemon lime soda',
                            img: '/liq_Lemon lime soda.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '5/10',
                            price: 200,
                            id: '01035',
                            descript: 'Средняя линейка заправок с неплохими вкусовыми качествами, примечательна фруктовыми вкусами.',
                        },
                        {
                            name: 'Monster',
                            img: '/liq_Monster.jpg',
                            strength: '3mg',
                            type: 'Обычный',
                            size: '100мл',
                            Brightness: '8/10',
                            price: 400,
                            id: '01036',
                            descript: 'Премиум линейка вкуснейших заправок с очень интересными вкусовыми сочетаниями, которые позволят вас наслаждаться каждым пуфом.',
                        },
                    ]
                },
                snus: {
                    name(){return 'Бестабачная смесь'},
                    link(){return '/catalogue/snus'},
                    categ(){
                        return [
                            ['strength', 'Крепость'],
                            ['material', 'Материал'],
                            ['burning', 'Жжение'],
                            ['brightness', 'Яркость вкуса'],
                        ]
                    },
                    items: [
                        {
                            name: 'Undr Grnd',
                            img: '/snus_Undr Grnd.jpg',
                            strength: '120mg',
                            material: 'Белый',
                            burning: '6/10',
                            brightness: '8/10',
                            price: 350,
                            id: '03001',
                        },
                        {
                            name: 'SUPREME',
                            img: '/snus_SUPREME.jpg',
                            strength: '120mg',
                            material: 'Белый',
                            burning: '8/10',
                            brightness: '6/10',
                            price: 350,
                            id: '03002',
                        },
                        {
                            name: 'ZUZU by Faff',
                            img: '/snus_ZUZU by Faff.jpg',
                            strength: '150mg',
                            material: 'Белый',
                            burning: '8/10',
                            brightness: '10/10',
                            price: 350,
                            id: '03003',
                        },
                        {
                            name: 'KURWA',
                            img: '/snus_KURWA.jpg',
                            strength: '150mg',
                            material: 'Белый',
                            burning: '5/10',
                            brightness: '7/10',
                            price: 350,
                            id: '03004',
                        },
                        {
                            name: 'ALFA',
                            img: '/snus_ALFA.jpg',
                            strength: '60mg',
                            material: 'Белый',
                            burning: '5/10',
                            brightness: '5/10',
                            price: 350,
                            id: '03005',
                        },
                        {
                            name: 'ARQA',
                            img: '/snus_ARQA.jpg',
                            strength: '60mg',
                            material: 'Белый',
                            burning: '7,5/10',
                            brightness: '9/10',
                            price: 350,
                            id: '03006',
                        },
                        {
                            name: 'BAD TRIP',
                            img: '/snus_BAD TRIP.jpg',
                            strength: '120mg',
                            material: 'Белый',
                            burning: '6/10',
                            brightness: '6/10',
                            price: 350,
                            id: '03007',
                        },
                        {
                            name: 'KASTA',
                            img: '/snus_KASTA.jpg',
                            strength: '101mg',
                            material: 'Белый',
                            burning: '12/10',
                            brightness: '10/10',
                            price: 350,
                            id: '03008',
                        },
                        {
                            name: 'RED',
                            img: '/snus_RED.jpg',
                            strength: '70mg',
                            material: 'Белый',
                            burning: '10/10',
                            brightness: '5/10',
                            price: 350,
                            id: '03009',
                        },
                        {
                            name: 'ICE COOL',
                            img: '/snus_ICE COOL.jpg',
                            strength: '65mg',
                            material: 'Белый',
                            burning: '5/10',
                            brightness: '10/10',
                            price: 350,
                            id: '03010',
                        },
                        {
                            name: 'BLAX',
                            img: '/snus_BLAX.jpg',
                            strength: '150mg',
                            material: 'Белый',
                            burning: '9/10',
                            brightness: '10/10',
                            price: 350,
                            id: '03011',
                        },
                        {
                            name: 'ICEBERG',
                            img: '/snus_ICEBERG.jpg',
                            strength: '60mg',
                            material: 'Белый',
                            burning: '6/10',
                            brightness: '15/10',
                            price: 350,
                            id: '03012',
                        },
                        {
                            name: 'CORVUS BRUTAL',
                            img: '/snus_CORVUS BRUTAL.jpg',
                            strength: '70mg',
                            material: 'Зеленый',
                            burning: '5/10',
                            brightness: '5/10',
                            price: 350,
                            id: '03013',
                        },
                        {
                            name: 'NICTECH',
                            img: '/snus_NICTECH.jpg',
                            strength: '60mg',
                            material: 'Белый',
                            burning: '10/10',
                            brightness: '7/10',
                            price: 350,
                            id: '03014',
                        },
                        {
                            name: 'STALKER',
                            img: '/snus_STALKER.jpg',
                            strength: '100mg',
                            material: 'Белый',
                            burning: '4/10',
                            brightness: '4/10',
                            price: 350,
                            id: '03015',
                        },
                        {
                            name: 'Boshki',
                            img: '/snus_Boshki.jpg',
                            strength: '50mg',
                            material: 'Зеленый',
                            burning: '4/10',
                            brightness: '5/10',
                            price: 350,
                            id: '03016',
                        },
                    ]
                },
            },
            itemInBasket:[],
            itemDiscont:[],
            itemInSearch:[]
        }
    },
    mutations: {
        sailForToday(state){
            function mulberry32(a) {
                return function() {
                    let t = a += 0x6D2B79F5;
                    t = Math.imul(t ^ t >>> 15, t | 1);
                    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
                    return ((t ^ t >>> 14) >>> 0) / 4294967296;
                }
            }

            let date = new Date()
            let date1 = '' + (date.getFullYear()+100) + date.getMonth() + date.getDate()
            let date2 = date1
            let allItems = Object.values((state.item)).map(i=>i.items).flat().sort(()=>mulberry32(--date1)()-mulberry32(++date2)())
            allItems.splice(4)
            allItems.forEach(i=>{
                i.discont = '15%'
                state.itemDiscont.push(i)
            })
        },

        show(state){
            state.showOrdering = !state.showOrdering
        },
        showDetailItem(state, item){
            state.detailItem = item
            state.showDetailItem = true
        },
        showDetailItemOff(state){
            state.detailItem = {}
            state.showDetailItem = false
        },
        addBasket(state, item){
            let bas = state.itemInBasket
            for(let i in bas){
                if(bas[i] == item){
                    item.amount++
                    return
                }
            }
            item.amount = 1
            bas.push(item)
        },
        removeBasket(state, item){
            let bas = state.itemInBasket
            for(let i in bas){
                if(bas[i] == item){
                    delete bas.amount
                    bas.splice(i,1)
                    break
                }
            }
        },
        setCookie(state){
            document.cookie = ("Basket=" + state.itemInBasket.map(i=>`${i.id}:${i.amount}`)) + 'endBasket; path=/; max-age=100000'
        },
        getOld(state){
            let old = sessionStorage.getItem('old')
            if (old == 'true'){state.showOld = false}
        },
        setOld(){
            sessionStorage.setItem('old', 'true')
        },
        getCookie(state){
            let starsCookie = document.cookie.indexOf('Basket=') + 7
            let endCookie = document.cookie.indexOf('endBasket')

            if (endCookie == -1){
                return
            }

            let arr = []
            let items = state.item
            let cookie = document.cookie.slice(starsCookie,endCookie).split(',')

            for (let i in items){
                items[i].items.forEach(j=>arr.push(j))
            }

            for(let i of cookie){
                for(let j of arr){
                    if(i.split(':')[0] == j.id){
                        state.itemInBasket.push(j)
                        j.amount = i.split(':')[1]
                    }
                }
            }
        },
    },
    actions: {
        addBasket(context, item){
            context.commit("addBasket", item)
            context.commit("setCookie")
        },
        removeBasket(context, item){
            context.commit("removeBasket", item)
            context.commit("setCookie")
        }
    },
    getters:{

    },
})

export default store
