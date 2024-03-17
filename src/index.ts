
const inp=document.querySelector('input')


const onChange=(e:Event)=> {
   
    const currentElement=e.currentTarget as HTMLInputElement

    if(currentElement.files) {
        const files=currentElement.files[0]


        const reader=new FileReader()

        reader.readAsDataURL(files)

        reader.addEventListener('load',(e)=> {
            const img=document.querySelector('img')

            img?.setAttribute('src',`${reader.result}`)
        })
    }
}

inp?.addEventListener('change',onChange)