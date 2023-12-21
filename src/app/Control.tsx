'use client'
import Link from 'next/link';

export default function Control(){
    return (
        <ul>
            <li><Link href="/create">Create</Link></li>
            <li><Link href="/update/1">Update</Link></li>
            <li><input type="button" value="delete"/></li>
        </ul>
    )
}