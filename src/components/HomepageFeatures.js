import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const Features = [
  {
    title: 'Easy to follow',
    Svg: require('../../static/img/core/undraw_steps.svg').default,
    description: (
      <>
        Objective of this workshop is to enable you to create a fully operational
        solution for your usecase by following simple steps
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/core/undraw_focus.svg').default,
    description: (
      <>
        Amorphic lets you focus on your usecase, and we&apos;ll do the chores. Go
        ahead and click the <code>Get Started</code> link above.
      </>
    ),
  },
  {
    title: 'Powered by Amorphic',
    Svg: require('../../static/img/core/undraw_powered_by_amorphic.svg').default,
    description: (
      <>
        Extend or customize your usecase with the help of Amorphic.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
