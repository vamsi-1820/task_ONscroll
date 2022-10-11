var acc = document.getElementsByClassName("accordion");
var i,j;
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function()
{
    this.classList.toggle("active") 
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) 
    {
        panel.style.maxHeight = null;
    } else 
    {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
  
});
}

const makeActive=(event)=>{
if(event.target.classList.contains('selected'))
{
event.target.classList.remove("selected");
}
else{
event.target.classList.add("selected");
}
}

const openPopUp=(event)=>{
    event.target.children[0].classList.add("openPopUp");
}
const closePopUp=(event)=>{
    event.target.closest('.sub_heading__popup').classList.remove("openPopUp");
}

//activeaccordian
const acctoggle=(event)=>{
    console.log()
}

//dropdown  
document.querySelector('body').addEventListener('click', (e) => {
    let checkElement = e.target.classList.contains('select');
      if (checkElement) {
          var elements = document.querySelectorAll('.select');
            elements.forEach(function(item){
            if(item.value.length == 0){
                item.previousElementSibling.classList.remove('dropdown_selected');
            }
        });
          e.target.previousElementSibling.classList.add('dropdown_selected');
    } else {

        var elements = document.querySelectorAll('.select');
        elements.forEach(function(item){
            if(item.value.length == 0){
                item.previousElementSibling.classList.remove('dropdown_selected');
            }
        });
        return false;
      }
});

//popUps
const OpenpopUp=(popUp)=>{
    if(popUp===2)
    {
        document.getElementById("popUp2").style.display="block";
    }
    if(popUp==1)
    {
        document.getElementById("popUp1").style.display="block";
    }
}

const ClosePopUp=(popUp)=>{
    if(popUp===1)
    {
        document.getElementById("popUp1").style.display="none";
    }
    if(popUp===2)
    {
        document.getElementById("popUp2").style.display="none";

    }
}
 
const arr=["Noida","Amaatra Homes","Valley Pam Galaxy","Sunrise Kamri","Stella Park","Amaatra Homes","ATS Pristine"]
const editable=(event)=>{
    const word=document.querySelector('#input').value;
    if(word.length>0)
    {
         event.target.nextElementSibling.nextElementSibling.classList.add('listingDisplayed');
         event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.display='block';
         event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('listDisplayed')
         event.target.nextElementSibling.style.display='none';
         const list=document.querySelector('.popUp__content__ul');
         list.innerHTML="";
         var data=autoCOmplete(arr,word)
         data.forEach((value)=>{
            if(value.indexOf(word)>-1 )
            {
                value = value.replace(word, `<span style="color:red;">${word}</span>`);
                list.innerHTML += `<div>${value}</div>`
            }
         
         })
    }
    else{
         event.target.nextElementSibling.nextElementSibling.classList.remove('listingDisplayed');
         event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.display='none';
         event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('listDisplayed')
         event.target.nextElementSibling.style.display='block';
    }
}


function autoCOmplete(arr,word)
{
    return arr.filter(e=>
        e.toLowerCase().includes(word.toLowerCase()));
}

//scrollEvent
let headerHeight=document.getElementsByClassName('header')[0].scrollHeight;
let linksHeight=document.getElementsByClassName('links')[0].scrollHeight;
let titleHeight=document.getElementsByClassName('heading')[0].scrollHeight;
let discriptionHeight=document.getElementsByClassName('heading__discription')[0].scrollHeight;
let featuresHieght=document.getElementsByClassName('basic')[0].scrollHeight;

let totalHeight=headerHeight+linksHeight+titleHeight+discriptionHeight+featuresHieght/1.5;

window.addEventListener('scroll',()=>{
    if(window.scrollY>=totalHeight)
    {
        document.getElementById('scroll--nav').style.display="block";
    }
    else{
        document.getElementById('scroll--nav').style.display='none';
       
    }
})


//nav selected
const items=document.querySelectorAll(".accordion")
const navLi=document.querySelectorAll(".scroll--nav__navigation__item")
window.addEventListener("scroll",()=>{  
    let current="";
    items.forEach((item)=>{
        const itemTop=item.offsetTop-70;
        const itemHeight=item.clientHeight;

        if(window.scrollY>=(itemTop-itemHeight))
        {
           current=item.getAttribute("id")
        }
       
    });
    navLi.forEach((li)=>{
        li.classList.remove("selectedNav")
        if(li.classList.contains(current)){
            li.classList.add("selectedNav");

        }
    })
})



const accOpen=(name)=>{
    const propname=name.id;
    console.log(propname);
    document.getElementById(propname).classList.toggle('active')
    var panel=document.getElementById(propname).nextElementSibling;
    // if (panel.style.maxHeight) 
    // {
    //     panel.style.maxHeight = null;
    // } else 
    // {
    // }
    panel.style.maxHeight = panel.scrollHeight + "px";
    // let sectionName = event.target.innerText;
    // let sectionElem = document.getElementsByClassName('acc-title').namedItem(sectionName);
    // sectionElem.classList.add('active');
    // sectionElem.nextElementSibling.style.height = sectionElem.nextElementSibling.scrollHeight + 'px';
    // let pos = document.getElementsByClassName('acc-title').namedItem(sectionName).offsetTop;    
    // setTimeout(() => {
    //     window.scrollTo({top: pos + 57, behavior: 'smooth'})
    // }, 300);
    const itemTop=document.getElementById(propname).offsetTop
    console.log(itemTop)
    setTimeout(() => {
        window.scrollTo({top: itemTop-128, behavior: 'smooth'})
    }, 300);
}
