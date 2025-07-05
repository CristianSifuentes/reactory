import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object> ( iniState:T ) => {

// export function useForm<T>(iniState: T) {

    // const [ form, setForm ] = useState<FormData>({
    //     email: "cristian@gmail.com",
    //     name: "Cristian Sifuentes",
    //     age: 35
    //   });

    const [form, setForm] = useState(iniState);

       const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
          const { name, value } = target;
    
          console.log(name, value);
    
          setForm({
            ...form,
            [name]: value
          })
      }

      return {
        form,
        handleChange
      }
}

// export const useForm = ( iniState:any ) => {

// }