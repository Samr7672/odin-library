{const myLibrary=[];

function book(id,author, title ,  status){
    this.id=crypto.randomUUID();
    this.author=author;
    this.title=title;
    this.status=status;

}
function myBook(){
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#Author").value;

    let status=document.querySelector("#status").checked;

    const newBook= new book(author,title,status);
    myLibrary.push(newBook);
    bookCard();

}
function bookCard(){
    const card=document.querySelector(".library-display");
    card. innerHTML=" ";
    myLibrary.forEach((book) => {
        const bookdiv=document.createElement("div")
        bookdiv.classList.add("card");
        const  title= document.createElement("h3")
        title.textContent=book.title;
        const  author= document.createElement("h3")
        author.textContent=book.author;
        const btn3=document.createElement("button")
        btn3.textContent="Remove";
        btn3.dataset.id=book.id;
        const btn4=document.createElement("button")
        btn4.textContent="Status";
        btn4.dataset.id=book.id;
        bookdiv.appendChild(title);
        bookdiv.appendChild(author);
        bookdiv.appendChild(btn4);
        bookdiv.appendChild(btn3);
        card.appendChild(bookdiv);


        

        
    });
}

const button=document.querySelector(".btn");

button.addEventListener("click",()=>{
    const form=document.querySelector(".new-form")
    form.style.display="block";

    console.log("hello")

});
const btn=document.querySelector("form")
    btn.addEventListener("submit",(event)=>{
        console.log("hello")
        event.preventDefault();
        myBook(event);

    })




}
