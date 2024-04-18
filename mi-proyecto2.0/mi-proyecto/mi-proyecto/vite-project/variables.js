const handleBarsContext ={

    "/src/pages/index.html" :{
        "todo": "Add some variables here for the partials"
    },
}
const pageContext =(page) =>{
    const context={...handleBarsContext[page]}
    return context;
}
export default pageContext;