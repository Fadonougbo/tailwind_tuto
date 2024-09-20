import { Property, define, html } from "hybrids";

const getChildren=(elements:HTMLCollection)=> {
    return [...elements]
}

type CustType={
    tag:string,
    user:string,
    x:string
}

const props={
    tag: "essai-essai",
    user:'',
    x:''
}

const view=({children,user}:CustType&HTMLElement)=> {


    return html`
    <div>
        ${getChildren(children)}
        ${console.log(user)}
        <h1 class='bg-yellow-300' >TEST TEST  sssss</h1>
        <p>test</p>
    </div>
        
        `
}


define<CustType>({
    x:'ssss',
    ...props,
    render:(host)=> view(host)
  });

/* define({
    tag: "essai-essai",

    name:{
        
    }
    render:{
        
        connect(host, key, invalidate) {
            
            console.log(host,'connect');
        },
        observe(host, value, lastValue) {
            console.log(host,'observe');
        },
        value:({children})=>  html`
        <div>
            ${getChildren(children)}

            <h1 class='bg-yellow-300' >TEST TEST</h1>
            <p>test</p>
        </div>
            
            `,
        shadow:false

    }
    
  }); */