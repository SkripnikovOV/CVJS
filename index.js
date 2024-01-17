
// In index.js
import { dataAbout } from './pages/about.js';
import { dataExperience } from './pages/experience.js';
function addDataToPage(language) {
  let data = {
    English: {
      header: {
        labelimg: 'link to picture',
        fullname: 'Skripnikov Oleg Valerievich',
        link: ['About', 'Experience', 'Skills', 'Education'],
        button: 'Contacts',
      },
    },
    Russian: {
        header: {
          labelimg: 'link to picture',
          fullname: 'Cкрипников Олег Валерьевич',
          link: ['Обо мне', 'Опыт', 'Навыки', 'Образование'],
          button: 'Контакты',
          
        },
        
       
      },
      footer: {
        img: {
          socialnetwork: 'link to socialnetwork',
          email: 'link to email',
          phone: 'link to phone'
        },
        link: {
        socialnetwork: 'https://spb.hh.ru/resume/a6728f72ff09cfb9180039ed1f66696e635162',
        email: 'skrypnik52@gmail.com',
        phone: '+79063560352'
    },
    copyright: '© 2024 By Oleg Skripnikov'
        
  }};
  
  // Create header, main and footer elements
  let header = document.createElement('div');
  let main = document.createElement('div');
  let footer = document.createElement('div');
  // Adding classes to the created divs
  header.classList.add("header-class");
  main.classList.add("main-class");
  footer.classList.add("footer-class");
  
  // Create header elements and append them to the header    
  let labelimg = document.createElement('img');
  labelimg.src = data[language].header.labelimg;
  header.appendChild(labelimg);
  
  let fullname = document.createElement('h1');
  fullname.textContent = data[language].header.fullname;
  header.appendChild(fullname);
  
  for (let i = 0; i < data[language].header.link.length; i++) {
    let link = document.createElement('a');
    link.textContent = data[language].header.link[i];

    // Add class to the link which duplicates its name
    link.classList.add(data[language].header.link[i].replace(' ', '-').toLowerCase());

    header.appendChild(link);
        
    link.textContent = data[language].header.link[i];
    header.appendChild(link);
  }
  
  let button = document.createElement('button');
  button.textContent = data[language].header.button;
  button.classList.add("button-class");
  header.appendChild(button);
  

  
  // Create main elements and append them to the main
let currentPage = 'experience';

function renderPage() {
  // Clear the main element
  main.innerHTML = '';

  switch(currentPage) {
    case 'about':
      let imgAbout = document.createElement('img');
      imgAbout.src = dataAbout[language].img;
      main.appendChild(imgAbout);

      let paragraphAbout = document.createElement('p');
      paragraphAbout.textContent = dataAbout[language].paragraph;
      main.appendChild(paragraphAbout);
      break;
    case 'experience':
      let imgExperience = document.createElement('img');
      imgExperience.src = dataExperience[language].img;
      main.appendChild(imgExperience);

      let paragraphExperience = document.createElement('p');
      paragraphExperience.textContent = dataExperience[language].paragraph;
      main.appendChild(paragraphExperience);
      break;
    // Add more cases for other pages as needed
  }
}
// Call the function to render the default page
renderPage();

  // Create footer elements and append them to the footer

        let footerContact = document.createElement('div');
        footerContact.classList.add('footer-contact');

        for(let image in data.footer.img) {
        let conteynt = document.createElement('div');
        let title = document.createElement('h6');
        title.textContent = image;
        let img = document.createElement('img');
        img.classList.add(image.replace(' ', '-').toLowerCase());
        img.src = data.footer['img'][image];
        let paragraph = document.createElement('p');
        paragraph.classList.add(image.replace(' ', '-').toLowerCase());
        paragraph.textContent = data.footer['link'][image];
        if (image === 'socialnetwork') {
          paragraph.textContent = data.footer['link'][image].split('/resume/')[0];
        }
        // Create a link and append the image to it
        let link = document.createElement('a');
        link.href = data.footer['link'][image];
        link.appendChild(img);
        link.appendChild(paragraph);

       conteynt.appendChild(title);
       conteynt.appendChild(link);
       footerContact.appendChild(conteynt);
       
      }
      let copyright = document.createElement('p');
      copyright.textContent = data.footer.copyright;
      copyright.classList.add('copyright-class');
      footer.appendChild(footerContact);
      footer.appendChild(copyright);
 
  

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}

addDataToPage('English')