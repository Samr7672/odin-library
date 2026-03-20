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

}
function bookCard{
    const card=document.querySelector(".library-display");
    card. innerHTML=" ";
    myLibrary.array.forEach((book) => {
        const bookdiv=document.createElement("div")
        bookdiv.classList.add("card");
        

        
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
