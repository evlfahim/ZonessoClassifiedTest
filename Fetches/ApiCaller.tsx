export const HttpGetCallerWhole = async (endpoint: any, headers: any) => {
  try {
    const savedUserResponse = await fetch(`${endpoint}`, {
      method: "GET",
      headers: headers,
    });

    const responseData = await savedUserResponse.json();
    return responseData;
  } catch (err) {
    return err;
  }
};

export const HttpOTHERcaller = async (
  endpoint: any,
  headers: any,
  method: string,
  body: Object
) => {
  console.log(endpoint,headers,method,body)
  try {
    const savedUserResponse = await fetch(`${endpoint}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });

    const responseData = await savedUserResponse.json();
    return responseData;
  } catch (err) {
    return err;
  }
};
export const HttpOTHERFormDatacaller = async ({
  endpoint,
  headers,
  method,
  body,
}: {
  endpoint: string;
  headers?: { [key: string]: string };
  method: string;
  body: any;
}): Promise<any> => {
  try {
    const savedUserResponse = await fetch(endpoint, {
      method: method,
      headers: headers,
      body: body,
    });

    const responseData = await savedUserResponse.json();
    return responseData;
  } catch (err) {
    return err;
  }
};


export default HttpGetCallerWhole;
