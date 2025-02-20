import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect } from 'react';
import {loadersss} from '../../static/img/undraw_docusaurus_tree.svg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    window.location.href = '/docs/Introduction';
  }, []);
  return (
    <div className={( styles.heroBanner)}>
      <img src='img/Loader.svg' alt='loader'/>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`IELON Whitepaper`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
