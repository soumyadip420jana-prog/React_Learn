function customRender(reactElement,container){
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
domElement.setAttribute('href',reactElement.props.href)
domElement.setAttribute('target',reactElement.props.Target);
container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        Target:'_blank'
    },
    children:'click'
}
const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)