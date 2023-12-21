"use client"
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

interface Result {
    id: string;
    title: string;
    body: {content : string};
}

export default function Update() {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const id = params.id;
    useEffect(()=>{
        fetch('http://localhost:9999/topics/'+id)
            .then(resp=>resp.json())
            .then(result=>{
                console.log(result.body.content);
                setTitle(result.title);
                setBody(result.body.content);
            })
    }, []);
    return (
        <>
            <h2>Create Page~</h2>
            <form onSubmit={(event)=>{
                event.preventDefault();
                const title = (event.target as any).title.value;
                const body = (event.target as any).body.value;
                const options = {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title, "body": {"content": body}})
                }

                fetch('http://localhost:9999/topics', options)
                    .then(res=>res.json())
                    .then(result=>{
                        console.log(result)
                        const lastId = result.id;
                        router.push(`/read/${lastId}`); //생성한 글 페이지로 리디렉션
                        router.refresh(); //서버 컴포넌트를 강제로 다시 랜더링 하도록 하는 기능, refresh 하기 전에 app/layout에서 fetch한 캐시 지우기
                    })
            }}>
                <p>
                    <input type="text" name="title" placeholder="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <textarea name="body" placeholder="body" value={body} onChange={e=>setBody(e.target.value)}></textarea>
                </p>
                <p>
                    <input type="submit" value="Update"/>
                </p>
            </form>
        </>
    )
}