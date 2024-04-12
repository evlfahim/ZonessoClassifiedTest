import HttpGetCallerWhole, { HttpOTHERFormDatacaller, HttpOTHERcaller } from "./ApiCaller";

const baseUrl = "http://54.147.242.114:4200";
// const baseUrl = "http://192.168.43.210"


type LoginProps = {
  email: string;
  password: string;
};

export const Login = async (payload: LoginProps) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/login`,
    {
      "Content-Type": "application/json",
    },
    "POST",
    payload
  );
  return res;
};

export const Register = async (payload: FormData) => {
    console.log(FormData)
    const res = await HttpOTHERFormDatacaller({
      endpoint: `${baseUrl}/api/register`,
      method: "POST",
      body: payload,
    });
    return res;
  };
  
