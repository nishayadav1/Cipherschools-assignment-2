let value=[]
fetch("data.json")
.then((val)=>val.json())
.then((data)=>{
    store(data)})


var a=(event)=>{
    search(event)
}
var f =(data)=>{
    if(document.getElementById('item'))
    document.getElementById('item').remove()

    else{
        document.getElementById('new').innerHTML=''
    }

    data.forEach(val => {

        let card = document.createElement("div");
        let name = document.createTextNode( val.name );
        card.appendChild(name);
        let image = document.createElement("img")
        image.src=res.image
        image.width=150
        card.appendChild(image)
    
    });
}


var search=(event)=>{

    if(event){
        let d=event.target.name
        if(d==="all"){
            for (let index = 0; index < value[0].length; index++) {
                filtered=value[0].filter((
var f =(data)=>{
    if(document.getElementById('item'))
    document.getElementById('item').remove()

    else{
        document.getElementById('new').innerHTML=''
    }

    data.forEach(val => {

        let card = document.createElement("div");
var f =(data)=>{
    if(document.getElementById('item'))
    document.getElementById('item').remove()

    else{
        document.getElementById('new').innerHTML=''
    }

    data.forEach(val => {

        let card = document.createElement("div");
        card.className='col'
        let name = document.createTextNode( val.name );
        card.appendChild(name);
        let image = document.createElement("img")
        image.src=val.image
        image.width=150
        card.appendChild(image)
    
    });
}


        card.className='col'
        let name = document.createTextNode( val.name );
        card.appendChild(name);
        let image = document.createElement("img")
        image.src=res.image
        image.width=100
        image.className='div'
        card.appendChild(image)
    
    });
}

)=>
                {
                    return true
                })
            }
        }
        else{
        for (let index = 0; index < value[0].length; index++) {
            fi =value[0].filter((indi)=>
            {
                return indi.type.includes(d)
            })
        }
        }
        console.log(fi)
        f(fi)
        return

    }
    else

    {let f;
    let d=document.getElementById("search").value
    for (let index = 0; index < value[0].length; index++) {
        f=value[0].filter((indi)=>
        {
            return indi.name.includes(d)
        })
    }
    console.log(fi)
    f(fi)

    }
}



var store =(data)=>{
    data.forEach(val => {
        let card = document.createElement("div");
        card.className='col'
        card.id='del'

        let image = document.createElement("img")
        image.src=res.image
        image.width=150
        card.appendChild(image)

        let name = document.createTextNode( val.name );
        card.appendChild(name);

        let description = document.createTextNode(val.price);
        card.appendChild(description);



        let container = document.querySelector("#item");
        container.appendChild(card);

    });
    value.push(data)
}


