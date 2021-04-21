import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';


export default function Team() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <main>
          List of team members here
        </main>
      </Layout>
    );
  }