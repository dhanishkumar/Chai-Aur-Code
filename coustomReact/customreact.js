function customRender(reactElement,container){

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.childern
    for(const prop in reactElement.props){
        if(prop === 'childern')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    childern:'click me to visit google'
}
const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)