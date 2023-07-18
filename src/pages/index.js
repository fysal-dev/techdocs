import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="homepage-body">
      <header
        className={clsx("hero hero--primary ", styles.heroBanner)}
        style={{ height: "55vh" }}
      >
        <div className="homepage-container container">
          <div className="content-left">
            <img
              src="https://raw.githubusercontent.com/fysal-dev/techdocs/main/blog/img/fysalnew.jpg"
              className="avatarImg"
              alt="my image"
            />
          </div>

          <div className="content-right">
            <h1 className="hero__title">{siteConfig.title} 🚀 </h1>
            <p className="home-paragraph">
              <span>💓 {siteConfig.tagline} </span>
              <span>💻 Working as a database Administrator </span>
              <span>Reading books and blogs 📚, are learning curve for me</span>
              <span>
                All blogs were taken as notes for personal & for others to learn
                and understand the concept{" "}
              </span>
            </p>
            {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          </div>
          {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/welcome"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
        </div>
      </header>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
