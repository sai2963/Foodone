'use client' 
import { useFormStatus } from 'react-dom';
const MealsFormsubmit = ()=>{
    const {pending } =useFormStatus();
    return (
        <button disabled={pending} className='border-0 px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded cursor-pointer text-lg font-semibold shadow-md hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] focus:outline-none'>
            {pending ? 'submiting...' : 'ShareMeal'}
        </button>
    )
}

export default MealsFormsubmit;