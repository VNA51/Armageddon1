export const getUserKey=()=>{
    let userKey='';
    try{
        userKey=localStorage.getItem("API_KEY");
    }
    catch {
        userKey='DEMO_KEY';
    }

    if(!userKey){
        userKey='DEMO_KEY';
    }
    return userKey;
}