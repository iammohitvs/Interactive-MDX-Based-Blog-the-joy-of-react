import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";

import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
    const blogPosts = await getBlogPostList();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.mainHeading}>Latest Content:</h1>

            {/* TODO: Iterate over the data read from the file system! */}
            {blogPosts.map((post, index) => (
                <BlogSummaryCard
                    slug={post.slug}
                    title={post.title}
                    abstract={post.abstract}
                    publishedOn={post.publishedOn}
                    key={post.publishedOn + String(index)}
                />
            ))}
        </div>
    );
}

export default Home;
