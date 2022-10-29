
export const getEnvVariables = () => {

 //import.meta.env;


  return  {
    REACT_APP_MAILCHIMP_URL: import.meta.env.REACT_APP_MAILCHIMP_URL,
    REACT_APP_MAILCHIMP_U: import.meta.env.REACT_APP_MAILCHIMP_U,
    REACT_APP_MAILCHIMP_ID: import.meta.env.REACT_APP_MAILCHIMP_ID,
  }

}
