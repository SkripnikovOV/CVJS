
const data = { 
    dataTotal: {
    labelimg: '',
    footer: { 
        links: {
         socialnetwork: 'https://spb.hh.ru/resume/a6728f72ff09cfb9180039ed1f66696e635162',
         email: 'skrypnik52@gmail.com',
         phone: '+79063560352'
     },
        img: {
         emailimg: 'sk',
         phoneimg: 'sk',
         socialimg: 'tg',
    },
   
},
languages: [
    'rus',
    'eng'
]  
},
 dataEnglish: {
    links: [
        'About',
        'Experience',
        'Skills',
        'Education',
    ],
    button: 'Contacts',
    labelimg: '',
    fullname: 'Skripnikov Oleg Valerievich',

},
dataRussin: {
    links: [
        'Обо мне',
        'Опыт',
        'Умения',
        'Образование',
    ],
    button: 'Контакты',
    fullname: 'Скрипников Олег Валерьевич',
  
},
structure: [
    'header',
    'main',
    'footer',
]

};
let english = true;
let div = document.createElement('script');
document.body.append(div);
div.setAttribute('src', './pages/about.js');

function createPage (dataPage, eng) {  

let lang =  eng === true ? dataPage.dataEnglish : dataPage.dataRussin;
   
dataPage.structure.map((item) => {
    let div = document.createElement('div');
    document.body.append(div);
    div.setAttribute('class', item)
    console.log(item)

    if (item === 'header') {
        let label = document.createElement('img');
        let buttonlink = document.createElement('a');
        let button = document.createElement('button');
        let name = document.createElement('h1');
        let optionsLang = document.createElement('select');
        let allTag = [label, name, buttonlink,  optionsLang];
        name.append(lang.fullname);
        buttonlink.append(button);
        button.append(lang.button);
       
        allTag.map((element) => { 
            div.append(element)
            if (element === name){
               lang.links.map((element) => {
            let link = document.createElement('a');
            div.append(link);
            link.append(element);
        });  
            }
            if (element === optionsLang){
                dataPage.dataTotal.languages.map((element) => {
                    let option = document.createElement('option');
                    optionsLang.append(option);
                    option.append(element);
                });
            }

        })  
    }

    if (item === 'footer') {
        let elements = dataPage.dataTotal.footer.links
        for (let key in elements) {
            let link = document.createElement('a');
            link.append(elements[key])
           div.append(link)
      
        
    }
} })}


createPage(data, english)


