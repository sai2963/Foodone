'use server'


import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const ShareMeal = async (formdata)=>{

    
      const meal ={
        title:formdata.get('title'),
        summary:formdata.get('summary'),
        instructions:formdata.get('instructions'),
        image:formdata.get('image'),
        creator:formdata.get('name'),
        creator_email:formdata.get('email'),
      }
      console.log(meal);

      await saveMeal(meal);
      redirect('/meals')
  }
  export default ShareMeal