'use client'
import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation'

export default function Control(){
    const params = useParams();//read페이지의 props를 사용하지 못하므로 useParams 사용
    const router = useRouter();
    const id = params.id;

    return (
        <>
            <ul>
                <li><Link href="/create">Create</Link></li>
                { id ? <>
                    <li><Link href={`/update/${id}`}>Update</Link></li>
                    <li><input type="button" value="Delete" onClick={()=>{
                        const options = {method: "DELETE"}
                        fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${id}`, options)
                            .then(resp=>resp.json())
                            .then(result=>{
                                router.push('/'); //글 삭제한 후 홈으로 리디렉션
                                router.refresh();//다시 렌더링하여 화면 출력
                            });
                    }}/></li>
                </> : null }
            </ul>
        </>
    )
}