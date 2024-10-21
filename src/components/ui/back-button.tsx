"use client"
import {ArrowLeftCircle} from 'lucide-react'
import { useRouter } from 'next/navigation';

interface BackButtonProps {
    text:string;
}



const BackButton = ({text}:BackButtonProps) => {
    const router = useRouter();

    return(
        <button 
        onClick={() => router.back()}
           className="text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5"
        >
            <ArrowLeftCircle size={18} />{text}
        </button>
    )
}

export default BackButton;