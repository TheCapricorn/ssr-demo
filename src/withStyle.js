import React,{useCallback} from  "react";

const withStyle=(DecoratedComponent,styles)=>{
    return (props)=>{
        useCallback(()=>{
            if(props.staticContext){
                props.staticContext.css.push(styles._getCss());
            }
        },[])()
        return(
            <DecoratedComponent  {... props} />
        )
    }
}


export default withStyle