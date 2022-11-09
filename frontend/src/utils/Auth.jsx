import { useEffect } from "react";

function Auth(){
    const coder = new URL(window.location.href).searchParams.get("code");
    console.log(coder);

    useEffect(() => {
        const getAuth = async () => {
            try{
                const response = await fetch(
                    // "http://k7c204.p.ssafy.io:8082/oauth/kakao"
                    // "http://localhost:8082/auth/refresh"
                    // "http://kauth.kakao.com/oauth/token"
                    "localhost:3000/oauth/redirect"
                    , {
                    method : "GET",
                    headers : {
                        "code" : coder,
                    }
                })
                return response;
            }catch(err){
                console.log(err);
            }
        }
        getAuth();
    },[coder]);
}

export default Auth;