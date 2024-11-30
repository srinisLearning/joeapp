 

export function middleware() {
     //console.log("Hello from Wasan World")
     return Response.json({
        msg:"hello from Wasan World"
     })
}

export const config = () =>{
    matcher:'/about'
}