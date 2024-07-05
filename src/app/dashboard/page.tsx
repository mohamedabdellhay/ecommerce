"use server"
import Home from "../page"
import { cookies } from 'next/headers'
 
async function create(data: {}) {
    cookies().set('name', '{}')
}



export default async function Dashboard() {


    return(
        <div>
            <h2>Dashboard</h2>
            <Home /> {/* This will render the Home page */}
        </div>
    )
}