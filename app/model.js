const mails = [
    {
        sender = {
            name: "Kenny Wylam",
            picture: "http://dummyimage.com/201x120.jpg/dddddd/000000"
          },
    
          sendDate: "2020-04-26T01:00:08Z",
    
          subject: "nec dui luctus rutrum nulla tellus in",
          body: "Proin at turpis a pede posuere nonummy.",
          hasAttachment: true,
          isFaved: false,
          isOpened: false,
          isSent: false,
          isSnoozed: true,
          isDraft: false,
          isDeleted: true,
          isImportant: true,
          isSelected: false,
          isHovered: false,
          category: "promotions",
          folders: "work",
    }
    
]

const mailFilterd = [

    {
        name: "Primary",
        isHovered: false,
        isSelected: true,
    },

    {
        ///
    }
]

const mainMail = [
    {
        sender = {
            name: "Kenny Wylam",
            picture: "http://dummyimage.com/201x120.jpg/dddddd/000000"
          },

        reciber: "name",
        sendDate = "2020-04-26T01:00:08Z",
        subject: "nec dui luctus rutrum nulla tellus in",
        body: "Proin at turpis a pede posuere nonummy.",
        hasAttachment: true,
        media = [
           {
            hasImage: true,
            hasDocument: false,
            document: "???",
           }

        ]

        



    }
]

const generalAsidesItems = [
    {
        nameItem: "Inbox",
        isSelected: true,
        number: 0,
        isHovered: false,

    },

    {
        nameItem: "Starred",
        isSelected: false,
        number: 0,
        isHovered: false,

    },

    {
       
        etc: "etc",

    },


]

const categoriesAsidesItem = [
    {
        nameItem: "Categories",
        isOpen: true,
        isHovered: false,
        categories = [
            {
                
                nameItem: "Principal",
                number: 0,
                isSelected: false,
                isHovered: false,
               
        
            },  
           
        
        ]

    },  

]

const newFolderButton =[
    {
        nameItem: "Folders",
        isHovered: false,
        folders = [
            {
                nameItem: "Personal",
               color: "string",
               number: 0,
               isSelected: false,
               isHovered: false,
        
            },  
           
        
        ]
       

    },  
   

]

 

const newMailButtom = [
    {
        nameItem: "Compose Email",
        isHovered: false,
    },  

]

const newMail = [
    {
        nameItem: "New Mail",
        isVisible: false,
        toPlaceholder: "recipients",
        to: "",
        subjectPlaceHolder: "subject",
        subject: "",
        body: "",

        buttons = [
           ///
        ]
    },  

]

const asideToggle = [

    {
        isHovered: false,
        isOpen: true,
    }

]

const searchBox = [

    {
        textSearch: "",
        textPlaceholder: "Buscar",
        isHovered: false,
        menuOpen: false,
        content = [
            ///
        ]
    }
    

]

