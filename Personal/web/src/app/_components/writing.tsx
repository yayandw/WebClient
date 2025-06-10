'use client'

import {useEffect, useState} from 'react';
import ItemText from "@/app/_components/item_1";
import Section from "@/app/_components/section";

export default function Writing() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('/api/medium')
            .then(res => res.json())
            .then(posts => {
                const parsedPosts = posts.map(item => {
                    const pubDate = new Date(item.pubDate);
                    return {
                        year: `${pubDate.getFullYear()}-${pubDate.getMonth() + 1}-${pubDate.getDate()}`,
                        title: item.title,
                        description: item["content:encodedSnippet"].substring(0, 500),
                        url: item.link
                    };
                });
                setPosts(parsedPosts);
            });
    }, []);

    return (
        <Section title="Writing">
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <ItemText
                        key={index}
                        year={post.year}
                        title={post.title}
                        description={post.description}
                        url={post.url}
                    />
                ))
            ) : (
                <p className="text-gray-500">Loading...</p>
            )}
        </Section>
    )
}