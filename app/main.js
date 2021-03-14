window.addEventListener('load',() =>{

    renderPrimary();
    folderEvents();
    asideEvents();
    renderFolder();

    foldersCounts("folders", "work", ".work", ".aside_sections_number");
    foldersCounts("folders", "personal", ".personal", ".aside_sections_number");
    foldersCounts("folders", "hobbies", ".hobbies", ".aside_sections_number");
    foldersCounts("folders", "purchases", ".purchases", ".aside_sections_number");
    
    foldersCounts("category", "primary", ".primary", ".aside_sections_number");
    foldersCounts("category", "social", ".social", ".aside_sections_number");
    foldersCounts("category", "promotions", ".promotions", ".aside_sections_number");
    
    renderCounts("isFaved", ".starred", ".aside_sections_number");
    renderCounts("isSent", ".sent", ".aside_sections_number");
    renderCounts("isSnoozed", ".snoozed", ".aside_sections_number");
    renderCountsAlt("isOpened", ".inbox", ".aside_sections_number");
    
    
    
    
})

/**
 *  Array de Folders
 */

const folders = [
    {
       name: "Personal",
       color: "a" 
    },

    {
        name: "Work", 
        color: "b" 
    },

    {
        name: "Purchases",
        color: "c"  
    },

    {
        name: "Hobbies",
        color: "d"  
    },
]

/**
 * Escribe una fecha formateada a partir de los datos del json
 */


const setDate = (date) => {

    const realDate = new Date(date);

    const y = realDate.getFullYear();
    const m = realDate.getMonth() + 1;
    const d = realDate.getDate();

    return `${d}/${m}/${y}`
};

/**
 * Corta el texto sobrante y le añade puntos 
 */

const formatBody = (body) =>{
    return body.slice(0, 50) + "..."
}

const formatTitle = (body) =>{
    return body.slice(0, 30) + "..."
}

/**
 * Toma el array y los pinta uno por uno
 */

const renderFolder = () => {
    const folderSection = document.querySelector(".folder")
    let htmlString = "";

    for(let i = 0; i < folders.length; i++){

        htmlString += `
        <li class="aside_sections_item ${folders[i].name.toLowerCase()}">
        <a href="#">
            <div class="aside_sections_icon_${folders[i].color}">
                <span class="material-icons">
                    folder
                    </span>
            </div>

            <div class="aside_sections_name">
            ${folders[i].name}
            </div>

            <div class="aside_sections_number active">
                0
            </div>
        </a>
       
    </li>
        ` 
       
        
    }

    folderSection.innerHTML = htmlString;
}

/**
 * Toma el array y filtra los parametros especificados y los pinta
 */

const renderPrimary = () => {


    const filterdMessages = [];
    let htmlString = "";
    const mesageInbox = document.querySelector(".mensages_inbox")

    for(let i = 0; i < mails.length; i++){

        if (mails[i].category == "primary" && !mails[i].isDelete && !mails[i].isSent && !mails[i].isDraft ){

            filterdMessages.push(mails[i]);
        }
       
        
    }

    for(let i = 0; i < filterdMessages.length; i++) {
        htmlString += `

    <article class="mensages_inbox_item ${filterdMessages[i].isSelected ? "active" : ""}" data-id="${filterdMessages[i].id}">
        <a href="#">

            <div class="mensage_user_pic">

                <img src="${filterdMessages[i].sender.picture}" alt="${filterdMessages[i].sender.picture}">
                 
            </div>

            <div class="mensage_content">

                <div class="mensage_user_data">

                    <span class="user_name">${filterdMessages[i].sender.name}</span>
                    <span class="material-icons">${filterdMessages[i].isOpened ? "" : "visibility"}</span>
                    <span class="date">${setDate(filterdMessages[i].sendDate)}</span>
                    

                </div>

                <div class="mensage_title">
                ${formatTitle(filterdMessages[i].subject) }
                </div>

                <div class="mensage_resume">
                    <p class="resume">
                        
                    ${formatBody( filterdMessages[i].body)}
                    </p>

                    <div class="special_icon   ${filterdMessages[i].isFaved ? "active" : ""}" data-id="${filterdMessages[i].id}">
                        <span class="material-icons">
                             ${filterdMessages[i].isFaved ? "star" : "star_border"}
                            </span>

                           
                    </div>   

                </div>  

            </div>
        </a>


    </article> <!--/mensages_inbox_item-->`
    }

    mesageInbox.innerHTML = htmlString;
    mensagesEvents();
    

};

/**
 * Eventos de los mensajes. Esta dividido en varias partes
 * 
 * La primera se encarga de que cuando pulses en la estrella se modifique el modelo y lo repinta.
 * 
 * La segunda coge los datos de un mensaje en concreto y los pinta en el mensaje principal. Tambien cambia en el modelo si ha sido seleccionado y abierto.
 */

const mensagesEvents = () =>{
    const listMensages = document.querySelectorAll(".mensages_inbox_item")
    const star = document.querySelectorAll(".special_icon")
    htmlStringMail = "";
    const mailBox = document.querySelector(".mail")
    
   star.forEach(mensage =>{

        mensage.addEventListener('click', () =>{
            const id = mensage.dataset.id;
            const mail = mails.find(mail => mail.id == id)
            mail.isFaved = !mail.isFaved;
            renderPrimary();
            renderCounts("isFaved", ".starred", ".aside_sections_number");
           
        })
    })
    listMensages.forEach(mensage =>{

        mensage.addEventListener('click', () =>{
            const id = mensage.dataset.id;
            const mail = mails.find(mail => mail.id == id);
             mails.map(modelItem => modelItem.isSelected = false);
           mail.isSelected = true;
           mail.isOpened = true;
            renderPrimary();
            renderCountsAlt("isOpened", ".inbox", ".aside_sections_number");
            htmlStringMail = `
           <div class="head">
                    <div class="head_data">
                        <div class="user_pic">
                            <a href="#">
                                <img src="${mail.sender.picture}" alt="${mail.sender.picture}">
                            </a>
                            
                        </div>

                        <div class="direction">
                            <a href="#">
                                <span class="adress">
                                ${mail.sender.name}
                                </span>
                            </a>
                            
                            <span class="material-icons">
                                arrow_drop_down
                            </span>

                            <span>to</span>
                            <a href="#">
                                <span class="adress">
                                    jajajajja@gmail.com
                                </span>
                            </a>
                            
                        </div> 

                        <div class="other"><a href="#"> ${mail.sender.name} ...</a></div>
                    </div>

                    <div class="head_options">
                        <div class="head_options_items">
                            <a href="#">
                                <span class="material-icons">
                                    reply
                                    </span>

                                    <div class="tooltip">

                                        <span>Reply</span>
                                        
                                    </div>
                            </a>
                            
                        </div>
                        <div class="head_options_items">
                            <a href="#">
                                <span class="material-icons">
                                    delete
                                    </span>

                                    <div class="tooltip">

                                        <span>Delete</span>
                                        
                                    </div>
                            </a>
                            
                        </div>
                        <div class="head_options_items">
                            <a href="#">
                                <span class="fa fa-ellipsis-v"></span>

                                <div class="tooltip">

                                    <span>Options</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div class="date">${setDate( mail.sendDate)}</div>

                <div class="content">
                    <h2 class="titulo">${mail.subject} </h2>

                    <p class="mensage">
                    ${mail.body}
                    </p>
                </div>

                <div class="answer">
                    <div class="box_input">
                        <textarea name="input" id="" cols="70" rows="5"></textarea>
                    </div>

                    <div class="answer_options">
                        <div class="options">
                            <div class="options_item">
                                <a href="#">
                                    <span class="material-icons">
                                        text_format
                                        </span>
                                </a>
                                
                            </div>
                            <div class="options_item">
                                <a href="#">
                                    <span class="material-icons">
                                        attach_file
                                        </span>
                                </a>
                                
                            </div>
                            <div class="options_item">
                                <a href="#">
                                    <span class="material-icons">
                                        image
                                        </span>

                                </a>
                               
                            </div>
                            <div class="options_item">
                                <a href="#">
                                    <span class="material-icons">
                                        link
                                        </span>
                                </a>
                                
                            </div>
                            <div class="options_item">
                                <a href="#">
                                    <span class="material-icons">
                                        insert_emoticon
                                        </span>
                                </a>
                                
                            </div>
                        </div>

                        <div class="send_button">
                            <a href="#">
                                <span class="name"> Send</span>
                            </a>
                                
                            
                        </div>
                    </div>
                </div>
                
                


            </div>

            
           `
           mailBox.innerHTML = htmlStringMail;
        })
    })

}

/**
 * Cuenta los nuemero especifico de mensages que hay con unas categorias y pinta ese numero. Está parametrizado
 */

const foldersCounts = (property, category, mainSelector, selector) =>{
    const inboxNumberBox = document.querySelector(mainSelector + " " + selector);

    let inboxNumber = 0;
    const filterdMessages = [];

    for(let i = 0; i < mails.length; i++){

        if (mails[i][property] == category){

            filterdMessages.push(mails[i]);
        }
       
        
    };

    inboxNumber = filterdMessages.length;
    inboxNumberBox.innerHTML = inboxNumber;
}

const renderCounts = (property, mainSelector, selector) =>{
    const inboxNumberBox = document.querySelector(mainSelector + " " + selector);

    let inboxNumber = 0;
    const filterdMessages = [];

    for(let i = 0; i < mails.length; i++){

        if (mails[i][property]){

            filterdMessages.push(mails[i]);
        }
       
        
    };

    inboxNumber = filterdMessages.length;
    inboxNumberBox.innerHTML = inboxNumber;
}

/**
 * Como hay condiciones que al ser verdaderas son excluyentes, como que un mensaje ha sido abierto, he creado esta variante
 */
const renderCountsAlt = (property, mainSelector, selector) =>{
    const inboxNumberBox = document.querySelector(mainSelector + " " + selector);

    let inboxNumber = 0;
    const filterdMessages = [];

    for(let i = 0; i < mails.length; i++){

        if (!mails[i][property]){

            filterdMessages.push(mails[i]);
        }
       
        
    };

    inboxNumber = filterdMessages.length;
    inboxNumberBox.innerHTML = inboxNumber;
}

/**
 * Eventos programados del aside. Como que se vean o oculten las caracteristicas, o se vea la ventana de nuevo mensaje
 */

const asideEvents = () =>{
    
    const toggle = document.querySelector('.categories_toggle');
    const categories = document.querySelector('.categories');

    const newButton = document.querySelector('.new_button');
    const newMensaje = document.querySelector('.new_mensaje');
    const closeButton = document.querySelector('.close_button')

    toggle.addEventListener('click', () => {
        categories.classList.toggle('active');
    });

    newButton.addEventListener('click', () => {
        newMensaje.classList.add('opened');
    });

    closeButton.addEventListener('click', () => {
        newMensaje.classList.remove('opened');
    });

}

/**
 * Crear nuevos Folders y los añade a la Array. Crea un estring con un prompt y elige aleatoriamente un color para el icono de la carpeta. Si no cumple las caractersitcas salta una alerta 
 */
const folderEvents = () => {
    const newFolder = document.querySelector('.folder_plus');
    const colors = ["a","b","c","d"]
    newFolder.addEventListener('click', () => {
        let name = String (prompt ('Pon un nombre'));
        let numeroMaximo = name.length <= 10;
        let color = colors[Math.floor(Math.random()*colors.length)];
        if (name.length )
        if(numeroMaximo){
            folders.push({name, color})
            console.log(folders);
            renderFolder();
            foldersCounts("folders", "work", ".work", ".aside_sections_number");
            foldersCounts("folders", "personal", ".personal", ".aside_sections_number");
            foldersCounts("folders", "hobbies", ".hobbies", ".aside_sections_number");
            foldersCounts("folders", "purchases", ".purchases", ".aside_sections_number");
        }

        else{
            alert("So long")
        }
       
    });

    
}


