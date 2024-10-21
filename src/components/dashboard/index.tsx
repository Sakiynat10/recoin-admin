import React from 'react'
import { Newspaper } from "lucide-react"
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';

interface DProps{
    title:string,
    id:string,
}

const DashboardCard = ({title, id}:DProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
        <CardContent>
            <h3 className='text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200'>{title}</h3>
            <div className="flex gap-5 justify-center items-center">
                <Newspaper className="text-slate-500" size={72}/>
                <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">{id}</h3>
            </div>
        </CardContent>
    </Card>
  )
}

export default DashboardCard