
import { useState, useEffect } from 'react';


interface BlogPost {
    id: string;
    title: string;
    img: string;
    text: string;
}


function BlogList() {
    const [blogList, setBlogList] = useState<BlogPost[]>([]);


    useEffect(() => {
        function getBlogs() {
            fetch('https://bjjblog-5c94f-default-rtdb.europe-west1.firebasedatabase.app/.json')
                .then(response => response.json())
                .then(data => {
                    //Om data är null, sätt blogList till en tom array
                    setBlogList(data || [])
                    console.log(data)
                })
                .catch(error => {
                    console.error('Fel vid hämtning av data:', error)
                })
        }
        getBlogs()
    }, []);

    return (
        <>
            <h1>BlogList</h1>
            {/* Kontrollera att blogList inte är tom innan du använder map */}
            {blogList.length > 0 ? (
                blogList.map(blog => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <img src={blog.img} alt={blog.title} />
                        <p>{blog.text}</p>
                    </div>
                ))
            ) : (
                <p>Inga blogginlägg hittades</p>
            )}
        </>
    )
}

export default BlogList;