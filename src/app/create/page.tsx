"use client"
import {useRouter} from "next/navigation";

export default function Create() {
    const router = useRouter();
    return (
        <>
            <h2>Create Page~</h2>
            <form onSubmit={(event)=>{
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                const options = {
                    method: "POST",
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
                    })
            }}>
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="create"/>
                </p>
            </form>
        </>
    )
}